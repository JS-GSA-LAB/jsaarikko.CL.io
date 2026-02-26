---
vendor_code: MRAK
color: "#78b838"
tagline: "Cloud-first simplified IT"
flagship: "MR/MS/MX Series, Meraki Dashboard"
tags: [vendor]
---
# Meraki

> **Cloud-first simplified IT**
> Flagship: MR/MS/MX Series, Meraki Dashboard

## Market Position

| Category | Quadrant | Note |
|----------|----------|------|
| Wireless | Visionary | Simple cloud-first but limited flexibility |
| Switching | Visionary | Simplified cloud switching, limited scale |
| Sdwan | Challenger | Simple Auto VPN, limited advanced features |
| Management | Challenger | Simple but limited to Meraki ecosystem |

## Strengths & Weaknesses

### Wireless
**Strengths:**
- Simplest deployment
- Unified dashboard
- Strong for SMB/branch
- Auto VPN

**Weaknesses:**
- Cloud-only — no on-prem option
- License lock-in (hardware bricks)
- Limited customization

### Switching
**Strengths:**
- Simplest switch management
- Cloud templates
- Good for branch/retail

**Weaknesses:**
- No DC switches
- Limited fabric
- License lock-in
- Basic feature set

### Sdwan
**Strengths:**
- Simplest SD-WAN deployment
- Auto VPN
- Good for basic branch WAN

**Weaknesses:**
- Very basic SD-WAN
- No NGFW
- Limited WAN optimization

### Management
**Strengths:**
- Simplest interface
- Fast deployment
- Good monitoring
- MSP-friendly

**Weaknesses:**
- Meraki-only ecosystem
- No on-prem
- License-locked
- Limited customization

## Value Scores

| Dimension | Score (1-10) |
|-----------|-------------|
| Feature Completeness | 6 |
| Cloud & AI Innovation | 7 |
| Licensing Flexibility | 2 |
| Deployment Simplicity | 10 |
| Support Quality | 7 |
| Ecosystem & Integration | 5 |
| Built-in Security | 6 |
| Scalability | 6 |

## Licensing

- **Model:** Mandatory Subscription (All-in)
- **Mandatory:** Yes
- **Free Tier:** No
- **Hardware Works Without License:** No (Meraki MS bricks; Catalyst in Meraki mode degrades)
- **Tiers:** Enterprise ($150-500/dev/yr) — single tier, all-in
- **Dual-Mode (Catalyst only):** Catalyst 9300/9200/9500H in Meraki mode can migrate back to Catalyst Center (DNA mode). Native Meraki MS switches cannot.
- **Lock-In:** Very High — Meraki MS switches completely non-functional without active license. Cloud-only, no on-prem escape. Catalyst switches in Meraki mode can revert to DNA mode.
- **Exit Cost:** Very High — Meraki MS: 100% forklift, zero residual value. Catalyst in Meraki mode: can revert to DNA, reducing stranded assets within Cisco. Full redesign still needed to exit Cisco.

## TCO Summary

> Scenario: 100 APs / 50 Access Switches / 5 Core Switches / 10 SD-WAN Sites

| Component | Cost |
|-----------|------|
| Hardware Total | $645,575 |
| Mgmt Platform | $0 |
| Annual License | $107,500/yr |
| Annual Support | $0/yr |
| **3-Year TCO** | **$968,075** |
| **5-Year TCO** | **$1,183,075** |

**Hardware:** APs: 100x MR78 @ $1,799 | Access: 50x MS390-48 @ $7,695 | Core: 5x MS425-32 @ $14,995 | SD-WAN: 10x MX68 @ $595

**Licensing:** Meraki license mandatory: 100 APs @ $200/yr = $20,000 + 50 access @ $350/yr = $17,500 + 5 core @ $500/yr = $2,500 + 10 MX @ $150/yr = $1,500. Enterprise license for full features: add ~66K. Total: ~$107,500/yr.

**Support:** Support included in license. No separate support contract, but no license = no support = no functioning hardware.

## Hidden Costs

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $1,000-$3,000 | LOW |
| Professional Services | $5,000-$15,000 | LOW |
| Migration Complexity | Very High | HIGH |
| Multi-Platform Tax | Moderate | MEDIUM |
| License True-Up Surprises | $10,000-$30,000/yr | HIGH |
| Vendor Lock-In Risk | Extreme | HIGH |

- **Training & Certification** ($1,000-$3,000): Simple platform. Meraki Solutions Specialist relatively easy.
- **Professional Services** ($5,000-$15,000): Simple deployments, but limited customization when you hit walls.
- **Migration Complexity** (Very High): Cloud-only. Moving away = 100% hardware forklift. Zero hardware reuse.
- **Multi-Platform Tax** (Moderate): If org also runs Catalyst, two completely separate ecosystems to manage.
- **License True-Up Surprises** ($10,000-$30,000/yr): License expiry = hardware bricks. Renewal pricing can increase. Auto-renewal traps.
- **Vendor Lock-In Risk** (Extreme): Most locked-in platform in the industry. No config export, no on-prem fallback, no hardware reuse.

## Products

See [[Product Catalog]] for full specs.

### Wireless
| Model | Use Case | List Price |
|-------|----------|------------|
| MR78 | Cloud-managed Wi-Fi 7 indoor | $1,799 |

### Switching
| Model | Use Case | List Price |
|-------|----------|------------|
| MS390-48 | 48-port cloud-managed access | $7,695 |

### SD-WAN
| Model | Use Case | List Price |
|-------|----------|------------|
| MX68 | Small branch security appliance | $595 |

## Related

- [[vs Meraki]] — Battle card
- [[Wireless]], [[Switching]], [[SD-WAN]], [[Management]]
- [[TCO Comparison]], [[Value Scores]], [[Licensing Models]]
- [[Competitive Replacements]]
