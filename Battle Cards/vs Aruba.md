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

Against Aruba, lead with **licensing freedom** and **fabric simplicity**. ClearPass is their trump card — acknowledge its quality but highlight its cost and complexity. Fabric Connect vs. Dynamic Segmentation is a strong differentiator: Extreme's fabric is simpler, standards-based, and doesn't require an external NAC appliance. **Key killer questions**: Ask about the total cost of ClearPass + Central Advanced for their deployment size. Ask if Aruba hardware works without a Central subscription. Ask how long Dynamic Segmentation + ClearPass takes to deploy vs. Fabric Connect.

## Related

- [[Aruba]] — Vendor profile
- [[Competitive Replacements]]
