import express from "express";
import helmet from "helmet";
import { createProxyMiddleware } from "http-proxy-middleware";

/**
 * ENV VARS (set these in Railway):
 * - UPSTREAM_MCP_URL        (required) e.g. "http://134.141.116.46:8000"  (no trailing slash)
 * - PROXY_ROUTE             (optional) default "/mcp"
 * - UI_ROUTE                (optional) default "/"
 * - BASIC_AUTH_USER         (optional) if set, enables Basic Auth for UI + proxy
 * - BASIC_AUTH_PASS         (optional) required if BASIC_AUTH_USER set
 * - FORWARD_AUTH_HEADER     (optional) default "true" => forward Authorization header to upstream
 *
 * Notes:
 * - This app provides a simple web UI and a reverse-proxy endpoint.
 * - Your Claude/clients can point to: https://<your-railway-domain>/mcp
 * - Your existing Meraki MCP server remains where it is; Railway just fronts it with a UI + stable URL.
 */

const app = express();

const PORT = Number(process.env.PORT || 3000);
const UPSTREAM = (process.env.UPSTREAM_MCP_URL || "").replace(/\/+$/, "");
const PROXY_ROUTE = process.env.PROXY_ROUTE || "/mcp";
const UI_ROUTE = process.env.UI_ROUTE || "/";
const FORWARD_AUTH_HEADER = (process.env.FORWARD_AUTH_HEADER ?? "true").toLowerCase() !== "false";

if (!UPSTREAM) {
  console.error("Missing required env var UPSTREAM_MCP_URL");
  process.exit(1);
}

app.disable("x-powered-by");
app.use(helmet({ contentSecurityPolicy: false }));

// Optional Basic Auth for everything
const BASIC_USER = process.env.BASIC_AUTH_USER;
const BASIC_PASS = process.env.BASIC_AUTH_PASS;

function basicAuth(req, res, next) {
  if (!BASIC_USER) return next();
  if (!BASIC_PASS) return res.status(500).send("Server misconfigured: BASIC_AUTH_PASS missing.");

  const header = req.headers.authorization || "";
  const [scheme, value] = header.split(" ");
  if (scheme !== "Basic" || !value) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Meraki MCP Proxy"');
    return res.status(401).send("Auth required.");
  }
  const decoded = Buffer.from(value, "base64").toString("utf8");
  const [u, p] = decoded.split(":");
  if (u === BASIC_USER && p === BASIC_PASS) return next();
  res.setHeader("WWW-Authenticate", 'Basic realm="Meraki MCP Proxy"');
  return res.status(401).send("Invalid credentials.");
}

app.use(basicAuth);

// Health
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// UI
app.get(UI_ROUTE, (_req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Meraki MCP Proxy (Railway)</title>
  <style>
    body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; margin: 0; background:#0b0f17; color:#e8eefc; }
    .wrap { max-width: 860px; margin: 0 auto; padding: 28px 18px; }
    .card { background:#111a2b; border:1px solid #1e2b46; border-radius:14px; padding:18px; margin: 14px 0; }
    h1 { font-size: 20px; margin: 0 0 8px; }
    .muted { color:#9fb0d3; font-size: 14px; }
    code, pre { background:#0b1220; border:1px solid #1e2b46; border-radius:10px; padding:10px; display:block; overflow:auto; }
    .row { display:flex; gap:12px; flex-wrap:wrap; }
    .pill { display:inline-block; padding:4px 10px; border-radius:999px; background:#0b1220; border:1px solid #1e2b46; color:#cfe0ff; font-size: 12px; }
    a { color:#a8c7ff; }
    button { background:#2b6cff; color:white; border:0; border-radius:10px; padding:10px 12px; cursor:pointer; font-weight:600; }
    button:active { transform: translateY(1px); }
    .warn { color:#ffd48a; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <h1>Meraki MCP Proxy (Railway)</h1>
      <div class="muted">
        This Railway service provides a stable HTTPS URL + simple UI in front of your existing Meraki MCP server.
      </div>
      <div style="margin-top:10px" class="row">
        <span class="pill">Upstream: <b>\${UPSTREAM}</b></span>
        <span class="pill">Proxy route: <b>\${PROXY_ROUTE}</b></span>
      </div>
    </div>

    <div class="card">
      <h2 style="margin:0 0 8px; font-size:16px;">Use from Claude / MCP clients</h2>
      <div class="muted">Point your client at:</div>
      <pre id="clientUrl"></pre>
      <script>
        document.getElementById("clientUrl").textContent = location.origin + "\${PROXY_ROUTE}";
      </script>

      <div class="muted" style="margin-top:12px">
        If your upstream expects an <code>Authorization</code> header (e.g. API token), send it from your MCP client.
        \${FORWARD_AUTH_HEADER ? "" : "<div class='warn'>Server is configured NOT to forward Authorization headers.</div>"}
      </div>
    </div>

    <div class="card">
      <h2 style="margin:0 0 8px; font-size:16px;">Railway environment variables</h2>
      <div class="muted">Set these in Railway → Service → Variables:</div>
      <pre>UPSTREAM_MCP_URL=\${UPSTREAM || "http://YOUR_MERAKI_MCP_SERVER:PORT"}
PROXY_ROUTE=/mcp
FORWARD_AUTH_HEADER=true</pre>
      <div class="muted">
        Optional Basic Auth:
      </div>
      <pre>BASIC_AUTH_USER=youruser
BASIC_AUTH_PASS=yourpass</pre>
    </div>

    <div class="card">
      <h2 style="margin:0 0 8px; font-size:16px;">Debug</h2>
      <div class="muted">Check health:</div>
      <pre><a href="/healthz">/healthz</a></pre>
    </div>
  </div>
</body>
</html>`);
});

// Reverse proxy to your existing MCP server.
// Supports SSE + websockets (if your upstream uses them) via http-proxy-middleware.
const proxy = createProxyMiddleware({
  target: UPSTREAM,
  changeOrigin: true,
  ws: true,
  xfwd: true,
  logLevel: "warn",
  pathRewrite: (path) => path.replace(new RegExp(`^${PROXY_ROUTE}`), ""),
  onProxyReq: (proxyReq, req) => {
    // Optionally strip Authorization header (some users want to avoid passing tokens through proxy)
    if (!FORWARD_AUTH_HEADER) {
      proxyReq.removeHeader("authorization");
    }
    // Preserve original host if needed (some MCP servers care)
    proxyReq.setHeader("x-original-host", req.headers.host || "");
  }
});

app.use(PROXY_ROUTE, proxy);

app.listen(PORT, () => {
  console.log(`Meraki MCP Proxy running on :${PORT}`);
  console.log(`Upstream: ${UPSTREAM}`);
  console.log(`Proxy: http://localhost:${PORT}${PROXY_ROUTE} -> ${UPSTREAM}`);
});
