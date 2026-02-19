---
vendor_code: ALE
color: "#502D8E"
tagline: "SPB fabric networking for campus and enterprise"
flagship: "OmniSwitch, OmniAccess Stellar, OmniVista"
tags: [vendor]
---
# Alcatel-Lucent

> **SPB fabric networking for campus and enterprise**
> Flagship: OmniSwitch, OmniAccess Stellar, OmniVista

## Market Position

| Category | Quadrant | Note |
|----------|----------|------|
| Wireless | Niche Player | OmniAccess Stellar APs, strong in education/government verticals |
| Switching | Niche Player | OmniSwitch with SPB fabric, strong in education/government |
| Sdwan | Niche Player | No native SD-WAN offering; relies on partner solutions |
| Management | Niche Player | OmniVista Cirrus and on-prem OmniVista 2500 |

## Strengths & Weaknesses

### Wireless
**Strengths:**
- SPB fabric integration with wireless
- Strong in education and hospitality
- Unified Access architecture
- OmniVista management

**Weaknesses:**
- No Wi-Fi 7 yet
- Limited AI/ML radio management
- Smaller ecosystem
- Less cloud-native management

### Switching
**Strengths:**
- SPB fabric (IEEE 802.1aq)
- Strong campus/education portfolio
- OmniSwitch reliability
- Virtual Chassis stacking

**Weaknesses:**
- Limited DC switching
- Weaker automation/DevOps
- Smaller partner ecosystem
- Less cloud-native management

### Sdwan
**Strengths:**
- Partner integration available
- OmniSwitch routing for WAN connectivity

**Weaknesses:**
- No native SD-WAN product
- Relies on partner solutions
- No SASE offering
- Gap in WAN portfolio

### Management
**Strengths:**
- OmniVista cloud and on-prem options
- Unified wired/wireless management
- Multi-customer support
- Perpetual on-prem licensing

**Weaknesses:**
- No AIOps or AI assistant
- Less cloud-native than competitors
- Limited API ecosystem
- Fewer third-party integrations

## Value Scores

| Dimension | Score (1-10) |
|-----------|-------------|
| Feature Completeness | 6 |
| Cloud & AI Innovation | 4 |
| Licensing Flexibility | 7 |
| Deployment Simplicity | 6 |
| Support Quality | 6 |
| Ecosystem & Integration | 4 |
| Built-in Security | 6 |
| Scalability | 5 |

## Licensing

- **Model:** Perpetual AOS + Subscription OmniVista
- **Mandatory:** No
- **Free Tier:** No
- **Hardware Works Without License:** Yes
- **Tiers:** OmniVista Cirrus ($120/device/yr) or OmniVista 2500 (perpetual ~$8K)
- **Lock-In:** Medium-Low — AOS is perpetual. Hardware works without OmniVista. SPB fabric is vendor-specific but standards-based (IEEE 802.1aq).
- **Exit Cost:** Medium — AOS configs are CLI-based. SPB is ALE-specific. Hardware has moderate secondary market value. Migration requires fabric redesign.

## TCO Summary

> Scenario: 100 APs / 50 Access Switches / 5 Core Switches / 10 SD-WAN Sites

| Component | Cost |
|-----------|------|
| Hardware Total | $509,500 |
| Mgmt Platform | $0 |
| Annual License | $18,600/yr |
| Annual Support | $30,000/yr |
| **3-Year TCO** | **$655,300** |
| **5-Year TCO** | **$752,500** |

**Hardware:** APs: 100x OAW-AP1411 @ $1,295 | Access: 50x OS6860E-P48 @ $5,800 | Core: 5x OS6900-X72 @ $18,000 | SD-WAN: N/A

**Licensing:** OmniVista Cirrus: 155 devices @ $120/yr = $18,600/yr. On-prem OmniVista 2500 alternative: ~$8,000 perpetual + maintenance.

**Support:** ALE Partner Support: ~$30,000/yr. Software updates + TAC + RMA.

## Hidden Costs

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $3,000-$10,000 | MEDIUM |
| Professional Services | $10,000-$30,000 | MEDIUM |
| Migration Complexity | Medium | MEDIUM |
| Multi-Platform Tax | Low | LOW |
| License True-Up Surprises | $2,000-$8,000/yr | LOW |
| Vendor Lock-In Risk | Medium-Low | LOW |

- **Training & Certification** ($3,000-$10,000): AOS certification track. SPB fabric requires specific training. Smaller training ecosystem than major vendors.
- **Professional Services** ($10,000-$30,000): SPB fabric deployment may need PS. OmniVista setup can be complex.
- **Migration Complexity** (Medium): AOS is CLI-based. SPB fabric is ALE-specific, requiring fabric redesign on exit.
- **Multi-Platform Tax** (Low): Unified OmniVista for wired + wireless. But no SD-WAN means third-party WAN solution needed.
- **License True-Up Surprises** ($2,000-$8,000/yr): Simple device-based OmniVista pricing. OV 2500 perpetual is predictable.
- **Vendor Lock-In Risk** (Medium-Low): AOS is perpetual. SPB is IEEE standard. But ALE-specific implementation. Moderate secondary market for hardware.

## Products

See [[Product Catalog]] for full specs.

### Wireless
| Model | Use Case | List Price |
|-------|----------|------------|
| OAW-AP1411 | Wi-Fi 6E enterprise indoor AP | $1,295 |
| OAW-AP1431 | Wi-Fi 6 outdoor AP | $1,095 |
| OAW-AP1261 | Wi-Fi 6 value indoor AP | $695 |

### Switching
| Model | Use Case | List Price |
|-------|----------|------------|
| OS6360-P48X | Compact PoE access switch | $3,200 |
| OS6560-P48Z8 | Campus access PoE switch | $4,800 |
| OS6860E-P48 | Campus access with SPB fabric | $5,800 |
| OS6900-X72 | Core/aggregation switch | $18,000 |
| OS9900 | Modular chassis core/DC edge | $35,000 |

### Management
| Model | Use Case | List Price |
|-------|----------|------------|
| OmniVista Cirrus | Cloud-based unified management | $120/device/yr |

## Related

- [[vs Alcatel-Lucent]] — Battle card
- [[Wireless]], [[Switching]], [[SD-WAN]], [[Management]]
- [[TCO Comparison]], [[Value Scores]], [[Licensing Models]]
- [[Competitive Replacements]]
