---
competitor: "Cisco"
competitor_code: CSCO
tags: [battle-card]
---
# vs Cisco

> Battle card for competing against **Cisco** (Enterprise networking market leader)

## Their Strengths — How to Counter

### 1. "We are the market share leader — largest installed base in the world"

> [!info] Their Claim
> Cisco will emphasize their dominant position in enterprise networking, with the largest channel partner ecosystem and the most certifications (CCNA/CCNP/CCIE). They'll cite market share data and Fortune 500 adoption rates.

> [!tip] Counter-Argument
> Market share does not equal best technology or best value. Cisco's dominance was built on proprietary lock-in and channel incentives, not customer outcomes. Ask: "When was the last time your Cisco rep recommended a solution that reduced your Cisco spend?" Their incentive is to expand your footprint, not optimize it.

**Proof Points:**
- Gartner now recognizes 4 Leaders in wired/wireless LAN — Cisco is not alone
- Extreme Networks has 50,000+ customers globally including 16,000+ schools
- Customer satisfaction scores (NPS) for Extreme consistently exceed Cisco
- Many Fortune 500 companies are actively diversifying away from single-vendor Cisco stacks

**Discovery Questions:**
- What percentage of your enterprise customers run BOTH Catalyst AND Meraki, and what does that dual-platform cost look like?
- Can you show us a Cisco customer who reduced their total Cisco spend while improving network capability?
- How many of your features are available at the base license tier vs. requiring DNA Advantage or Premier?

---

### 2. "Catalyst Center (DNA Center) is the most comprehensive management platform"

> [!info] Their Claim
> Cisco will position Catalyst Center as the gold standard for network management — assurance, automation, SD-Access, policy, and analytics all in one platform.

> [!tip] Counter-Argument
> Catalyst Center is powerful but comes with massive complexity and cost. It requires a dedicated appliance ($25K-$100K+), mandatory DNA licenses, and deep Cisco-specific training. ExtremeCloud IQ delivers comparable capabilities as a true cloud-native SaaS with a free entry tier and no dedicated hardware required.

**Proof Points:**
- ExtremeCloud IQ CoPilot provides AI-driven insights comparable to Catalyst Center Assurance
- XIQ Navigator is completely free — no hardware, no license, no commitment
- Catalyst Center appliance costs $25K-$100K+ before you manage a single device
- ExtremeCloud IQ supports universal hardware — same APs and switches work cloud, on-prem, or hybrid
- Cisco requires DNA Advantage ($175-450/dev/yr) for most useful Catalyst Center features

**Discovery Questions:**
- What is the total cost of Catalyst Center including the appliance, DNA licenses, and SmartNet — for 100 APs and 50 switches?
- Can I run Catalyst Center without any subscription? What features do I lose?
- If I want to move from Catalyst to Meraki management, can I reuse the same hardware?

---

### 3. "SD-Access provides the best network fabric and segmentation"

> [!info] Their Claim
> Cisco will push SD-Access as the premier campus fabric solution with TrustSec security group tags, DNA Center automation, and VXLAN overlays.

> [!tip] Counter-Argument
> SD-Access is architecturally complex — it requires ISE, Catalyst Center, and DNA Advantage licenses working together. Extreme's Fabric Connect uses SPB (Shortest Path Bridging), which is an IEEE standard that delivers equivalent segmentation with dramatically less complexity. Fabric Connect requires no overlay, no ISE equivalent, and no dedicated management appliance.

**Proof Points:**
- Fabric Connect deploys in hours vs. SD-Access in weeks/months
- SPB is an IEEE standard (802.1aq) — not proprietary like TrustSec SGT
- No ISE-equivalent required — policy handled natively in fabric
- Gartner has specifically called out Fabric Connect as an Extreme strength
- SD-Access deployments almost always require Cisco Advanced Services ($50K-$200K+)

**Discovery Questions:**
- How many SD-Access deployments have you completed without Cisco Professional Services?
- What happens to SD-Access segmentation if our ISE server goes down?
- Can you demonstrate SD-Access working without DNA Advantage licenses?

---

### 4. "We have the strongest security portfolio — ISE, TrustSec, Umbrella, Duo, SecureX"

> [!info] Their Claim
> Cisco will highlight their end-to-end security stack as unmatched, from NAC (ISE) to DNS security (Umbrella) to MFA (Duo) to XDR (SecureX).

> [!tip] Counter-Argument
> Cisco's security strength is real but comes at enormous cost and complexity. Each component (ISE, Umbrella, Duo, SecureX) is a separate purchase, license, and management plane. Extreme integrates NAC (ExtremeControl), policy, and segmentation into the fabric natively. For customers who need best-of-breed security, Extreme's open ecosystem integrates with Palo Alto, CrowdStrike, and other leaders without forcing a Cisco-only stack.

**Proof Points:**
- ExtremeControl provides 802.1X/RADIUS NAC without ISE's $50K+ starting cost
- Fabric Connect provides segmentation without TrustSec proprietary tags
- Extreme integrates with Palo Alto, CrowdStrike, SentinelOne — customer chooses best-of-breed
- ISE licensing alone can cost $30-$100/endpoint/year at scale
- Extreme's open API approach means customers aren't locked into one security vendor

**Discovery Questions:**
- What is the fully loaded cost of ISE for 5,000 endpoints including the appliances, licenses, and support?
- If we want to replace Duo with Okta, or Umbrella with Zscaler, what integration is lost?
- How many separate Cisco dashboards does our security team need to monitor?

---

## When They Attack Extreme

### 1. "Extreme is too small — they could get acquired or won't be around"

> [!warning] Their Attack
> Cisco reps frequently use FUD (Fear, Uncertainty, Doubt) about Extreme's size relative to Cisco. They'll question long-term viability and support capability.

> [!tip] Counter
> Extreme Networks is a $1.3B+ publicly traded company (NASDAQ: EXTR) with 50,000+ customers across 80+ countries. We've been in networking for 28+ years. The "too small" argument is the same one Cisco used against Arista — who now dominates data center networking. Size doesn't equal innovation; it often equals bureaucracy.

**Proof Points:**
- NASDAQ-listed, $1.3B+ annual revenue, profitable and growing
- 50,000+ customers including NFL, Bundesliga, US Department of Defense
- Gartner Magic Quadrant Leader for Wired and Wireless LAN
- 28+ years in enterprise networking — we're not a startup
- More focused than Cisco — 100% of our R&D goes to networking, not collaboration/security/observability

**Discovery Questions:**
- Can you name a major Extreme Networks customer who left due to viability concerns?
- What percentage of Cisco's R&D budget goes specifically to enterprise wireless and switching vs. WebEx, AppDynamics, Splunk, etc.?
- Cisco has acquired 220+ companies — how many of those acquired products are still actively developed?

---

### 2. "Extreme has a smaller partner ecosystem — fewer integrations and channel partners"

> [!warning] Their Attack
> Cisco will argue that their partner ecosystem is unmatched, with more VARs, SIs, and technology partners than anyone.

> [!tip] Counter
> Extreme has 13,000+ channel partners globally and a rapidly growing ecosystem. More importantly, our open standards approach (REST APIs, OpenConfig, Ansible, Terraform) means we integrate with more third-party tools natively. Cisco's "ecosystem" often means "you need more Cisco to make Cisco work."

**Proof Points:**
- 13,000+ channel partners worldwide
- RESTful APIs, Terraform provider, Ansible modules all available
- OpenConfig and YANG model support for standards-based automation
- Integrations with ServiceNow, Splunk, Slack, PagerDuty, and 50+ platforms
- Cisco's ecosystem advantage is shrinking as open standards adoption grows

**Discovery Questions:**
- How many Cisco integrations require ISE or DNA Center as a prerequisite?
- Can you automate Cisco SD-Access with standard Ansible playbooks without custom modules?
- What percentage of your "ecosystem" is actually other Cisco products?

---

### 3. "ExtremeCloud IQ is not as mature as Catalyst Center / Meraki Dashboard"

> [!warning] Their Attack
> Cisco reps may position XIQ as newer or less feature-complete compared to their established management platforms.

> [!tip] Counter
> ExtremeCloud IQ was built cloud-native from the ground up — it's not a legacy controller with a cloud wrapper bolted on (like Catalyst Center). XIQ manages 7M+ devices globally, has 99.999% uptime SLA, and includes CoPilot AI with Digital Twin. And our free Navigator tier means customers can evaluate the full management platform with zero commitment.

**Proof Points:**
- 7M+ network devices managed on ExtremeCloud IQ globally
- 99.999% cloud uptime SLA
- CoPilot AI provides natural language network queries
- Digital Twin enables pre-deployment validation
- Free Navigator tier — Cisco has no equivalent free management option
- Universal hardware: same AP/switch managed cloud, on-prem, or hybrid without hardware swap

**Discovery Questions:**
- Does Catalyst Center have a free tier? What's the minimum investment to start?
- Can you move a Catalyst-managed AP to Meraki management without replacing hardware?
- What's the uptime SLA for Catalyst Center SaaS?
- Can I do a full POC of your management platform with zero license commitment?

---

## Summary

Against Cisco Catalyst, lead with **total cost of ownership** and **operational simplicity**. Cisco's strength is breadth, but that breadth creates complexity and cost. Every feature they add requires another license tier, another integration, another training course. Extreme delivers 90% of the capability at 40-60% of the cost with dramatically less complexity. **Key killer questions**: Ask about the TOTAL cost including DNA licenses, ISE, Catalyst Center appliance, and SmartNet. Ask what happens to their hardware if they stop paying DNA subscriptions. Ask how many separate Cisco dashboards their team manages daily.

## Related

- [[Cisco]] — Vendor profile
- [[Competitive Replacements]]
