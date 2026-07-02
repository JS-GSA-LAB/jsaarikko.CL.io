---
vendor_code: RKUS
color: "#fdb813"
tagline: "High-performance wireless"
flagship: "Ruckus One, ICX Switches"
ownership: "Part of Belden Inc. (acquisition CLOSED 2026-07-01, from Vistance Networks)"
updated: 2026-07-02
aliases:
  - Ruckus
  - Ruckus - Vistance
  - Ruckus - Belden
tags: [vendor]
---
# RUCKUS — part of Belden (acquisition CLOSED 2026-07-01)

> **High-performance wireless**
> Flagship: Ruckus One, ICX Switches
> **M&A:** Belden Inc. (NYSE: BDC) **CLOSED** its acquisition of RUCKUS from Vistance Networks (~$1.85B) on **2026-07-01**. Announced 2026-04-30; deal is now complete. RUCKUS is a Belden business unit.

## M&A Status (updated 2026-05-22)

| Field | Value |
|---|---|
| Acquirer | **Belden Inc.** (NYSE: BDC) |
| Seller | **Vistance Networks** (NASDAQ: VISN) — the renamed remaining CommScope entity post broadband/cable divestiture to Amphenol |
| Deal Size | **~$1.85B** |
| Announced | 2026-04-30 |
| **Closed** | **2026-07-01** — acquisition complete; RUCKUS now a Belden business unit |
| Financing | Fully committed J.P. Morgan debt; cash/debt mix not disclosed |
| Brand Retention | **Not announced** — RUCKUS brand in active use pre-close; longer-term not addressed in release |
| Belden's Framing | "Accelerating its transformation into a full-stack networking solutions provider" |
| RUCKUS Standalone Metrics (disclosed by Belden) | High-single-digit revenue growth, gross margins **>60%**, Adjusted EBITDA margins **>20%** |
| Competing Bidder | **Extreme** was a competing bidder per SDxCentral ("Belden beats Extreme") |

### Risk Reframing

The old story — "CommScope debt = vendor viability risk" — is **resolved by the deal**. The new risks are different:

- 🟡 **Integration risk** (12–18 months of org churn under Belden)
- 🟡 **Strategic drift** — Belden's heritage is industrial/OT cabling (Hirschmann); RUCKUS may pivot toward industrial / transportation / stadium verticals rather than mainstream enterprise/campus
- 🟢 **Financial stability** improved vs. late-stage Vistance
- 🟡 **Possible mid-term rebrand** under Belden
- 🟢 **Roadmap intact** pre-close: Wi-Fi 7 (LAFC at BMO Stadium), Nokia fiber-LAN partnership, DoDIN-approved ICX via Carahsoft, Pro AV ICX expansion all shipping in 2026

**Sources:** Belden investor release 2026-04-30; SDxCentral; Light Reading; Pulse 2.0; Alston & Bird (Vistance counsel).

## Product Notes — verified 2026-07-02

All facts verified against official **ruckusnetworks.com / commscope.com** sources on 2026-07-02.

**Ownership:** Belden acquisition **CLOSED 2026-07-01** (acquired from Vistance Networks, the renamed remaining CommScope entity). RUCKUS is now a Belden business unit; brand retained in active use.

**Cloud & management stack:**
- **RUCKUS One** — cloud management platform (subscription; ~$150/AP/yr, ~$120/switch/yr)
- **RUCKUS AI** — AIOps / assurance layer within RUCKUS One
- **SmartZone** — on-prem controller (perpetual license)
- **RUCKUS Edge** — new edge platform (Edge 144 appliance + virtual; VXLAN fabric/services at the edge)
- **RUCKUS Unleashed** — controller-less small-site management

**SD-WAN:** RUCKUS **does** have an SD-WAN offering — **RUCKUS WAN Gateway (RWG)**. The prior competitive framing "no SD-WAN offering" was **wrong** and has been corrected in the dashboard.

**Access Points (current):**
- **Wi-Fi 7 indoor:** R770 (flagship, BeamFlex+), R670 (mid), **R575** (mid, tri-band, dual 2.5GbE LAG — added), R370 (entry)
- **Wi-Fi 7 outdoor:** **T670** and **T670sn** — **REAL products** (previously mis-flagged as fabricated; now confirmed at ruckusnetworks.com/products/wireless-access-points/t670 and /t670sn). 9.3 Gbps tri-band US/Canada, 6.45 Gbps dual-band global; 2x2:2. T670sn has a programmable/switchable **sector antenna** for stadiums/arenas.
- **Wi-Fi 7 wall-plate:** **H670** (5GbE uplink + 4x 1/2.5GbE downlinks, 2 PoE-out) — added; corrected from prior Wi-Fi 6E / $1,095 entry to Wi-Fi 7 / ~$695 est.
- **Corrections:** R760 (Wi-Fi 6E flagship) max rate corrected **7.8 → 8.35 Gbps** (datasheet 8,348 Mb/s). **R670X does not exist** — fabricated SKU removed. R650 soft-flagged as possibly EOL (not on current AP index).

**Switches (ICX):**
- **ICX 8200 / 8100** — current access series (**new entry**). ICX 8200-48ZP2 = mGig (1/2.5/5/10G), 60/90W 802.3bt, up to 8x 25G SFP28 uplink/stack, VXLAN. **MACsec NOT supported on 8200.**
- **ICX 7550 / 7850** — mid/aggregation-core. **MACsec supported on 7550 and 7850-48FS.**
- **ICX 7150 / 7650** — legacy.

### Could-not-verify caveats (carried into dashboard notes)
- **R650 EOL status** — not on the current ruckusnetworks.com AP index; may be EOL. Soft-flagged `[VERIFY]`, not removed.
- **R575 / H670 / ICX 8200 pricing** — specs verified; list prices are **estimates** (no CDW/partner-portal confirmation). Flagged `[!]` in the built dashboard.
- **ICX 7550 per-SKU PoE wattages** — not re-verified in this pass.

## Market Position

| Category | Quadrant | Note |
|----------|----------|------|
| Wireless | Challenger | Strong RF performance, transitioning to cloud |
| Switching | Challenger | ICX series solid performance |
| Management | Visionary | Ruckus One — new platform, growing features |

## Strengths & Weaknesses

### Wireless
**Strengths:**
- Superior RF performance
- Antenna technology
- Dense environment expertise
- ICX switching

**Weaknesses:**
- Pending Belden acquisition — 12–18 mo integration overhang
- Cloud transition in progress
- Limited SD-WAN/routing

### Switching
**Strengths:**
- High PoE budgets
- Reliable stacking
- Good campus performance

**Weaknesses:**
- Limited DC presence
- Aging ICX platform
- Pending Belden acquisition — strategic direction not yet disclosed

### Management
**Strengths:**
- New cloud platform
- Good wireless analytics
- SmartZone reliability

**Weaknesses:**
- Platform maturity
- Limited AIOps
- Transition period

## Value Scores

| Dimension | Score (1-10) |
|-----------|-------------|
| Feature Completeness | 7 |
| Cloud & AI Innovation | 6 |
| Licensing Flexibility | 7 |
| Deployment Simplicity | 7 |
| Support Quality | 6 |
| Ecosystem & Integration | 5 |
| Built-in Security | 6 |
| Scalability | 7 |

## Licensing

- **Model:** Flexible (Perpetual + Subscription)
- **Mandatory:** No
- **Free Tier:** No
- **Hardware Works Without License:** Yes
- **Tiers:** Ruckus One ($120-150/dev/yr cloud) or SmartZone (perpetual on-prem)
- **Lock-In:** Medium-Low — Choice between cloud subscription and perpetual on-prem. Hardware works with either model.
- **Exit Cost:** Low-Medium — Standard hardware. SmartZone perpetual provides on-prem safety net. Moderate migration effort.

## TCO Summary

> Scenario: 100 APs / 50 Access Switches / 5 Core Switches / 10 SD-WAN Sites

| Component | Cost |
|-----------|------|
| Hardware Total | $609,225 |
| Mgmt Platform | $0 |
| Annual License | $23,250/yr |
| Annual Support | $35,000/yr |
| **3-Year TCO** | **$783,975** |
| **5-Year TCO** | **$900,475** |

**Hardware:** APs: 100x R770 @ $1,595 | Access: 50x ICX 7550-48 @ $6,995 | Core: 5x ICX 7850-48C @ $19,995 | SD-WAN: N/A

**Licensing:** Ruckus One: 100 APs @ $150/yr = $15,000 + 55 switches @ $120/yr = $6,600. SmartZone on-prem alternative (perpetual). Total cloud: ~$23,250/yr.

**Support:** CommScope WatchDog: ~$35,000/yr. Standard support + software maintenance.

## Hidden Costs

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $2,000-$8,000 | MEDIUM |
| Professional Services | $5,000-$20,000 | LOW |
| Migration Complexity | Medium | MEDIUM |
| Multi-Platform Tax | Moderate | MEDIUM |
| License True-Up Surprises | $3,000-$8,000/yr | LOW |
| Vendor Lock-In Risk | Medium-Low | LOW |

- **Training & Certification** ($2,000-$8,000): Ruckus certifications. Platform transition (SmartZone → Ruckus One) requires retraining.
- **Professional Services** ($5,000-$20,000): Straightforward deployments. Strong wireless expertise in channel.
- **Migration Complexity** (Medium): SmartZone → Ruckus One migration in progress. Pending Belden acquisition (close 2H 2026) adds change-of-control overhang on platform direction.
- **Multi-Platform Tax** (Moderate): No SD-WAN — need third-party solution for WAN. Two management planes.
- **License True-Up Surprises** ($3,000-$8,000/yr): Simple cloud pricing. SmartZone perpetual option provides predictability.
- **Vendor Lock-In Risk** (Medium-Low): Standard hardware. SmartZone perpetual option. Future strategy under Belden ownership not yet disclosed.

## Products

See [[Product Catalog]] for full specs.

### Wireless
| Model | Use Case | List Price |
|-------|----------|------------|
| R770 | High-performance indoor Wi-Fi 7 | $1,595 |

### Switching
| Model | Use Case | List Price |
|-------|----------|------------|
| ICX 7550-48 | 48-port campus access | $6,995 |

## Related

- [[vs Ruckus - CommScope]] — Battle card
- [[Wireless]], [[Switching]], [[SD-WAN]], [[Management]]
- [[TCO Comparison]], [[Value Scores]], [[Licensing Models]]
- [[Competitive Replacements]]
