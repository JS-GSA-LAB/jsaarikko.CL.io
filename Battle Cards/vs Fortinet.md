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

Against Fortinet, lead with **independence and enterprise switching depth**. Fortinet's networking products are accessories to FortiGate — they can't stand alone. This creates a single point of failure and deep vendor lock-in. Acknowledge FortiGate's NGFW excellence, then show that Extreme's networking is in a different league from FortiSwitch/FortiAP, and integrates with ANY firewall vendor. **Key killer questions**: Ask if FortiSwitch operates without FortiGate. Ask what the TOTAL infrastructure cost is (FortiGate + FortiCare + FortiGuard + FortiManager + FortiAnalyzer). Ask what L3 routing protocols FortiSwitch supports.

## Related

- [[Fortinet]] — Vendor profile
- [[Competitive Replacements]]
