---
vendor_code: CSCO
color: "#049fd9"
tagline: "Enterprise networking market leader"
flagship: "Catalyst 9000, DNA Center"
tags: [vendor]
---
# Cisco

> **Enterprise networking market leader**
> Flagship: Catalyst 9000, DNA Center

## Market Position

| Category | Quadrant | Note |
|----------|----------|------|
| Wireless | Leader | Market share leader with broadest portfolio |
| Switching | Leader | Dominant market position with Catalyst 9000 |
| Sdwan | Leader | Catalyst SD-WAN (Viptela) — strong enterprise presence |
| Management | Leader | Catalyst Center — most features, most complexity |

## Strengths & Weaknesses

### Wireless
**Strengths:**
- Largest market share
- Broadest portfolio
- Strong partner ecosystem
- Deep security integration

**Weaknesses:**
- Complex licensing
- Premium pricing
- Multiple overlapping platforms (Catalyst vs Meraki)

### Switching
**Strengths:**
- Largest install base
- SD-Access
- Nexus DC portfolio
- StackWise technology

**Weaknesses:**
- Expensive licensing
- Complex SD-Access deployment
- Vendor lock-in

### Sdwan
**Strengths:**
- Largest SD-WAN install base
- Strong SASE roadmap
- Broad integration

**Weaknesses:**
- Complex licensing
- Multiple overlapping solutions
- Expensive

### Management
**Strengths:**
- Most comprehensive features
- Strong automation
- Large ecosystem
- Deep analytics

**Weaknesses:**
- Multiple overlapping platforms
- Complex licensing
- Expensive Catalyst Center appliance

## Value Scores

| Dimension | Score (1-10) |
|-----------|-------------|
| Feature Completeness | 10 |
| Cloud & AI Innovation | 8 |
| Licensing Flexibility | 4 |
| Deployment Simplicity | 5 |
| Support Quality | 9 |
| Ecosystem & Integration | 10 |
| Built-in Security | 9 |
| Scalability | 10 |

## Licensing

- **Model:** Mandatory Subscription (DNA)
- **Mandatory:** Yes
- **Free Tier:** No
- **Hardware Works Without License:** No
- **Tiers:** DNA Essentials (~$100/dev/yr) → DNA Advantage (~$175-450/dev/yr) → DNA Premier
- **Lock-In:** High — DNA license required for full functionality. Features degrade without active subscription. Proprietary protocols.
- **Exit Cost:** High — Significant migration effort. DNA/ISE/SD-Access deeply integrated. Retraining costs for new platform.

## TCO Summary

> Scenario: 100 APs / 50 Access Switches / 5 Core Switches / 10 SD-WAN Sites

| Component | Cost |
|-----------|------|
| Hardware Total | $849,175 |
| Mgmt Platform | $25,000 |
| Annual License | $69,750/yr |
| Annual Support | $52,000/yr |
| **3-Year TCO** | **$1,239,425** |
| **5-Year TCO** | **$1,482,925** |

**Hardware:** APs: 100x CW9178I @ $2,495 | Access: 50x C9300-48T @ $8,995 | Core: 5x C9500-24Y4C @ $24,995 | SD-WAN: 10x C1111-8P @ $2,495

**Licensing:** DNA Advantage required: 100 APs @ $175/yr = $17,500 + 50 access @ $400/yr = $20,000 + 5 core @ $1,200/yr = $6,000 + 10 SD-WAN @ $200/mo = $24,000. Total: ~$69,750/yr.

**Support:** SmartNet Total Care: ~$52,000/yr. Required for TAC + software + RMA. SWSS for DNA.

## Hidden Costs

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $5,000-$25,000 | HIGH |
| Professional Services | $30,000-$100,000+ | HIGH |
| Migration Complexity | High | HIGH |
| Multi-Platform Tax | $50,000-$200,000 | HIGH |
| License True-Up Surprises | $20,000-$50,000/yr | MEDIUM |
| Vendor Lock-In Risk | Very High | HIGH |

- **Training & Certification** ($5,000-$25,000): CCNA/CCNP required. Extensive training ecosystem — and expectation. DNA Center has steep learning curve.
- **Professional Services** ($30,000-$100,000+): SD-Access deployments typically require Cisco or partner PS. Complex architecture.
- **Migration Complexity** (High): Migrating from IOS to IOS-XE, or between Catalyst/Meraki, is a major project.
- **Multi-Platform Tax** ($50,000-$200,000): Catalyst + Meraki = two separate platforms, dashboards, training, and license models in one company.
- **License True-Up Surprises** ($20,000-$50,000/yr): DNA license tiers confusing. Essentials vs Advantage vs Premier. Smart Licensing audits.
- **Vendor Lock-In Risk** (Very High): ISE, TrustSec, SD-Access, DNAC deeply proprietary. Migration cost grows exponentially with depth.

## Products

See [[Product Catalog]] for full specs.

### Wireless
| Model | Use Case | List Price |
|-------|----------|------------|
| CW9178I | High-density indoor flagship | $2,495 |
| C9136I | Enterprise indoor 6E | $1,895 |

### Switching
| Model | Use Case | List Price |
|-------|----------|------------|
| C9300-48T | 48-port enterprise access | $8,995 |
| C9500-24Y4C | Core / aggregation | $24,995 |

### SD-WAN
| Model | Use Case | List Price |
|-------|----------|------------|
| C1111-8P | Branch office ISR with SD-WAN | $2,495 |

## Related

- [[vs Cisco]] — Battle card
- [[Wireless]], [[Switching]], [[SD-WAN]], [[Management]]
- [[TCO Comparison]], [[Value Scores]], [[Licensing Models]]
- [[Competitive Replacements]]
