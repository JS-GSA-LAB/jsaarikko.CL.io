---
vendor_code: ARST
color: "#16325B"
tagline: "Data-driven cloud networking for campus and DC"
flagship: "CloudVision, CCS-720XP, C-460 Wi-Fi 7"
tags: [vendor]
---
# Arista

> **Data-driven cloud networking for campus and DC**
> Flagship: CloudVision, CCS-720XP, C-460 Wi-Fi 7

## Market Position

| Category | Quadrant | Note |
|----------|----------|------|
| Wireless | Visionary | DC pedigree entering campus wireless with Cognitive Wi-Fi |
| Switching | Visionary | DC leader expanding to campus with EVPN-VXLAN fabric |
| Sdwan | Niche Player | VeloCloud acquired July 2025, integration in progress |
| Management | Visionary | CloudVision strong for DC, expanding campus capabilities |

## Strengths & Weaknesses

### Wireless
**Strengths:**
- Single EOS across DC and campus
- Strong automation (AVD)
- DC heritage brings reliability
- Cognitive Wi-Fi analytics

**Weaknesses:**
- Newer to campus wireless
- Narrow outdoor AP portfolio
- No integrated NAC
- Premium pricing

### Switching
**Strengths:**
- DC-class reliability on EOS
- EVPN-VXLAN industry leader
- OpenConfig leader
- AVD automation — best-in-class

**Weaknesses:**
- Campus switching newcomer
- Premium pricing
- MACsec licensed separately
- Smaller campus partner ecosystem

### Sdwan
**Strengths:**
- VeloCloud heritage
- CloudEOS multi-cloud
- Established SD-WAN technology

**Weaknesses:**
- Newly acquired — not yet integrated with CloudVision
- Integration uncertainty
- Limited SASE story
- Separate management planes

### Management
**Strengths:**
- CloudVision strong for DC lifecycle
- Cognitive analytics
- eAPI + gNMI extensibility
- Multi-tenant capable

**Weaknesses:**
- Separate wired and wireless portals
- No natural language AI queries
- Campus management still maturing
- Premium subscription pricing

## Value Scores

| Dimension | Score (1-10) |
|-----------|-------------|
| Feature Completeness | 8 |
| Cloud & AI Innovation | 8 |
| Licensing Flexibility | 5 |
| Deployment Simplicity | 6 |
| Support Quality | 8 |
| Ecosystem & Integration | 7 |
| Built-in Security | 7 |
| Scalability | 10 |

## Licensing

- **Model:** Perpetual EOS + Subscription CloudVision
- **Mandatory:** No
- **Free Tier:** No
- **Hardware Works Without License:** Yes
- **Tiers:** CloudVision Lite ($20/sw/mo) → CloudVision Full ($35/sw/mo) + CUE Wireless ($175/AP/yr)
- **Lock-In:** Medium — EOS is perpetual and hardware works without CloudVision. However, CloudVision subscription required for full lifecycle management and automation features.
- **Exit Cost:** Medium — EOS is standards-based with strong OpenConfig support. Hardware retains value. EVPN-VXLAN configs are portable. Migration effort moderate.

## TCO Summary

> Scenario: 100 APs / 50 Access Switches / 5 Core Switches / 10 SD-WAN Sites

| Component | Cost |
|-----------|------|
| Hardware Total | $667,000 |
| Mgmt Platform | $0 |
| Annual License | $44,100/yr |
| Annual Support | $45,000/yr |
| **3-Year TCO** | **$934,300** |
| **5-Year TCO** | **$1,112,500** |

**Hardware:** APs: 100x C-460 @ $2,095 | Access: 50x CCS-720XP-48Y6 @ $7,500 | Core: 5x CCS-720XP-48ZC2 @ $13,500 | SD-WAN: 10x VeloCloud Edge 520 @ $1,500

**Licensing:** CloudVision: 55 switches @ $35/mo = $23,100/yr + CUE Wireless: 100 APs @ $175/yr = $17,500/yr + VeloCloud: 10 sites @ ~$29/mo = $3,500/yr. Total: ~$44,100/yr.

**Support:** A-Care support: ~$45,000/yr. 24x7 TAC + software updates + RMA.

## Hidden Costs

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $5,000-$15,000 | MEDIUM |
| Professional Services | $15,000-$50,000 | MEDIUM |
| Migration Complexity | Medium-High | MEDIUM |
| Multi-Platform Tax | Moderate | MEDIUM |
| License True-Up Surprises | $5,000-$20,000/yr | MEDIUM |
| Vendor Lock-In Risk | Medium | MEDIUM |

- **Training & Certification** ($5,000-$15,000): EOS has Junos-level learning curve. ACE certification track. Strong community but steep ramp for campus teams.
- **Professional Services** ($15,000-$50,000): EVPN-VXLAN campus fabric deployments typically require PS. CloudVision onboarding can be complex.
- **Migration Complexity** (Medium-High): EOS is standards-based (OpenConfig) but campus product line is new. Migration tools still maturing.
- **Multi-Platform Tax** (Moderate): Separate CloudVision (wired) and CUE (wireless) portals. VeloCloud SD-WAN is another management plane.
- **License True-Up Surprises** ($5,000-$20,000/yr): MACsec requires separate license. CloudVision premium pricing. Feature tiers can be confusing.
- **Vendor Lock-In Risk** (Medium): EOS is open with strong OpenConfig/gNMI. But CloudVision creates management dependency. EVPN-VXLAN configs are portable.

## Products

See [[Product Catalog]] for full specs.

### Wireless
| Model | Use Case | List Price |
|-------|----------|------------|
| C-460 | Wi-Fi 7 indoor campus AP | $2,095 |
| C-360 | Wi-Fi 6E indoor campus AP | $1,395 |
| C-250 | Wi-Fi 6 value indoor AP | $895 |

### Switching
| Model | Use Case | List Price |
|-------|----------|------------|
| CCS-720DP-48S | Value campus access switch | $4,500 |
| CCS-720XP-48Y6 | Campus access with PoE++ | $7,500 |
| CCS-720XP-48ZC2 | Campus flagship with MACsec | $13,500 |
| CCS-722XPM-48Z | Campus MACsec-enabled switch | $15,000 |
| 7050X4-32F | Data center leaf/spine | $25,000 |

### SD-WAN
| Model | Use Case | List Price |
|-------|----------|------------|
| VeloCloud Edge 520 | Branch SD-WAN appliance | $1,500 |
| VeloCloud Edge 840 | Mid-size branch SD-WAN | $4,500 |

### Management
| Model | Use Case | List Price |
|-------|----------|------------|
| CloudVision CVaaS | Cloud-based network management | $35/switch/mo |

## Related

- [[vs Arista]] — Battle card
- [[Wireless]], [[Switching]], [[SD-WAN]], [[Management]]
- [[TCO Comparison]], [[Value Scores]], [[Licensing Models]]
- [[Competitive Replacements]]
