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

## Related

- [[vs Fortinet]] — Battle card
- [[Wireless]], [[Switching]], [[SD-WAN]], [[Management]]
- [[TCO Comparison]], [[Value Scores]], [[Licensing Models]]
- [[Competitive Replacements]]
