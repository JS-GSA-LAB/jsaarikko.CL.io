---
vendor_code: FTNT
color: "#ee3124"
tagline: "Security-driven networking"
flagship: "FortiGate, FortiAP, FortiSwitch"
tags: [vendor]
---
# Fortinet

> **Security-driven networking**
> Flagship: FortiGate, FortiAP, FortiSwitch

## Market Position

| Category | Quadrant | Note |
|----------|----------|------|
| Wireless | Challenger | Security-first approach, growing enterprise presence |
| Switching | Challenger | FortiSwitch tightly integrated with FortiGate security |
| Sdwan | Leader | SD-WAN built into FortiGate NGFW — best TCO |
| Management | Challenger | FortiManager — strong for Fortinet stack |

## Strengths & Weaknesses

### Wireless
**Strengths:**
- Integrated security stack
- No per-AP license
- Strong NGFW
- Security Fabric

**Weaknesses:**
- Requires FortiGate dependency
- Weaker standalone wireless
- Less cloud-native

### Switching
**Strengths:**
- Security-integrated switching
- No per-switch license
- Simple FortiLink management

**Weaknesses:**
- FortiGate dependency
- No standalone switching OS
- Limited DC switching

### Sdwan
**Strengths:**
- SD-WAN at no extra cost
- Strongest NGFW integration
- Best security-focused TCO

**Weaknesses:**
- Requires FortiGate hardware
- Complex multi-box deployments
- Less SaaS-oriented

### Management
**Strengths:**
- All-Fortinet single pane
- FortiAnalyzer depth
- Security-centric view
- Perpetual option

**Weaknesses:**
- Not cloud-native
- Complex deployment
- Less intuitive UI
- FortiAnalyzer separate cost

## Value Scores

| Dimension | Score (1-10) |
|-----------|-------------|
| Feature Completeness | 8 |
| Cloud & AI Innovation | 5 |
| Licensing Flexibility | 7 |
| Deployment Simplicity | 6 |
| Support Quality | 7 |
| Ecosystem & Integration | 8 |
| Built-in Security | 10 |
| Scalability | 8 |

## Licensing

- **Model:** Perpetual + Support
- **Mandatory:** No
- **Free Tier:** No
- **Hardware Works Without License:** Yes
- **Tiers:** FortiCare (support) + FortiGuard (security subs) bundles
- **Lock-In:** Medium-High — No per-device license but deeply coupled to FortiGate. Security Fabric creates interdependency.
- **Exit Cost:** Medium — Perpetual hardware licenses. But tightly integrated stack means replacing one product may require replacing several.

## TCO Summary

> Scenario: 100 APs / 50 Access Switches / 5 Core Switches / 10 SD-WAN Sites

| Component | Cost |
|-----------|------|
| Hardware Total | $359,175 |
| Mgmt Platform | $35,000 |
| Annual License | $15,000/yr |
| Annual Support | $32,000/yr |
| **3-Year TCO** | **$535,175** |
| **5-Year TCO** | **$629,175** |

**Hardware:** APs: 100x FAP-441K @ $1,395 | Access: 50x FS-448E @ $3,495 | Core: 5x FS-1024E @ $7,995 | SD-WAN: 10x FG-40F @ $495

**Licensing:** No per-AP or per-switch license. FortiCare UTP bundle for 10 FortiGates: ~$15,000/yr. SD-WAN included in FortiGate. Low recurring but need FortiGate infrastructure.

**Support:** FortiCare: ~$32,000/yr. Includes firmware, TAC, RMA. FortiGuard subscriptions separate for UTM.

## Hidden Costs

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $3,000-$12,000 | MEDIUM |
| Professional Services | $10,000-$30,000 | MEDIUM |
| Migration Complexity | Medium-High | MEDIUM |
| Multi-Platform Tax | Low | LOW |
| License True-Up Surprises | $5,000-$20,000/yr | MEDIUM |
| Vendor Lock-In Risk | Medium-High | MEDIUM |

- **Training & Certification** ($3,000-$12,000): NSE certification track. FortiGate expertise widely available.
- **Professional Services** ($10,000-$30,000): Security Fabric integration can require PS for complex deployments.
- **Migration Complexity** (Medium-High): Tightly integrated stack. Replacing FortiGate may cascade to FortiSwitch, FortiAP, FortiNAC.
- **Multi-Platform Tax** (Low): Single Security Fabric. But need FortiManager + FortiAnalyzer + FortiGate = multi-box.
- **License True-Up Surprises** ($5,000-$20,000/yr): FortiGuard bundle confusion. UTM vs ATP vs Enterprise bundles. Renewal price increases.
- **Vendor Lock-In Risk** (Medium-High): Security Fabric interdependency. Switching one component may require switching all.

## Products

See [[Product Catalog]] for full specs.

### Wireless
| Model | Use Case | List Price |
|-------|----------|------------|
| FAP-441K | Security-integrated Wi-Fi 7 | $1,395 |

### Switching
| Model | Use Case | List Price |
|-------|----------|------------|
| FS-448E | 48-port security-driven access | $3,495 |

### SD-WAN
| Model | Use Case | List Price |
|-------|----------|------------|
| FG-40F | Branch NGFW + SD-WAN | $495 |

## Product Notes — verified 2026-07-02 (fortinet.com / docs.fortinet.com)

Source of truth = Fortinet-owned datasheets + FortiSwitchOS 7.6.6 feature matrix. Prices are **not** published by Fortinet (dashboard prices are estimates).

**Access Points (FortiAP):** Current lineup is the **K-series** (Wi-Fi 7): FAP-441K/443K (flagship 4x4, 21.3 Gbps, 2x10GbE, 802.3bt), 241K/243K (mid), 231K (entry, single 5GbE-class port), 244K (outdoor), 222KL (outdoor + LoRaWAN/LTE/GNSS — **dual-band, ~3.57 Gbps, no 6 GHz**). Newer official models not yet in dashboard: **FAP-221K, FAP-23JK, FAP-432G (6E outdoor 4x4), FAP-432FR (C1D2), FAP-831F (8x8)**. The older 6E/6 models (431G/433G/231G, 431F/433F/231F, U231F/U431F) have had their spec datasheets **retired from fortinet.com** — treat as superseded/unverified.

**Switches (FortiSwitch):** FS-1024E is campus-core/DC (24x 10G SFP+ + **2x 100G/40G QSFP28**) and **supports MACsec** (PSK/dynamic-CAK). FS-448E has 4x 10G SFP+ uplinks; base has no PoE (PoE via -POE 421W / -FPOE 772W). FS-248E-FPOE is a **48-port** 802.3af/at 740W switch with 4x GE SFP (no mGig, no 10G). MACsec available on select models (FS-1024E, FS-624F). Managed via FortiGate/FortiLink — no per-switch license.

**Fabric:** Fortinet has **no campus L2/L3 data-plane fabric** (no SPB/EVPN-VXLAN for campus). "Security Fabric" = a security/management integration architecture (FortiOS). Campus LAN convergence = **FortiLink** (FortiGate-managed FortiSwitch/FortiAP), packaged as **Secure SD-Branch**. WAN = **Fortinet Secure SD-WAN**. (EVPN/VXLAN appears only on data-center FortiSwitch models.) → Legit Extreme differentiator: true campus **Fabric Connect (SPB)**.

**Cloud:** **FortiEdge Cloud** is the current controller-less cloud manager for standalone FortiAP/FortiSwitch/FortiExtender; **FortiLAN Cloud is its retired predecessor**. **FortiCloud** = the account/identity umbrella (SSO/IAM/Organizations+OUs), not the LAN manager. Other services under FortiCloud: FortiGate Cloud, FortiManager Cloud, FortiSASE. **EOL nuance:** only FortiEdge Cloud **multi-tenancy license extensions** end **Dec 31 2026** (migrate to FortiCloud Organization/OUs) — the product is **not** sunset.

## Related

- [[vs Fortinet]] — Battle card
- [[Wireless]], [[Switching]], [[SD-WAN]], [[Management]]
- [[TCO Comparison]], [[Value Scores]], [[Licensing Models]]
- [[Competitive Replacements]]
