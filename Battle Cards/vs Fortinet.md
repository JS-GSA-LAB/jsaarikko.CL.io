---
competitor: "Fortinet"
competitor_code: FTNT
tags: [battle-card]
---
# vs Fortinet

> Battle card for competing against **Fortinet** (Security-driven networking)

## Their Strengths — How to Counter

### 1. "FortiGate is the #1 NGFW — our security integration is unmatched"

> [!info] Their Claim
> Fortinet leads with their FortiGate NGFW dominance and will position the entire Security Fabric as a single-vendor security + networking solution.

> [!tip] Counter-Argument
> FortiGate is an excellent firewall — no argument. But Fortinet's networking products (FortiSwitch, FortiAP) are secondary products that can't operate independently. They require a FortiGate controller. If you buy Fortinet networking, you're really buying a FortiGate dependency. Extreme's networking products are enterprise-grade, standalone platforms that integrate with any security vendor including Fortinet.

**Proof Points:**
- FortiSwitch has NO standalone operating mode — it requires FortiGate
- FortiAP management is through FortiGate — no independent cloud management
- Extreme switches and APs are fully independent enterprise platforms
- Extreme integrates with Palo Alto, Fortinet, CrowdStrike, and others — customer chooses security vendor
- If FortiGate has an issue, ALL FortiSwitches and FortiAPs are affected — single point of failure

**Discovery Questions:**
- Can FortiSwitch operate if the FortiGate controller is unavailable?
- What happens to our FortiAPs during a FortiGate firmware upgrade?
- Can we run FortiSwitch with a non-Fortinet firewall? Can we run FortiAP with a different controller?

---

### 2. "No per-device licensing — FortiSwitch and FortiAP are license-free"

> [!info] Their Claim
> Fortinet positions the lack of per-switch and per-AP licensing as a cost advantage over subscription-based competitors.

> [!tip] Counter-Argument
> While there's no per-device license, you MUST buy FortiGate(s), FortiCare subscription, FortiGuard security subscriptions, and potentially FortiManager + FortiAnalyzer. The total cost is hidden in the FortiGate infrastructure. Extreme's XIQ Navigator is truly free with no hidden infrastructure dependency.

**Proof Points:**
- FortiGate + FortiCare + FortiGuard bundles cost $2K-$15K+ per appliance per year
- FortiManager ($10K-$50K) + FortiAnalyzer ($10K-$40K) for centralized management
- Total Fortinet infrastructure cost often exceeds per-device licensing models
- Extreme XIQ Navigator is genuinely free — no hidden appliance costs
- If you already have a non-Fortinet firewall, you're buying redundant FortiGate infrastructure just to manage switches and APs

**Discovery Questions:**
- What is the total annual cost for FortiGate + FortiCare + FortiGuard for managing 50 switches and 100 APs?
- If we already have Palo Alto firewalls, do we still need FortiGate to manage FortiSwitch and FortiAP?
- What is the cost of FortiManager and FortiAnalyzer for centralized management?

---

### 3. "Security Fabric provides converged networking + security"

> [!info] Their Claim
> Fortinet positions Security Fabric as the only truly converged platform where networking and security are managed as one.

> [!tip] Counter-Argument
> Convergence sounds great in a slide deck, but in reality it means deep vendor lock-in. If you want to replace your firewall vendor (common every 3-5 years), you'd also need to replace your entire switching and wireless infrastructure. Extreme's approach: best-in-class networking that integrates with your choice of security vendor through open APIs.

**Proof Points:**
- Extreme integrates with Palo Alto, Fortinet, CrowdStrike, Check Point, Zscaler — your choice
- Security vendor changes (common every 3-5 years) don't require networking forklift
- Fabric Connect provides network segmentation independent of firewall vendor
- Fortinet Security Fabric lock-in: changing firewalls = changing everything
- Open API approach future-proofs the network against security vendor changes

**Discovery Questions:**
- If we want to evaluate a different NGFW in 3 years, what happens to our FortiSwitch and FortiAP investment?
- Can Security Fabric work with non-Fortinet firewalls?
- What is the exit cost of leaving the Fortinet ecosystem?

---

### 4. "FortiNAC provides integrated NAC within the Security Fabric"

> [!info] Their Claim
> Fortinet positions FortiNAC as part of their converged Security Fabric — NAC that works natively with FortiGate, FortiSwitch, and FortiAP. They emphasize device profiling, automated onboarding, and integration with FortiGuard threat intelligence.

> [!tip] Counter-Argument
> FortiNAC is the weakest NAC offering among major competitors. It has no built-in Certificate Authority — zero PKI capability. For SCEP certificate enrollment, Fortinet requires a separate FortiAuthenticator appliance (additional purchase). FortiNAC is on-premises only with no cloud-native option. It has no ZTNA — that's FortiSASE/FortiZTNA, yet another separate product. Extreme's EP1 Security delivers unified Cloud NAC + ZTNA as cloud-native SaaS with RADIUS as a Service, zero on-prem infrastructure, and no dependency on a firewall appliance.

**Proof Points:**
- FortiNAC has NO built-in Certificate Authority — cannot issue certificates for EAP-TLS
- SCEP requires a separate FortiAuthenticator appliance — additional $5K-$20K+ purchase
- FortiNAC is on-prem only — no cloud-native NAC option from Fortinet
- FortiNAC has no ZTNA — FortiZTNA/FortiSASE are separate products and licenses
- FortiNAC depends on FortiGate for policy enforcement — another FortiGate dependency
- EP1 Security Secure Plus = unified Cloud NAC + ZTNA — no firewall dependency, no on-prem infrastructure
- Extreme Cloud NAC uses RadSec — fully encrypted RADIUS as a Service
- FortiNAC is widely considered the least capable NAC among Cisco ISE, Aruba ClearPass, Juniper Mist, and Extreme

**NAC/PKI Architecture Comparison:**

| Feature | FortiNAC | Extreme EP1 Security |
|---------|----------|----------------------|
| **Architecture** | On-prem appliance/VM | Cloud-native SaaS |
| **Built-in CA** | No | No (external CA) |
| **SCEP** | No — requires separate FortiAuthenticator | External |
| **Cloud PKI** | No | Cloud PKI roadmap |
| **RADIUS** | On-prem (FortiNAC appliance) | Cloud RADIUS as a Service (RadSec) |
| **ZTNA** | No (separate FortiSASE/FortiZTNA) | **Yes** (Secure Plus) |
| **Firewall dependency** | Yes — requires FortiGate for enforcement | None |
| **On-prem infrastructure** | FortiNAC + FortiAuthenticator + FortiGate | None (RadSec proxy optional for legacy) |
| **Cloud-native option** | No | Yes |
| **Products needed for NAC+PKI+ZTNA** | 4 (FortiNAC + FortiAuthenticator + FortiGate + FortiSASE) | 1 (EP1 Security) |

**Discovery Questions:**
- Does FortiNAC have a built-in Certificate Authority for issuing device certificates?
- Is FortiNAC available as a cloud-native SaaS, or is it on-prem only?
- Does FortiNAC include ZTNA, or is that a separate FortiSASE/FortiZTNA purchase?
- What is the total cost of FortiNAC + FortiAuthenticator + FortiGate for 5,000 endpoints?
- Can FortiNAC operate without a FortiGate?

---

## When They Attack Extreme

### 1. "Extreme has no integrated NGFW — they can't do converged security + networking"

> [!warning] Their Attack
> Fortinet reps will position the lack of an Extreme-branded NGFW as a fundamental gap.

> [!tip] Counter
> Not having a proprietary firewall is a STRENGTH, not a weakness. It means customers choose the best firewall for their needs — Palo Alto, Fortinet, CrowdStrike, Zscaler — without being locked into a networking vendor's security product. Extreme's Fabric Connect provides network-level segmentation, and ExtremeControl provides NAC — the networking security that matters most.

**Proof Points:**
- Best-of-breed security philosophy: choose your firewall vendor independently
- Fabric Connect provides micro-segmentation at the network level without firewall dependency
- ExtremeControl provides NAC/802.1X without a FortiGate prerequisite
- Customers replace firewalls every 3-5 years — decoupling networking from security protects infrastructure investment
- Most enterprise customers prefer best-of-breed over single-vendor stacks for security-critical components

**Discovery Questions:**
- Do you want your firewall replacement cycle to dictate your networking replacement cycle?
- How many enterprises actually run 100% single-vendor security? What about endpoint, email, SIEM?
- Is FortiSwitch's L3 routing capability comparable to a purpose-built enterprise switch?

---

### 2. "FortiSwitch is cheaper than Extreme switches"

> [!warning] Their Attack
> Fortinet will highlight FortiSwitch hardware pricing, which is often lower at list price.

> [!tip] Counter
> FortiSwitch list prices are lower because FortiSwitch is a managed accessory, not a standalone switch. It has limited L3 routing (static and RIP only), lower PoE budgets, no fabric capability, and cannot operate without a FortiGate. Extreme 5520 is a full-featured enterprise switch with OSPF, BGP, Fabric Connect, and operates independently.

**Proof Points:**
- FortiSwitch: L3 lite (static/RIP only). Extreme 5520: Full L3 (OSPF/BGP/VRRP)
- FortiSwitch max PoE: 500W. Extreme 5520: 1,480W — nearly triple
- FortiSwitch cannot operate without FortiGate. Extreme 5520 is fully independent
- FortiSwitch: 32K MAC table. Extreme 5520: 64K MAC table
- When you add FortiGate + FortiCare costs, total is often higher than Extreme standalone

**Discovery Questions:**
- Does FortiSwitch support OSPF or BGP? (Answer: No — static and RIP only)
- What is the maximum PoE budget on your highest-end FortiSwitch model?
- What is the total cost including the FortiGate needed to manage those switches?

---

## Summary

Against Fortinet, lead with **independence**, **enterprise switching depth**, and **cloud-native NAC + ZTNA**. Fortinet's networking products are accessories to FortiGate — they can't stand alone. FortiNAC is the weakest major NAC: no built-in CA, no Cloud PKI, no cloud-native option, no ZTNA (separate FortiSASE purchase), and requires FortiAuthenticator for SCEP. EP1 Security delivers unified Cloud NAC + ZTNA with zero on-prem infrastructure and no firewall dependency. **Key killer questions**: Ask if FortiNAC has a built-in CA. Ask if FortiNAC is available as cloud SaaS. Ask how many separate Fortinet products are needed for NAC + PKI + ZTNA.

## How to Win — Strategic Playbook

| Competitor Weakness | Extreme Proofpoint | How to Win Response |
|---|---|---|
| **Expose the FortiGate dependency** | Standalone enterprise switches and APs | FortiSwitch and FortiAP can't operate without FortiGate — single point of failure for entire network |
| **Reveal hidden infrastructure costs** | Free Navigator tier, no appliance prerequisite | "No per-device license" hides the cost of FortiGate + FortiCare + FortiGuard + FortiManager + FortiAnalyzer |
| **Attack the vendor lock-in trap** | Best-of-breed security integration (Palo Alto, CrowdStrike, etc.) | Security Fabric means changing firewalls = changing everything. Extreme decouples networking from security |
| **Highlight enterprise switching gaps** | Full L3 routing (OSPF/BGP/VRRP), Fabric Connect | FortiSwitch is L3-lite (static/RIP only), limited PoE, no fabric — it's an accessory, not a switch |
| **Expose NAC weakness** | EP1 Security unified Cloud NAC + ZTNA | FortiNAC is the weakest major NAC: no CA, on-prem only, no ZTNA, requires FortiAuthenticator for SCEP |
| **Target firewall replacement cycles** | Network infrastructure survives firewall changes | Customers replace firewalls every 3-5 years. With Fortinet, that means replacing networking too |

---

## Footprint Comparison

| Aspect | Fortinet | Extreme Networks |
|---|---|---|
| **Management** | FortiManager + FortiAnalyzer (appliance-based) | ExtremeCloud IQ (cloud-native SaaS) |
| **NAC** | FortiNAC (on-prem, weakest major NAC) | EP1 Security (cloud-native, unified NAC + ZTNA) |
| **Switching** | FortiSwitch (L3-lite, FortiGate-dependent) | 5520/5720 series (full L3, independent) |
| **Wireless** | FortiAP (FortiGate-managed) | AP5020/AP4000 (independent, cloud-managed) |
| **Fabric** | FortiLink (basic, not true fabric) | Fabric Connect (IEEE 802.1aq SPB) |

---

## Elevator Pitches

1. "Enterprise networking that doesn't depend on your firewall being up."
2. "Change your firewall vendor without changing your network."
3. "Cloud-native NAC + ZTNA without four separate Fortinet products."

---

## SWOT Analysis (Extreme vs Fortinet)

### Strengths

- **Independence:** Extreme switches and APs operate independently — no dependency on any single appliance. FortiSwitch/FortiAP require FortiGate to function.
- **Enterprise-grade switching:** Full L3 routing (OSPF, BGP, VRRP), 1,480W PoE, Fabric Connect. FortiSwitch is L3-lite (static/RIP only), 500W PoE max.
- **Cloud-native NAC + ZTNA:** EP1 Security delivers unified NAC + ZTNA as cloud SaaS. FortiNAC is on-prem only with no ZTNA (separate FortiSASE).
- **Best-of-breed security:** Extreme integrates with any firewall vendor. Fortinet locks you into FortiGate for everything.
- **True fabric:** Fabric Connect provides IEEE-standard campus fabric. FortiLink is basic link aggregation, not true fabric.

### Weaknesses

- **No NGFW:** Extreme has no proprietary firewall — Fortinet's FortiGate is genuinely best-in-class. Customers who want single-vendor networking + security may prefer Fortinet's approach.
- **Security perception:** Fortinet leads the firewall conversation — their brand is synonymous with security. Extreme must work harder to establish security credibility.
- **Bundling power:** Fortinet's "no per-device license" messaging is compelling even if the total cost is hidden in FortiGate infrastructure.

### Opportunities

- **Firewall replacement cycles:** When customers replace FortiGate with Palo Alto/CrowdStrike/Zscaler, their FortiSwitch and FortiAP investment is stranded. Position Extreme as the networking platform that survives firewall changes.
- **Non-Fortinet firewall customers:** Organizations running Palo Alto, Check Point, or CrowdStrike firewalls gain nothing from FortiSwitch/FortiAP's FortiGate dependency. Extreme is the natural networking partner.
- **NAC modernization:** FortiNAC is widely considered the weakest enterprise NAC. Organizations upgrading NAC are prime targets for EP1 Security.
- **FortiGate outage risk:** FortiGate is a single point of failure for the entire network (switches + APs + NAC). One FortiGate issue cascades everywhere.

### Threats

- **Fortinet's aggressive pricing:** Fortinet bundles and the "no per-device license" message win deals on initial cost perception, even when total cost is higher.
- **Security Fabric narrative:** "One vendor for everything" resonates with security-conscious buyers who want simplicity (even if it's false simplicity).
- **Fortinet's market momentum:** Fortinet is growing rapidly in campus networking, particularly among existing FortiGate customers.

---

## Recommended Counter Enhancements

> [!tip] Additional recommendations to strengthen Extreme's competitive positioning against Fortinet

### 1. Reframe "no per-device license" as "hidden appliance tax"

Fortinet's most effective message is "no per-device licensing." Counter by calculating the TOTAL cost: FortiGate ($5K-$50K) + FortiCare ($2K-$15K/yr) + FortiGuard ($2K-$15K/yr) + FortiManager ($10K-$50K) + FortiAnalyzer ($10K-$40K). Ask: *"Can you show me the total annual cost of ALL Fortinet infrastructure needed to manage 50 switches and 100 APs?"*

### 2. Make the FortiGate single-point-of-failure visceral

Ask: *"If your FortiGate needs a firmware upgrade, reboots unexpectedly, or has a hardware failure — what happens to every FortiSwitch and FortiAP in your network?"* The answer: they lose management and potentially stop functioning correctly. This is a significant operational risk.

### 3. Target the non-Fortinet firewall customer

If the prospect already runs Palo Alto, Check Point, or Zscaler — the Fortinet networking pitch collapses. They'd need to buy FortiGate infrastructure ONLY to manage switches and APs. Ask: *"You're happy with your Palo Alto firewalls. Why would you buy a FortiGate just to manage your switches?"*

### 4. Position for the "firewall divorce"

Every 3-5 years, organizations evaluate firewall vendors. Fortinet networking customers face a unique risk: changing firewalls means changing switches and APs too. Extreme's message: *"Your networking investment should outlive your firewall choice."*

## Related

- [[Fortinet]] — Vendor profile
- [[Competitive Replacements]]
