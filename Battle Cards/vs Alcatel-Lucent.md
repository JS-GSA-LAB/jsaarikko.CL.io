---
competitor: "Alcatel-Lucent"
competitor_code: ALE
tags: [battle-card]
---
# vs Alcatel-Lucent

> Battle card for competing against **Alcatel-Lucent** (SPB fabric networking for campus and enterprise)

## Their Strengths — How to Counter

### 1. "We use the same SPB fabric standard as Extreme — IEEE 802.1aq"

> [!info] Their Claim
> ALE will position their SPB implementation as equivalent to Extreme's Fabric Connect, arguing that the underlying IEEE standard is identical.

> [!tip] Counter-Argument
> The IEEE 802.1aq standard is the same, but implementation maturity matters enormously. Extreme has deployed Fabric Connect at 1,000+ switch scale with 50,000+ customers. Extreme's cloud management (XIQ with CoPilot AI), Fabric auto-attach for wireless, and Digital Twin are all capabilities that ALE's OmniVista cannot match.

**Proof Points:**
- Extreme has 1,000+ switch Fabric Connect deployments; ALE maxes around 500
- ExtremeCloud IQ CoPilot AI has no equivalent in OmniVista
- Fabric auto-attach seamlessly integrates wireless into the fabric
- Digital Twin provides pre-deployment validation — OmniVista lacks this
- Extreme's Universal Hardware means cloud, on-prem, or hybrid mgmt on same gear

**Discovery Questions:**
- What is your largest SPB fabric deployment by switch count?
- Does OmniVista offer AI-powered operations like Extreme CoPilot?
- How do your APs integrate with the SPB fabric?

---

### 2. "ALE is strong in education, hospitality, and government"

> [!info] Their Claim
> ALE will highlight their strong vertical presence, especially in education and hospitality, with long-standing customer relationships.

> [!tip] Counter-Argument
> Extreme also has deep presence in education, government, hospitality, and sports/entertainment — but with a broader portfolio and superior cloud management. Extreme's ExtremeCloud IQ with CoPilot AI, Digital Twin, and free Navigator tier provide more value in these verticals where IT teams are often lean.

**Proof Points:**
- Extreme serves education, government, hospitality, and sports (NFL, FIFA, Bundesliga)
- Free XIQ Navigator is ideal for budget-constrained verticals
- CoPilot AI helps lean IT teams operate complex networks
- Fabric auto-attach simplifies wireless deployment for understaffed IT
- Extreme's Universal Hardware reduces complexity for smaller teams

**Discovery Questions:**
- What is the annual cost of OmniVista Cirrus vs Extreme's free Navigator tier?
- How does OmniVista help lean IT teams with AI-powered operations?
- What pre-deployment planning tools does ALE offer?

---

### 3. "OmniSwitch provides a unified wired/wireless campus solution"

> [!info] Their Claim
> ALE will position their OmniSwitch + OmniAccess Stellar portfolio as a complete unified campus solution managed through OmniVista.

> [!tip] Counter-Argument
> ALE's portfolio covers the basics but lacks modern capabilities. No Wi-Fi 7 yet, no AI-powered radio management, no digital twin, no SD-WAN, limited automation/DevOps tooling, and weaker cloud management maturity compared to Extreme's XIQ.

**Proof Points:**
- ALE has no Wi-Fi 7 APs yet — Extreme AP5020 is shipping
- No CoPilot AI or comparable AIOps in OmniVista
- No Digital Twin for pre-deployment validation
- No native SD-WAN solution
- Limited REST API and automation ecosystem
- OmniVista Cirrus is less mature than ExtremeCloud IQ

**Discovery Questions:**
- When will ALE ship Wi-Fi 7 access points?
- What AI/ML capabilities does OmniVista provide for network operations?
- What is ALE's SD-WAN strategy?

---

### 4. "OmniVista UPAM provides built-in NAC with CyberElements ZTNA"

> [!info] Their Claim
> ALE positions OmniVista UPAM as a built-in NAC module providing 802.1X, MAC auth, captive portal, and guest access. For ZTNA, ALE resells Systancia CyberElements Gate. ALE also resells Aruba ClearPass as its enterprise-grade NAC option for customers who need more than UPAM.

> [!tip] Counter-Argument
> ALE's NAC/ZTNA story is the most fragmented in the industry. UPAM is a basic NAC module embedded in OmniVista — it has no posture assessment, no Certificate Authority, no Cloud PKI, and only works well on ALE hardware (OmniSwitch + Stellar APs). For enterprise-grade NAC, ALE literally resells Aruba ClearPass — a competitor's product. For ZTNA, ALE resells Systancia CyberElements — another third-party product from a separate French company. And in June 2025, ALE added yet another ZTNA partnership with Versa Networks. That's three different vendors (ALE + Systancia + Versa) for NAC + ZTNA, none of which share a unified policy engine. Extreme's EP1 Security delivers unified Cloud NAC + ZTNA as a single cloud-native platform from a single vendor — no OEM dependencies, no stitched-together partnerships.

**Proof Points:**
- UPAM has NO posture assessment — cannot check endpoint health or compliance
- UPAM has NO Certificate Authority and NO Cloud PKI — cannot issue device certificates
- CyberElements is NOT an ALE product — it's Systancia (separate French company) resold by ALE
- ALE resells Aruba ClearPass for enterprise NAC — literally a competitor's product
- UPAM is ALE-hardware-centric — third-party switch support is RADIUS-proxy only
- ALE has THREE ZTNA options from THREE vendors: UPAM (ALE), CyberElements (Systancia), Versa SASE — no unified strategy
- No unified policy engine across NAC and ZTNA — these are separate products from separate companies
- UPAM device profiling uses an external cloud database — not built-in ML-based profiling
- Gartner does not recognize UPAM as a standalone enterprise NAC product
- EP1 Security Secure Plus = unified Cloud NAC + ZTNA — single vendor, single platform, single policy engine

**NAC/PKI Architecture Comparison:**

| Feature | ALE OmniVista UPAM / CyberElements | Extreme EP1 Security |
|---------|-------------------------------------|----------------------|
| **Architecture** | UPAM embedded in OmniVista (cloud + on-prem) | Cloud-native SaaS |
| **802.1X NAC** | Yes (UPAM — ALE hardware only) | **Yes** — Cloud NAC (multi-vendor) |
| **Built-in CA** | No | No (external CA) |
| **Cloud PKI** | No | Cloud PKI roadmap |
| **RADIUS** | Built-in (UPAM, ALE-hardware-centric) | Cloud RADIUS as a Service (RadSec) |
| **ZTNA** | Resold — Systancia CyberElements or Versa | **Yes** (Secure Plus) — native |
| **Posture Assessment** | No | Yes |
| **Device Profiling** | External cloud DB (not built-in ML) | Yes — ML-based profiling |
| **Multi-vendor NAS** | RADIUS-proxy only for third-party | Yes — vendor-agnostic |
| **Enterprise NAC option** | Resells Aruba ClearPass | Native EP1 Security |
| **Unified NAC + ZTNA policy** | No — separate products, separate vendors | Yes — single platform |
| **Vendors for NAC + ZTNA** | 3 (ALE + Systancia + Versa) | 1 (Extreme) |

**Discovery Questions:**
- Is CyberElements an ALE-built product, or is it from Systancia? (Answer: It's Systancia)
- Why does ALE resell Aruba ClearPass if UPAM is sufficient for enterprise NAC?
- Does UPAM include posture assessment or endpoint compliance checking? (Answer: No)
- Can UPAM issue device certificates for EAP-TLS? (Answer: No — no CA, no PKI)
- How many separate vendor products are needed for ALE's NAC + ZTNA solution?
- Do UPAM NAC policies and CyberElements ZTNA policies share a unified policy engine? (Answer: No)

---

## When They Attack Extreme

### 1. "Extreme is more expensive than ALE"

> [!warning] Their Attack
> ALE reps may position their hardware as lower-cost and their OmniVista pricing as competitive.

> [!tip] Counter
> When comparing total cost of ownership, Extreme's free XIQ Navigator tier, included Fabric Connect (no additional license), and Universal Hardware flexibility often results in lower TCO. ALE's OmniVista Cirrus subscription ($120/device/yr) adds up quickly. And Extreme provides significantly more capability — AI CoPilot, Digital Twin, Fabric auto-attach — for comparable or lower cost.

**Proof Points:**
- ExtremeCloud IQ Navigator is free — OmniVista Cirrus is $120/device/yr
- Fabric Connect included in EXOS — no additional fabric license
- Over 3 years, Extreme's free management tier saves $55K+ on a 155-device deployment
- CoPilot AI, Digital Twin, and Fabric auto-attach add value without additional cost
- Extreme hardware pricing is competitive with ALE for comparable models

**Discovery Questions:**
- What is the 3-year TCO including OmniVista Cirrus subscriptions?
- Is SPB fabric included in the base AOS license or an add-on?
- What does your AI-powered management cost per device?

---

### 2. "ALE's Unified Access is simpler than Extreme's approach"

> [!warning] Their Attack
> ALE may argue their Unified Access architecture is simpler to deploy and manage.

> [!tip] Counter
> Extreme's Fabric auto-attach actually provides simpler wireless integration with the fabric — APs automatically join the fabric and receive I-SID segmentation. XIQ CoPilot's AI assistant makes operations simpler by answering questions in natural language. And Extreme's Universal Hardware means the same device works with any management mode.

**Proof Points:**
- Fabric auto-attach = zero-touch wireless fabric integration
- CoPilot AI provides natural language network troubleshooting
- Universal Hardware works with cloud, on-prem, or hybrid — same device
- XIQ Navigator free tier means no management subscription required
- Extreme has 50,000+ customers demonstrating operational simplicity

**Discovery Questions:**
- Can OmniVista answer network troubleshooting questions in natural language?
- How do ALE APs integrate with the SPB fabric — is it truly zero-touch?
- Can ALE hardware switch between cloud and on-prem management without hardware changes?

---

## Summary

Against ALE, the battle is **SPB vs SPB — same fabric, different ecosystem**. Both use IEEE 802.1aq, so the fabric protocol is not the differentiator. Instead, lead with Extreme's superior ecosystem: **XIQ CoPilot AI** (no ALE equivalent), **Digital Twin** (no ALE equivalent), **unified Cloud NAC + ZTNA** (ALE's NAC/ZTNA is fragmented across 3 vendors), **free Navigator management** (vs paid OmniVista Cirrus), and **Wi-Fi 7** (ALE has no Wi-Fi 7 yet). ALE's NAC story is the weakest angle to attack: UPAM is basic (no posture, no CA, no PKI), CyberElements ZTNA is a Systancia resell, and ALE even resells Aruba ClearPass for enterprise NAC. EP1 Security delivers unified Cloud NAC + ZTNA from a single vendor. **Key killer questions**: Ask if CyberElements is an ALE product (it's Systancia). Ask why ALE resells Aruba ClearPass. Ask about AI capabilities, Wi-Fi 7 timeline, and 3-year TCO.

## Related

- [[Alcatel-Lucent]] — Vendor profile
- [[Competitive Replacements]]
