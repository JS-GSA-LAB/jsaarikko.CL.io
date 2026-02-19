---
competitor: "Aruba"
competitor_code: ARBA
tags: [battle-card]
---
# vs Aruba

> Battle card for competing against **Aruba** (Edge-to-cloud secure networking)

## Their Strengths — How to Counter

### 1. "ClearPass is the industry-leading NAC solution"

> [!info] Their Claim
> Aruba will position ClearPass as the gold standard for network access control, policy management, and guest access.

> [!tip] Counter-Argument
> ClearPass IS a strong NAC product — but it's expensive ($30-$100/endpoint/year), complex to deploy (typically requires professional services), and creates significant vendor stickiness. ExtremeControl provides comparable 802.1X, RADIUS, guest portal, and policy enforcement at lower cost. For customers who want best-of-breed NAC, both Extreme and Aruba integrate with Cisco ISE, Portnox, Foxpass, and others.

**Proof Points:**
- ExtremeControl provides enterprise NAC without ClearPass's price tag
- ClearPass deployments typically require $15K-$50K in professional services
- ClearPass licensing at scale ($50-$100/endpoint/yr) adds significantly to TCO
- Both Extreme and Aruba integrate with third-party RADIUS/NAC solutions
- ExtremeControl integrates natively with Fabric Connect for automated policy enforcement

**Discovery Questions:**
- What is the fully-loaded cost of ClearPass for 5,000 endpoints including appliances, licenses, and PS?
- Can ClearPass work if we switch from Aruba APs to another vendor's APs?
- What percentage of ClearPass deployments are completed without Aruba Professional Services?

---

### 2. "Aruba Central provides superior AIOps and cloud management"

> [!info] Their Claim
> Aruba will showcase Central's AI Insights, client health dashboards, and automated troubleshooting.

> [!tip] Counter-Argument
> Aruba Central is a good platform, but requires a mandatory paid subscription at every tier. ExtremeCloud IQ Navigator is free for basic cloud management. At the advanced tier, XIQ CoPilot provides conversational AI and Digital Twin — capabilities Central doesn't match. Central's "Foundation" tier is limited, pushing customers to the more expensive "Advanced" tier for features that should be baseline.

**Proof Points:**
- ExtremeCloud IQ Navigator is free — Aruba Central starts at $75-$110/device/year
- XIQ CoPilot includes Digital Twin — Aruba Central does not
- XIQ Natural language AI queries available at CoPilot tier
- Aruba Central Foundation is very limited, pushing customers to Advanced ($150-$165/dev/yr)
- ExtremeCloud IQ has 99.999% uptime SLA

**Discovery Questions:**
- What features are in Aruba Central Foundation vs. Advanced? Is Foundation actually usable for production management?
- Does Aruba Central offer a free tier for evaluation or basic management?
- Can Aruba Central do pre-deployment validation with a digital twin?

---

### 3. "Dynamic Segmentation is easier than traditional VLANs"

> [!info] Their Claim
> Aruba positions Dynamic Segmentation as the modern replacement for VLAN-based network design.

> [!tip] Counter-Argument
> Dynamic Segmentation is good but requires ClearPass and Aruba Central to function fully. Extreme's Fabric Connect delivers automated segmentation using IEEE-standard SPB — no overlay, no separate NAC appliance required. Fabric Connect is a true fabric with automated provisioning, while Dynamic Segmentation is a policy overlay that still depends on underlying VLAN infrastructure.

**Proof Points:**
- Fabric Connect uses IEEE 802.1aq (SPB) — an industry standard, not proprietary
- No separate NAC appliance required for basic segmentation
- Fabric Connect eliminates VLAN sprawl entirely — Dynamic Segmentation reduces it but doesn't eliminate it
- Fabric Connect deploys in hours vs. Dynamic Segmentation requiring ClearPass integration (days/weeks)
- SPB fabric provides built-in multipath and fast failover

**Discovery Questions:**
- Does Dynamic Segmentation work without ClearPass?
- Is Dynamic Segmentation based on any IEEE or IETF standard?
- How long does a typical Dynamic Segmentation + ClearPass deployment take?

---

### 4. "ClearPass Onboard has built-in PKI for certificate-based NAC"

> [!info] Their Claim
> Aruba positions ClearPass Onboard as a mature built-in Certificate Authority for BYOD and device onboarding — supporting SCEP and EST enrollment, EAP-TLS, and automated certificate provisioning without external PKI infrastructure. Onboard CA is a separate add-on license to ClearPass Policy Manager.

> [!tip] Counter-Argument
> ClearPass Onboard CA is on-premises only — it runs on the ClearPass appliance/VM, not in the cloud. This means you still need to deploy, patch, maintain, and cluster ClearPass infrastructure. Extreme's EP1 Security delivers Cloud NAC as a fully cloud-native SaaS with RADIUS as a Service — no on-prem NAC appliances. EP1 Security also unifies Cloud NAC + ZTNA in one policy engine. ClearPass has no ZTNA — Aruba sells that as a separate SSE product. And ClearPass Onboard is a separate add-on license on top of already expensive ClearPass Access licensing.

**Proof Points:**
- ClearPass Onboard CA is on-prem only — not cloud-native. Requires appliance deployment, patching, HA clustering
- ClearPass Onboard is a SEPARATE add-on license ($30-$100/endpoint/yr) on top of ClearPass Access
- ClearPass has no ZTNA — Aruba sells SSE/ZTNA as a separate product and subscription
- EP1 Security Secure Plus = unified Cloud NAC + ZTNA in one platform — one policy, one license
- ClearPass appliance costs $25K-$100K+ before licenses — EP1 Security has zero on-prem infrastructure
- ClearPass typically requires $15K-$50K in professional services for initial deployment
- Extreme Cloud NAC uses RadSec (RADIUS over TLS) — fully encrypted, no on-prem RADIUS servers

**NAC/PKI Architecture Comparison:**

| Feature | ClearPass + Onboard | Extreme EP1 Security |
|---------|---------------------|----------------------|
| **Architecture** | On-prem appliance/VM | Cloud-native SaaS |
| **Built-in CA** | Yes (on-prem Onboard CA) | No (external CA) |
| **SCEP** | Yes | External |
| **EST (RFC 7030)** | Yes | External |
| **RADIUS** | On-prem (ClearPass appliance) | Cloud RADIUS as a Service (RadSec) |
| **ZTNA** | No (separate Aruba SSE purchase) | **Yes** (Secure Plus) |
| **On-prem infrastructure** | ClearPass appliance ($25K-$100K+) | None (RadSec proxy optional for legacy) |
| **NAC + PKI licensing** | ClearPass Access + Onboard add-on | EP1 Security per-user (5 devices) |
| **Professional services** | Typically required ($15K-$50K) | Self-service cloud deployment |
| **HA/DR** | Manual appliance clustering | Built into cloud platform |

**Discovery Questions:**
- What is the total cost of ClearPass Access + Onboard licenses + appliances + PS for 5,000 endpoints?
- Is ClearPass Onboard CA cloud-hosted or does it run on the on-prem ClearPass appliance?
- Does ClearPass include ZTNA for remote users, or is that a separate Aruba SSE purchase?
- Can ClearPass Onboard CA auto-revoke certificates when devices are removed from Intune/Jamf?

---

## When They Attack Extreme

### 1. "Extreme has a smaller wireless market share than Aruba"

> [!warning] Their Attack
> Aruba will cite IDC/Dell'Oro market share data showing their larger wireless installed base.

> [!tip] Counter
> Market share tells you who spent the most on marketing and channel incentives — not who has the best technology. Extreme was recognized alongside Aruba as a Gartner MQ Leader for Wired and Wireless LAN. Our cloud-native architecture was built from scratch, while Aruba Central evolved from a legacy controller architecture.

**Proof Points:**
- Both Extreme and Aruba are Gartner MQ Leaders
- Extreme's cloud-native XIQ was built from Day 1 as microservices — Aruba Central was retrofitted
- Extreme's universal hardware provides management flexibility Aruba can't match
- Market share is shifting as cloud-native platforms gain traction
- Extreme's NPS (customer satisfaction) scores consistently outperform Aruba

**Discovery Questions:**
- If market share mattered most, why did Aruba even exist when Cisco had 60%+ share?
- What percentage of Aruba customers are on Central Advanced vs. Foundation? How satisfied are Foundation customers?
- Can Aruba AP hardware seamlessly switch between cloud and on-prem management without hardware replacement?

---

### 2. "Extreme's Fabric Connect (SPB) is a niche protocol vs. industry-standard EVPN-VXLAN"

> [!warning] Their Attack
> Aruba (and Juniper) may attack SPB as less widely adopted than EVPN-VXLAN.

> [!tip] Counter
> SPB (802.1aq) IS an IEEE standard — and for campus networks, it's simpler and more operationally efficient than EVPN-VXLAN. EVPN-VXLAN was designed for data centers and adapted for campus; SPB was designed specifically for campus/enterprise fabric from the start. Simplicity in the campus is a feature, not a limitation.

**Proof Points:**
- SPB (802.1aq) is IEEE-ratified — as "standard" as 802.11 Wi-Fi
- SPB provides auto-provisioning, auto-failover, and zero-touch fabric without VXLAN tunnels
- EVPN-VXLAN campus deployments are significantly more complex and typically require PS
- Gartner specifically cites Fabric Connect as an Extreme strength
- Thousands of campus networks running Fabric Connect in production globally

**Discovery Questions:**
- How long does a typical EVPN-VXLAN campus fabric deployment take from design to production?
- Does EVPN-VXLAN in the campus require BGP expertise? How many campus network engineers have BGP experience?
- Can you deploy EVPN-VXLAN campus fabric without professional services?

---

## Summary

Against Aruba, lead with **licensing freedom**, **fabric simplicity**, and **cloud-native NAC + ZTNA**. ClearPass is their trump card — acknowledge its quality but highlight its cost, complexity, and on-prem-only architecture. ClearPass Onboard CA is on-prem, requires add-on licensing, and has no ZTNA — Extreme EP1 Security delivers unified Cloud NAC + ZTNA with zero on-prem infrastructure. Fabric Connect vs. Dynamic Segmentation remains a strong differentiator. **Key killer questions**: Ask about total ClearPass cost (Access + Onboard + appliances + PS). Ask if ClearPass Onboard CA is cloud-hosted. Ask if ClearPass includes ZTNA or if that's a separate SSE purchase.

## Related

- [[Aruba]] — Vendor profile
- [[Competitive Replacements]]
