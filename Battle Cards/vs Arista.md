---
competitor: "Arista"
competitor_code: ARST
tags: [battle-card]
---
# vs Arista

> Battle card for competing against **Arista** (Data-driven cloud networking for campus and DC)

## Their Strengths — How to Counter

### 1. "We run the world's largest networks — single EOS from data center to campus"

> [!info] Their Claim
> Arista will emphasize their dominant position in data center networking and the fact that a single EOS runs across DC and campus, providing operational consistency and DC-class reliability.

> [!tip] Counter-Argument
> EOS is excellent for data center — no argument. But campus networking is fundamentally different from data center. Campus networks need wireless integration, location services, NAC, IoT support, and fabric automation designed for building-level segmentation — not leaf-spine DC patterns. Extreme has 28+ years of campus expertise. Arista is a campus newcomer with products that debuted in 2023.

**Proof Points:**
- Arista CCS-720 campus switches launched 2023 — very new product line
- Arista wireless (Cognitive Wi-Fi) launched 2024 — less than 2 years in market
- Extreme has 50,000+ campus customers and 28+ years of campus expertise
- Campus requires wireless-first design, not DC-first — Extreme's heritage
- Arista has no NAC solution — critical for campus security

**Discovery Questions:**
- How many campus-only deployments (no DC) have you completed?
- How long has your campus switching product line been in production?
- What is your NAC solution for campus network access control?

---

### 2. "EVPN-VXLAN is the modern fabric standard — SPB is legacy"

> [!info] Their Claim
> Arista will position EVPN-VXLAN as the only modern campus fabric approach, leveraging their DC expertise to suggest SPB is outdated.

> [!tip] Counter-Argument
> SPB (802.1aq) and EVPN-VXLAN are both IEEE/IETF standards. SPB was designed specifically for campus/enterprise fabric from the start — it's simpler, requires no BGP expertise, and deploys in hours. EVPN-VXLAN was designed for data centers and adapted for campus, bringing DC complexity that most campus teams don't need.

**Proof Points:**
- SPB (802.1aq) is IEEE-ratified — as standard as EVPN-VXLAN
- SPB deploys in hours vs EVPN-VXLAN in days/weeks for campus
- EVPN-VXLAN campus requires BGP expertise — rare in campus teams
- Gartner recognizes Fabric Connect as an Extreme strength
- Thousands of campus networks running Fabric Connect globally

**Discovery Questions:**
- How many of your campus network engineers have BGP certification?
- Can you deploy EVPN-VXLAN campus fabric without professional services?
- How long does a typical campus EVPN-VXLAN deployment take from design to production?

---

### 3. "CloudVision provides lifecycle automation across the entire network"

> [!info] Their Claim
> Arista will showcase CloudVision's change control, compliance, telemetry streaming, and image management as superior network lifecycle management.

> [!tip] Counter-Argument
> CloudVision is strong for data center lifecycle management — it was built for that. For campus use cases, it's still maturing. CloudVision requires a paid subscription ($35/switch/mo) with no free tier. ExtremeCloud IQ Navigator is free and provides comparable campus management. CloudVision also has separate wired and wireless portals — not a true single pane of glass for campus.

**Proof Points:**
- ExtremeCloud IQ Navigator is free — CloudVision starts at $20-$35/switch/mo
- XIQ provides true single pane for wired + wireless + SD-WAN
- CloudVision has separate portals for wired (CV) and wireless (CUE)
- CoPilot AI + Digital Twin are capabilities CloudVision lacks
- CloudVision campus management is newer and less proven than XIQ

**Discovery Questions:**
- Does CloudVision offer a free management tier?
- Is there a single dashboard for both wired and wireless management?
- Can CloudVision do pre-deployment validation with a digital twin?

---

### 4. "Arista Validated Designs (AVD) provide best-in-class automation"

> [!info] Their Claim
> Arista will highlight AVD as the industry's most comprehensive network automation framework, with Ansible collections and CI/CD pipeline integration.

> [!tip] Counter-Argument
> AVD is genuinely excellent for automation — Arista deserves credit here. However, AVD primarily targets data center and large-scale EVPN-VXLAN deployments. For campus-focused customers who want simplicity, Extreme's Fabric Connect provides automated segmentation without requiring Ansible expertise or CI/CD pipelines. Not every campus team wants to operate like a DevOps shop.

**Proof Points:**
- Fabric Connect provides automated campus segmentation without Ansible/CI-CD
- AVD is complex — designed for DC-scale operations teams
- Most campus networking teams don't have DevOps/automation expertise
- Extreme provides automation appropriate for campus scale and skills
- XIQ CoPilot provides AI-driven operations without scripting

**Discovery Questions:**
- Does your campus team currently use Ansible or CI/CD pipelines for network changes?
- What is the training investment to adopt AVD for campus operations?
- Can you achieve campus segmentation without AVD automation?

---

### 5. "CloudVision AGNI provides cloud-native NAC with built-in PKI"

> [!info] Their Claim
> Arista positions CV AGNI (launched 2023) as a modern cloud-native NAC replacement for legacy solutions like Cisco ISE and Aruba ClearPass. AGNI includes built-in Cloud PKI with SCEP/EST certificate enrollment, 802.1X EAP-TLS, device profiling via AI/ML, and RadSec transport. Available as SaaS or on-prem appliance (DCA-AGNI-100, formalized July 2025).

> [!tip] Counter-Argument
> AGNI is a credible NAC product, but it launched in 2023 — it's roughly 2 years old competing against solutions with 12-15 years of maturity. More critically, Arista has NO native ZTNA product. For remote user zero-trust access, Arista relies entirely on a Zscaler partnership — that's a separate vendor, separate contract, separate dashboard. AGNI is also optimized for Arista infrastructure end-to-end; multi-vendor enforcement via RadSec is technically possible but not Arista's primary go-to-market. And AGNI's Cloud PKI is NAC-scoped only — not a general-purpose certificate management platform. Extreme's EP1 Security delivers unified Cloud NAC + ZTNA in a single platform from a single vendor, with no dependency on third-party partnerships for zero-trust remote access.

**Proof Points:**
- AGNI launched 2023 — only ~2 years in market vs EP1 Security's mature platform
- Arista has NO native ZTNA — relies on Zscaler partnership (separate vendor, contract, and dashboard)
- AGNI is optimized for all-Arista infrastructure — multi-vendor support is secondary
- AGNI Cloud PKI is NAC-scoped only — not general-purpose certificate management
- No native posture agent — relies on third-party EDR (CrowdStrike, Palo Alto XDR) for device compliance
- EP1 Security Secure Plus = unified Cloud NAC + ZTNA — single vendor, single platform, single dashboard
- Extreme Cloud NAC uses RadSec and works across Extreme and third-party infrastructure
- For full zero-trust (NAC + ZTNA), Arista requires AGNI + Zscaler = 2 vendors. Extreme requires EP1 Security = 1 vendor
- AGNI + MSS + Zscaler + NDR = 4 products for Arista's zero-trust architecture vs 1 EP1 Security platform

**NAC/PKI Architecture Comparison:**

| Feature | Arista CV AGNI | Extreme EP1 Security |
|---------|----------------|----------------------|
| **Architecture** | Cloud-native SaaS + on-prem appliance | Cloud-native SaaS |
| **Built-in CA** | Yes (AGNI Cloud PKI) | No (external CA) |
| **Cloud PKI** | Yes (NAC-scoped, SCEP/EST) | Cloud PKI roadmap |
| **RADIUS** | Cloud RADIUS (RadSec) | Cloud RADIUS as a Service (RadSec) |
| **ZTNA** | **No** — relies on Zscaler partnership | **Yes** (Secure Plus) — native |
| **Device Profiling** | Yes (AI/ML + third-party integrations) | Yes — ML-based profiling |
| **Posture Assessment** | Via third-party EDR only (CrowdStrike, Palo Alto XDR) | Yes — native |
| **Multi-vendor NAS** | Technically supported (RadSec) — Arista-optimized | Yes — vendor-agnostic |
| **Product maturity** | ~2 years (launched 2023) | Mature platform |
| **Products for full zero trust** | 4+ (AGNI + MSS + Zscaler + NDR) | 1 (EP1 Security) |
| **Vendors for NAC + ZTNA** | 2 (Arista + Zscaler) | 1 (Extreme) |

**Discovery Questions:**
- Does Arista offer a native ZTNA product, or do you rely on Zscaler for remote access?
- How long has AGNI been in production? How many enterprise customers are running it at scale?
- Can AGNI enforce policies on non-Arista switches and APs as effectively as on Arista infrastructure?
- What is the total cost of AGNI + Zscaler for unified NAC + ZTNA for 5,000 users?
- Does AGNI's PKI support general-purpose certificate management beyond NAC use cases?

---

## When They Attack Extreme

### 1. "Extreme is too small compared to Arista"

> [!warning] Their Attack
> Arista reps may cite their ~$8.75B revenue and DC dominance to question Extreme's viability and scale.

> [!tip] Counter
> Arista's revenue is impressive but heavily concentrated in data center switching for hyperscalers and large enterprises. In campus networking — which is the primary battlefield — Arista is the newcomer with products that launched in 2023-2024. Extreme has 50,000+ campus customers and is a Gartner MQ Leader for Wired and Wireless LAN. Revenue size doesn't equal campus expertise.

**Proof Points:**
- Extreme is a Gartner MQ Leader for Wired and Wireless LAN — Arista is not
- 50,000+ campus customers including NFL, Bundesliga, US DoD
- 28+ years of campus networking expertise vs Arista's ~2 years
- Arista's campus revenue is a small fraction of their DC-focused business
- Extreme's 100% focus is enterprise networking — Arista splits between DC hyperscaler and campus

**Discovery Questions:**
- Is Arista a Gartner MQ Leader for Wired and Wireless LAN Infrastructure?
- What percentage of Arista's revenue comes from campus (non-DC) deployments?
- How many campus-only customers does Arista have?

---

### 2. "Extreme's Fabric Connect (SPB) is a niche protocol that won't scale"

> [!warning] Their Attack
> Arista will position SPB as a dying protocol compared to EVPN-VXLAN.

> [!tip] Counter
> SPB is an IEEE standard (802.1aq) with thousands of production campus deployments globally. It was designed for campus from day one and excels at the scale campus networks actually need. EVPN-VXLAN brings unnecessary DC complexity to campus environments. The question isn't which protocol scales to 100K DC switches — it's which one deploys faster and operates simpler for a 50-500 switch campus.

**Proof Points:**
- Thousands of production Fabric Connect campus deployments
- IEEE 802.1aq is ratified and maintained
- Fabric Connect campus deployments complete in hours, not weeks
- Most campus networks are 50-500 switches — both protocols scale to this level
- Gartner specifically cites Fabric Connect as an Extreme strength

**Discovery Questions:**
- How many switches is your campus deployment? Does it really need DC-scale EVPN-VXLAN?
- How long did your last EVPN-VXLAN campus deployment take?
- Do your campus engineers have BGP expertise for EVPN-VXLAN troubleshooting?

---

### 3. "Extreme lacks DC-class switching for campus-to-DC convergence"

> [!warning] Their Attack
> Arista may argue that a single vendor from campus to DC is essential and only Arista (with 7050X/7500R/7800R) can deliver.

> [!tip] Counter
> Most enterprises run separate campus and DC teams with different requirements. The idea that one vendor must span both is a sales narrative, not a technical necessity. Extreme's SLX 9000 series handles DC switching, and Fabric Connect provides campus-to-DC integration. For customers who truly need Arista DC switches, Extreme campus gear integrates via standard protocols — you don't need one vendor for everything.

**Proof Points:**
- Most enterprises have separate campus and DC teams and vendors
- Extreme SLX 9000 series covers DC switching needs
- Standard protocols (BGP, EVPN-VXLAN, OSPF) ensure multi-vendor interoperability
- Campus-to-DC integration works via standard routing regardless of vendor
- Locking campus to DC vendor is a lock-in strategy, not a technical requirement

**Discovery Questions:**
- Are your campus and DC teams the same people with the same skills?
- Do you want your campus vendor choice to be dictated by your DC vendor?
- What standard routing protocols connect your campus to your DC today?

---

## Summary

Against Arista, lead with **campus expertise**, **operational simplicity**, and **unified NAC + ZTNA**. Arista is a DC powerhouse entering campus — acknowledge their DC strength but emphasize that campus networking is a different discipline. Their campus products are 1-2 years old; Extreme has 28+ years. AGNI is a credible cloud-native NAC with built-in PKI, but Arista has NO native ZTNA — they rely on a Zscaler partnership (separate vendor, contract, dashboard). EP1 Security delivers unified Cloud NAC + ZTNA from a single vendor. Fabric Connect vs campus EVPN-VXLAN remains your strongest infrastructure differentiator. **Key killer questions**: Ask if Arista has a native ZTNA product (they don't — it's Zscaler). Ask how many products are needed for full zero trust (AGNI + MSS + Zscaler + NDR = 4). Ask how long AGNI has been in production (~2 years). Ask what CloudVision costs vs Extreme's free Navigator tier.

## Related

- [[Arista]] — Vendor profile
- [[Competitive Replacements]]
