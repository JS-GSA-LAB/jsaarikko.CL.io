---
competitor: "Meraki"
competitor_code: MRAK
tags: [battle-card]
---
# vs Meraki

> Battle card for competing against **Meraki** (Cloud-first simplified IT)

## Their Strengths — How to Counter

### 1. "Meraki is the simplest network platform to deploy and manage"

> [!info] Their Claim
> Meraki will emphasize their cloud dashboard simplicity, zero-touch provisioning, and the ability for non-networking staff to manage the network.

> [!tip] Counter-Argument
> Meraki IS simple — but simplicity comes at a severe cost. When you hit the limits of what Meraki can do (and you will), there's no escape hatch. No CLI, no on-prem fallback, no custom configuration. Extreme's ExtremeCloud IQ is equally easy for day-to-day operations but provides depth when you need it — plus on-prem and hybrid options.

**Proof Points:**
- ExtremeCloud IQ dashboard is comparably intuitive for routine operations
- XIQ provides CLI access when you need advanced configuration — Meraki never does
- ExtremeCloud IQ offers on-prem (XIQ-SE) for organizations with cloud restrictions
- Meraki simplicity works until it doesn't — then you're trapped with no workaround
- Universal hardware gives you options; Meraki hardware gives you one option: their cloud

**Discovery Questions:**
- What happens when we need a configuration that Meraki Dashboard doesn't support?
- Can we get CLI access to Meraki hardware for troubleshooting?
- What's our fallback if Meraki's cloud service has an outage?

---

### 2. "Everything is included in one license — simple, predictable cost"

> [!info] Their Claim
> Meraki positions their all-in license as simplifying budgeting — hardware + software + support in one annual payment.

> [!tip] Counter-Argument
> The "all-in" license is actually the most expensive and restrictive model in the industry. You're not just paying for management — you're renting your hardware. If you stop paying, **every device in your network stops functioning**. That's not simplicity; that's a hostage situation. Extreme's free Navigator tier means your hardware always works, and you only pay for premium features you actually use.

**Proof Points:**
- Meraki hardware bricks without active license — industry's most extreme lock-in
- Extreme hardware functions at full capability even without any cloud subscription
- 5-year Meraki license cost can exceed the original hardware cost
- Meraki renewal pricing often increases at renewal time — customers report 15-30% increases
- XIQ Navigator is FREE — basic cloud management at zero cost with no expiration

**Discovery Questions:**
- What happens to our 200 APs and 100 switches the day after our Meraki license expires?
- Can you guarantee our renewal pricing won't increase?
- If we decide to move off Meraki, what's the residual value of our hardware?

---

### 3. "Meraki dashboard provides the best visibility and analytics"

> [!info] Their Claim
> Meraki will show their clean dashboard with traffic analytics, client health, and unified visibility across MR/MS/MX.

> [!tip] Counter-Argument
> Meraki's dashboard is clean but shallow. It lacks true AIOps (no AI assistant, no anomaly detection, no digital twin). ExtremeCloud IQ CoPilot provides conversational AI queries, proactive anomaly detection, and Digital Twin for pre-deployment validation — capabilities Meraki simply doesn't offer.

**Proof Points:**
- ExtremeCloud IQ CoPilot: natural language queries ("show me all clients with poor signal in Building A")
- Digital Twin: validate configuration changes before deploying to production
- Proactive ML-based anomaly detection — Meraki only provides basic health scores
- XIQ provides per-client, per-AP, per-switch deep-dive analytics
- Meraki has no equivalent to CoPilot or Digital Twin

**Discovery Questions:**
- Can I ask the Meraki dashboard a question in natural language and get an answer?
- Does Meraki have a digital twin for testing changes before deployment?
- How does Meraki proactively detect network anomalies before users report them?

---

### 4. "Meraki provides simple cloud NAC with Adaptive Policy and Systems Manager"

> [!info] Their Claim
> Meraki positions Adaptive Policy (group-based segmentation) and Systems Manager (MDM/EMM) as providing NAC-like capabilities directly from the Meraki Dashboard. For full 802.1X NAC, Meraki relies on Cisco ISE or third-party RADIUS. Meraki recently launched cloud RADIUS capabilities but has no built-in Certificate Authority or Cloud PKI.

> [!tip] Counter-Argument
> Meraki's NAC story is fragmented. Adaptive Policy provides basic segmentation but is NOT true NAC — there's no 802.1X authentication engine, no RADIUS server, no certificate-based auth in the Meraki Dashboard. For real NAC, Meraki customers must buy Cisco ISE (on-prem, $50K+) or use a third-party RADIUS. Meraki has no built-in CA, no Cloud PKI, and no ZTNA (that's Cisco Secure Connect — yet another separate product and license). Extreme's EP1 Security delivers unified Cloud NAC + ZTNA with built-in RADIUS as a Service — all cloud-native, all in one platform, and your hardware still works if you stop paying.

**Proof Points:**
- Meraki Dashboard has no built-in RADIUS server — must use ISE or third-party for 802.1X
- Meraki has no built-in Certificate Authority — no Cloud PKI capability
- Meraki has no ZTNA — requires separate Cisco Secure Connect subscription
- For full NAC, Meraki customers need ISE ($50K+ appliances + Advantage licenses + PS)
- Adaptive Policy is group segmentation, not NAC — no auth, no profiling, no cert-based access
- EP1 Security Secure Plus = unified Cloud NAC + ZTNA in one platform — cloud-native SaaS
- If Meraki license expires, hardware bricks — including any NAC/security policies. EP1 Security has no hardware dependency
- Meraki Systems Manager (MDM) is an additional per-device license on top of network licenses

**NAC/PKI Architecture Comparison:**

| Feature | Meraki | Extreme EP1 Security |
|---------|--------|----------------------|
| **Built-in RADIUS** | No — requires ISE or third-party | **Yes** — Cloud RADIUS as a Service (RadSec) |
| **Built-in CA / Cloud PKI** | No | No (external CA) |
| **802.1X NAC** | Via ISE or third-party only | **Yes** — native Cloud NAC |
| **ZTNA** | No (separate Cisco Secure Connect) | **Yes** (Secure Plus) |
| **Segmentation** | Adaptive Policy (group-based, no auth) | Fabric Connect + zero-trust policy engine |
| **MDM** | Systems Manager (extra license) | Intune/Google Workspace integration |
| **Hardware if license expires** | **Bricks** | Continues operating |
| **Products needed for NAC+ZTNA** | 3+ (Meraki + ISE + Secure Connect) | 1 (EP1 Security) |
| **On-prem infrastructure for NAC** | ISE appliances ($50K-$200K+) | None |

**Discovery Questions:**
- Does the Meraki Dashboard include a RADIUS server for 802.1X, or do we need ISE?
- Does Meraki have a built-in Certificate Authority for EAP-TLS certificate-based authentication?
- Does Meraki include ZTNA for remote users, or is that a separate Cisco Secure Connect purchase?
- What is the total cost of Meraki licenses + ISE + Secure Connect for NAC + PKI + ZTNA for 5,000 endpoints?
- If our Meraki license expires, what happens to our NAC policies and network segmentation?

---

## When They Attack Extreme

### 1. "Extreme is too complicated compared to Meraki"

> [!warning] Their Attack
> Meraki reps will position anything with a CLI or on-prem option as "legacy" and "complicated." They'll argue cloud-only is the future.

> [!tip] Counter
> Having options isn't complicated — it's flexible. ExtremeCloud IQ's web interface is just as intuitive as Meraki for day-to-day operations. The difference is that when you need depth, CLI access, or on-prem management (for compliance, air-gapped networks, or government requirements), Extreme delivers. Meraki's "simplicity" is actually "rigidity."

**Proof Points:**
- ExtremeCloud IQ web dashboard handles 95% of daily operations without CLI
- Government, healthcare, and financial customers often REQUIRE on-prem management
- Air-gapped and classified networks cannot use cloud-only solutions
- Having a CLI doesn't mean you must use it — it means you CAN when needed
- Extreme's ZTP (Zero Touch Provisioning) is just as simple as Meraki's

**Discovery Questions:**
- Do you have any federal or DoD customers who are cloud-only? How did they pass security audits?
- If our organization mandates on-prem management, what's your solution?
- When a complex issue arises that Dashboard can't solve, what are our options?

---

### 2. "Extreme doesn't have Meraki's camera, sensor, and IoT ecosystem"

> [!warning] Their Attack
> Meraki may position their camera (MV), sensor (MT), and mobile device management (Systems Manager) as differentiators.

> [!tip] Counter
> Meraki's camera and sensor products are mediocre at best and add to the lock-in problem. Extreme's APs have built-in BLE and Zigbee sensors, and our open API approach lets customers choose best-of-breed IoT and camera solutions (Verkada, Rhombus, Axis) instead of being locked into Meraki's limited ecosystem.

**Proof Points:**
- Extreme APs have built-in BLE 5.2 + Zigbee IoT radios
- Open API integrates with best-of-breed IoT platforms
- Meraki MV cameras are licensed ($200-$300/camera/yr) and cloud-only
- Customers choosing Verkada, Axis, or Rhombus for cameras get better quality at competitive price
- Extreme's location services via BLE are more flexible than Meraki scanning API

**Discovery Questions:**
- What's the total annual cost for 50 Meraki cameras including licenses?
- If we want to use Axis cameras instead of MV, what Meraki integration do we lose?
- Are Meraki MT sensors functional without an active license?

---

## Summary

Against Meraki, lead with **freedom and flexibility**, **hardware-bricking risk**, and **unified cloud NAC + ZTNA**. Meraki has no built-in RADIUS, no Certificate Authority, no Cloud PKI, and no ZTNA — full NAC requires Cisco ISE (on-prem, $50K+) and ZTNA requires separate Cisco Secure Connect. EP1 Security delivers unified Cloud NAC + ZTNA as cloud-native SaaS. And if your Meraki license expires, your entire network — including security policies — stops. **Key killer questions**: Ask what happens to their network when the Meraki license expires. Ask if Meraki Dashboard has a built-in RADIUS for 802.1X. Ask how many Cisco products are needed for NAC + PKI + ZTNA.

## Related

- [[Meraki]] — Vendor profile
- [[Competitive Replacements]]
