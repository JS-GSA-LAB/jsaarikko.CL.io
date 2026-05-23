---
title: "Ruckus Substitution Request and Solution Overview"
subtitle: "Extreme Networks Wi-Fi 7 & Switching Solution"
customer: "(Customer / School District Name)"
prepared_by: "Extreme Networks"
date: "2026-05"
version: "v2 — Belden acquisition refresh"
aliases:
  - Ruckus Substitution Playbook
  - Ruckus to Extreme Playbook
  - Ruckus Substitution v2
tags: [replacement, playbook, vendor/ruckus, vendor/extreme, vendor/belden]
related:
  - "[[Ruckus - CommScope]]"
  - "[[vs Ruckus - CommScope]]"
  - "[[Extreme Networks]]"
  - "[[Competitive Replacements]]"
---

# Ruckus Substitution Request and Solution Overview

**Extreme Networks Wi-Fi 7 & Switching Solution**
*(Customer / School District Name)*
Prepared by: Extreme Networks | May 2026 (v2 — Belden acquisition refresh)

---

## Document Contents

- Introduction — Extreme Networks as the Ruckus Substitution Solution
- **Section 0 — Vendor Stability & Strategic Risk (NEW)** — Belden acquisition of Ruckus and what it means for District procurement
- Section 1 — Wi-Fi 7 Mid-Tier Indoor Access Point — Ruckus R670 → Extreme AP5022
- Section 2 — Wi-Fi 7 Flagship Indoor Access Point — Ruckus R770 → Extreme AP5020
- Section 3 — Wi-Fi 7 Outdoor Access Point — Ruckus T670 → Extreme AP5060U
- Section 4 — Access Switch (PoE+) — Ruckus ICX 8200 → Extreme 5320-48P-8XE
- Section 5 — PoE++ Multi-Gig Access Switch — Ruckus ICX 7550-48ZP → Extreme 5720-48MXW
- Section 6 — On-Premises Network Management — Ruckus SmartZone → ExtremeCloud IQ Site Engine
- Section 7 — Cloud Network Management — Ruckus One → ExtremeCloud IQ
- Conclusion

---

## Introduction

The proposed Extreme Networks solution for *(Customer / School District Name)* consists of enterprise-class Wi-Fi 7 access points, multi-gigabit PoE switching, and unified cloud and on-premises management — designed to provide a highly reliable, high-performance infrastructure that delivers the wireless density, wired resiliency, and operational simplicity that modern K-12 and higher-education environments demand. Based on open standards and differentiated technology, Extreme's network solutions offer clear advantages over the Ruckus portfolio, meeting and in most cases exceeding the performance, scalability, and management capabilities of the referenced products.

This document was originally prepared as a direct, product-for-product substitution of the referenced Ruckus equipment with equivalent or superior Extreme Networks solutions. **This v2 refresh adds an additional dimension of consideration:** on April 30, 2026, Belden Inc. (NYSE: BDC) announced a definitive agreement to acquire Ruckus Networks from Vistance Networks (the renamed remaining CommScope entity) for approximately $1.85 billion. The acquisition is expected to close in the second half of 2026. For Districts evaluating Ruckus today, this introduces a meaningful procurement risk that did not exist when the original Ruckus vendor selection was made. Section 0 covers this in detail. Each subsequent product section is unchanged technically, with vendor-reference language updated to reflect the new ownership chain.

Extreme Networks delivers one critical advantage no competitor currently matches: a single hardware platform that can be managed through cloud, on-premises, or hybrid deployment — with no hardware swap required when management strategy changes. ExtremeCloud IQ, ExtremeCloud IQ Site Engine, and the emerging Extreme Platform ONE AI stack all operate on the same access points and switches. CoPilot AIOps, Digital Twin configuration validation, and the forthcoming Agent ONE autonomous operations layer give Districts a clear technology roadmap at no additional hardware cost. Combined with Extreme's lifetime hardware warranty, included software updates, and proven K-12 deployment history, this solution represents a compelling, defensible alternative to the Ruckus portfolio under any of its current or pending ownership configurations.

---

## Section 0 — Vendor Stability & Strategic Risk

### Solution Overview

Network infrastructure decisions made today commit a District to a vendor relationship that typically spans 5–7 years across hardware, software licensing, support, and refresh cycles. When that vendor is in active corporate transition, the procurement risk profile changes materially. As of the date of this document, **Ruckus Networks is in an active acquisition process** — its third ownership change in four years — that introduces uncertainty around brand identity, product roadmap, support continuity, and strategic direction. This section documents what has been announced and what has not, so the District can make a procurement decision with full visibility into the vendor-stability dimension.

### 0.1 The Belden Acquisition Announcement

| Field | Detail |
|---|---|
| **Acquirer** | Belden Inc. (NYSE: BDC) |
| **Target** | Ruckus Networks |
| **Seller** | Vistance Networks (NASDAQ: VISN) — the renamed remaining CommScope entity after the broadband/cable unit was divested to Amphenol |
| **Deal Size** | ~$1.85 billion |
| **Announced** | April 30, 2026 |
| **Expected Close** | Second half of 2026, subject to customary closing conditions and regulatory approvals |
| **Financing** | Fully committed debt financing from J.P. Morgan; cash/debt mix not disclosed |
| **Strategic Rationale (Belden CEO quote)** | "The addition of RUCKUS brings a leading provider of purpose-driven enterprise networks to Belden and accelerates our transformation into a full-stack networking solutions provider." |
| **RUCKUS Standalone Metrics (per Belden's release)** | High-single-digit revenue growth; gross margins above 60%; Adjusted EBITDA margins above 20%. Immediately accretive to Belden's Adjusted EPS. |

*Sources: Belden investor release (2026-04-30); SDxCentral; Light Reading; Pulse 2.0; Alston & Bird (Vistance counsel).*

### 0.2 What This Means for Districts Procuring Ruckus Today

Five concrete uncertainties result from the pending acquisition. None are addressed in publicly available Belden or Ruckus communications as of this writing.

**1. Brand Identity Is Uncertain.**
Belden's acquisition release does not address whether the Ruckus brand will be retained, co-branded ("Belden Ruckus"), or retired post-close. Districts that commit to "Ruckus" today may be supporting equipment under a different brand name in 12–18 months — with associated implications for documentation, training material, support portal URLs, and partner certifications. Belden has not provided clarity on this point and has not committed to a timeline for clarifying it.

**2. Product Roadmap Continuity Is Unconfirmed.**
Ruckus's three current product lines — Ruckus One (cloud management), the ICX switching family, and the R/T-series access points — are not addressed individually in the Belden announcement. Belden's framing of the deal as "accelerating its transformation into a full-stack networking solutions provider" suggests broad continued investment, but does not guarantee feature-level continuity, parity with the current pace of release, or that all three product lines will continue in their current form. Districts cannot procure today with full visibility into the 24-month product roadmap.

**3. Strategic Direction May Shift Toward OT and Industrial.**
Belden's existing networking heritage is in industrial and operational technology (OT) — most notably through its Hirschmann brand serving manufacturing, transportation, and process-industry customers. The acquisition rationale of "full-stack networking" suggests Belden may steer Ruckus's product development emphasis toward industrial, transportation, and venue verticals where Belden has existing distribution and customer relationships, rather than the K-12 and higher-education campus markets that have historically driven Ruckus's R&D priorities. Districts cannot assume that K-12-relevant features (cloud management at scale, multi-tenant administration, district-specific reporting) will remain priority investment areas under Belden ownership.

**4. Integration Overhang Typically Spans 12–18 Months.**
Enterprise acquisitions of this scale routinely produce 12–18 months of integration-related organizational change: account-team realignments, channel-partner program consolidation, support-organization restructuring, and changes to commercial terms. The most common operational impacts during this period — slower escalation, account-team turnover, and renegotiated reseller pricing — affect customer experience even when product roadmaps are intact. Districts placing orders in the next 12 months should expect integration friction during their initial deployment and onboarding period.

**5. Ownership Volatility Is a Pattern, Not an Incident.**
Ruckus has been part of four distinct corporate entities in four years: Brocade (parent until late 2017) → Arris (acquired Brocade in 2017) → CommScope (acquired Arris in 2019) → Vistance Networks (CommScope renaming in early 2026 after divesting the broadband/cable unit to Amphenol) → Belden (announced April 30, 2026; expected close 2H 2026). Each transition has historically produced a 9–15 month period of strategic uncertainty, organizational change, and customer-facing disruption. The Belden acquisition is the fifth corporate parent for the Ruckus product portfolio in under a decade.

### 0.3 Procurement Risk Considerations

For a District committing to a 5–7 year vendor relationship, the following procurement provisions warrant explicit review in light of the pending acquisition:

- **Change-of-control clauses** in any proposed Ruckus enterprise agreement — do they permit termination or repricing if Ruckus is acquired or rebranded?
- **Price-protection terms** during the integration period — typical post-acquisition behavior includes wholesale pricing changes within 12 months of close.
- **Support continuity guarantees** — Ruckus's current support program ("WatchDog") is administered under the Vistance organizational structure; Belden has not committed to preserving its current SLAs or escalation path post-close.
- **Channel partner stability** — the local reseller a District selected this year may have a different relationship with Ruckus, or a different commercial structure, after close.
- **Software and licensing portability** — Ruckus One subscriptions and SmartZone perpetual licenses have historically been non-portable across ownership changes; the District should obtain written confirmation that current licenses survive the transition and convey to the post-close entity on equivalent terms.

These considerations apply specifically to Ruckus due to its active acquisition. They do not apply to Extreme Networks, which has remained publicly traded and independent since its 1996 founding.

### 0.4 Why Extreme Is the Stable Choice

Extreme Networks (NASDAQ: EXTR) has been a publicly traded, independent enterprise networking vendor since 1999. The company has not been acquired, divested, or rebranded in nearly three decades of operation. K-12 and higher-education customers are a strategic vertical with dedicated sales, channel, and product investment; this strategic focus is publicly stated and reflected in product development priorities.

The remainder of this document presents the technical substitution. The case for moving to Extreme is supported by the product-level advantages documented in Sections 1–7. **The vendor-stability case in this Section 0 is independent of those technical advantages and stands on its own merits for any District considering a multi-year commitment.**

---

## Section 1 — Wi-Fi 7 Mid-Tier Indoor Access Point
### Ruckus R670 → Extreme AP5022

### Solution Overview

For locations referencing the Ruckus R670 tri-band Wi-Fi 7 indoor access point, Extreme Networks proposes the **AP5022** as a direct substitution. Both products are tri-band Wi-Fi 7 (802.11be) indoor access points, and both are designed for environments requiring multi-radio flexibility, high client density, and modern PoE power delivery. Importantly, both are 802.11be (Wi-Fi 7) products — the same generation — enabling a like-for-like technology comparison.

The Extreme AP5022 delivers 4x4:4 MIMO across all three bands (2.4 GHz, 5 GHz, and 6 GHz) plus a dedicated tri-band security sensor radio and integrated dual IoT radios — a five-radio design that provides symmetric spatial stream capacity across all bands while enabling built-in wireless intrusion prevention and spectrum analysis without repurposing a data radio. It is fully managed through ExtremeCloud IQ (cloud), ExtremeCloud IQ Site Engine (on-premises), or the emerging Extreme Platform ONE — giving the District a flexible, future-proof management path on day one.

### Key Design Features

**Simplicity in Deployment**
- Zero-touch provisioning via ExtremeCloud IQ — APs claim to cloud automatically on first power-up with no staging required.
- Operates at full Wi-Fi functionality on 802.3at (PoE+, 30W) — no PoE++ infrastructure upgrade needed to deploy.
- Wi-Fi 7 (802.11be) tri-band design with 320 MHz channel support and Multi-Link Operation (MLO) — same Wi-Fi generation as the R670, delivering a true like-for-like technology substitution.
- Same hardware platform managed by cloud or on-premises — the District can shift management strategy without replacing APs.

**Simplicity in Management**
- ExtremeCloud IQ provides a single dashboard for all APs, switches, and WAN devices — wired and wireless managed together.
- Bulk firmware updates, configuration push, and SSID changes deployed across all APs from a single policy action.
- ExtremeCloud IQ CoPilot AIOps delivers explainable anomaly detection — alerts include root cause context, not just raw SNMP events.
- Digital Twin (GA) enables pre-deployment validation of configuration and device changes in a simulated environment before committing to production.
- Mobile companion app with QR/barcode device onboarding reduces truck roll time for new AP installs.

**Simplicity in Performance**
- Symmetric 4x4:4 MIMO on all three bands — full spatial stream capacity available in the 6 GHz band where Ruckus R670 uses only 2x2 in tri-band mode.
- Up to ~20 Gbps aggregate Wi-Fi 7 throughput across tri-band radios — more than double the R670's 9.34 Gbps — per Extreme AP5022 product specifications.
- Dedicated tri-band security sensor provides always-on WIPS and spectrum analysis using a hardware-dedicated radio without impacting client throughput.
- Wi-Fi 7 OFDMA, MU-MIMO, and Multi-Link Operation (MLO) for simultaneous multi-client transmission, reducing latency in high-density environments.

### Feature Comparison Matrix

| Feature | Ruckus R670 | Extreme AP5022 |
|---|---|---|
| Wi-Fi Generation | Wi-Fi 7 (802.11be) | Wi-Fi 7 (802.11be) — per Extreme AP5022 product page |
| Radio Configuration | Tri-band: 2x2:2 (2.4 GHz) + 2x2:2 (5 GHz) + 2x2:2 (6 GHz) in tri-band mode; 2x2:2 (2.4 GHz) + 4x4:4 (5 GHz) in dual-band mode — per Ruckus R670 datasheet | Quad-radio: 4x4:4 (2.4 GHz) + 4x4:4 (5 GHz) + 4x4:4 (6 GHz) + dedicated 2x2 tri-band sensor; also supports dual-5 GHz and dual-6 GHz modes — per Extreme AP5022 product specifications |
| Aggregate Throughput | 9.34 Gbps (2.4 GHz: 689 Mbps + 5 GHz: 5,765 Mbps + 6 GHz: 5,765 Mbps) — per Ruckus R670 datasheet | Up to ~20 Gbps aggregate (Wi-Fi 7, 4x4:4 across all three bands) — per Extreme AP5022 product specifications |
| Spatial Streams | 6 streams (tri-band mode: 2+2+2) or 6 streams (dual-band mode: 2+4) | 12 streams (4+4+4 across all three data bands) — per Extreme AP5022 product specifications |
| Uplink Port(s) | 1x 5 GbE + 1x 1 GbE — per Ruckus R670 datasheet | Multi-rate uplink port — per Extreme AP5022 product specifications |
| PoE Input | 802.3bt (PoE++) for full tri-band operation | 802.3at (PoE+) for standard AP operation; 802.3bt recommended for full feature set — per Extreme AP5022 product specifications |
| Antenna Technology | BeamFlex+ adaptive antenna; up to 4 dBi gain; 4,000+ patterns per band — per Ruckus R670 datasheet | Integrated tri-band antennas; OFDMA spatial reuse; Wi-Fi 7 MLO — per Extreme AP5022 product specifications |
| WIPS / RF Sensing | Requires separate WIPS service configuration; no dedicated always-on sensor radio | Dedicated hardware tri-band sensor (2.4/5/6 GHz) built into AP — continuous WIPS without repurposing a data radio — per Extreme AP5022 product specifications |
| IoT Radios | 1x onboard IoT radio (BLE or Zigbee) — per Ruckus R670 datasheet | Dual integrated IoT radios (BLE/Zigbee/Thread) — per Extreme AP5022 product specifications |
| Concurrent Users | 768 — per Ruckus R670 datasheet | *per Extreme AP5022 datasheet* |
| Cloud Management | Ruckus One (cloud) — subscription required | ExtremeCloud IQ (Navigator / Pilot / CoPilot tiers); Extreme Platform ONE |
| On-Premises Management | SmartZone (separate appliance/VM) — additional license cost | ExtremeCloud IQ Site Engine; ExtremeCloud IQ on-premises deployment option |
| Management Flexibility | Cloud and on-prem use different management interfaces; migrating between them requires re-provisioning APs | Same AP hardware managed by cloud or on-premises without hardware swap — management mode switchable |
| AI / AIOps | Ruckus One includes AI-driven analytics and ML-based assurance; no named AI assistant interface | ExtremeCloud IQ CoPilot AIOps (GA): explainable anomaly detection, dynamic baselining, client experience insights |
| Warranty | Limited lifetime hardware warranty; TAC and software support require active subscription | Lifetime hardware warranty; software updates included — per Extreme Networks warranty policy |

### Design Description

For each location referencing the Ruckus R670 Wi-Fi 7 indoor access point, Extreme Networks proposes the AP5022 as a direct Wi-Fi 7 substitution. Both the R670 and AP5022 are IEEE 802.11be (Wi-Fi 7) tri-band access points — the same wireless generation. The AP5022 delivers more than double the R670's aggregate throughput (up to ~20 Gbps vs. 9.34 Gbps) and provides 12 spatial streams vs. the R670's 6 in tri-band mode, with symmetric 4x4:4 MIMO across all three bands providing full throughput in the 6 GHz spectrum — a band increasingly critical for reducing congestion in high-density classroom environments.

The AP5022's dedicated tri-band security sensor addresses a common District concern: wireless security monitoring without the cost of a dedicated WIPS overlay. Unlike the R670, which requires separate WIPS configuration without a hardware-dedicated sensor radio, the AP5022 monitors continuously on all three bands from a purpose-built sensor while all data radios remain fully available for client traffic. With ExtremeCloud IQ CoPilot AIOps managing all access points, switches, and WAN from a single interface, the District's IT team gains a unified operational view and the ability to push bulk configuration changes, firmware updates, and policy changes from one location — reducing administrative overhead across all school sites.

---

## Section 2 — Wi-Fi 7 Flagship Indoor Access Point
### Ruckus R770 → Extreme AP5020

### Solution Overview

For locations requiring flagship-tier Wi-Fi 7 performance — high-density auditoriums, gymnasiums, libraries, cafeterias, and staff office areas — Extreme Networks proposes the **AP5020** as a direct substitution for the Ruckus R770. Both are tri-band Wi-Fi 7 indoor APs positioned as the flagship offering in their respective vendor's portfolio. A direct comparison of published datasheet throughput figures reveals that the AP5020 delivers significantly higher aggregate throughput than the R770 on a per-datasheet basis.

Per Ruckus's published R770 datasheet, the R770's aggregate PHY rate is **12.22 Gbps** (2.4 GHz: 689 Mbps + 5 GHz: 5,765 Mbps + 6 GHz: 5,765 Mbps), with a radio configuration of 2x2:2 (2.4 GHz) + 4x4:4 (5 GHz) + 2x2:2 (6 GHz). Per Extreme Networks' product specifications, the AP5020 delivers up to **20 Gbps** aggregate with 4x4:4 MIMO across all three bands. This represents a meaningful difference in available spatial streams in the 6 GHz spectrum — the R770 provides 2 spatial streams in 6 GHz while the AP5020 provides 4. For next-generation client density and 6 GHz capacity planning, this difference is material.

> **Throughput Note:** Per Ruckus's published R770 datasheet, the R770 aggregate PHY rate is 12.22 Gbps — the 6 GHz radio is 2x2:2, not 4x4:4. Per Extreme's product specifications, the AP5020 delivers up to 20 Gbps with symmetric 4x4:4 across all bands. Verify both figures against current datasheets before procurement.

### Key Design Features

**Simplicity in Deployment**
- Zero-touch provisioning — AP5020 claims to ExtremeCloud IQ automatically on first power-up; no manual staging or CLI configuration required.
- Per Extreme's product specifications, the AP5020 draws just 21W typical — the lowest reported power consumption of any enterprise Wi-Fi 7 AP, enabling deployment on existing PoE+ infrastructure without switch upgrades.
- Dual uplink ports (10 GbE + 5 GbE) provide link redundancy and dedicated in-band/out-of-band management connectivity at flagship venues.
- Same hardware managed cloud or on-premises — the District does not need to re-hardware when shifting management strategy.

**Simplicity in Management**
- ExtremeCloud IQ CoPilot AIOps delivers explainable anomaly detection with root-cause context — not just alert storms requiring manual correlation.
- Digital Twin (GA) enables pre-deployment simulation of firmware updates and configuration changes before applying to production APs.
- Single policy across all AP5020 units — SSID changes, VLAN assignments, and security policies pushed simultaneously to all flagged locations.
- Client experience scoring provides per-user insight into connection quality, enabling proactive resolution before issues are reported by staff or students.

**Simplicity in Performance**
- 4x4:4 MIMO in 6 GHz — double the spatial streams of the R770's 2x2:2 6 GHz radio, providing higher throughput capacity for next-generation 6 GHz clients.
- Up to 20 Gbps aggregate PHY rate — per Extreme AP5020 product specifications — versus 12.22 Gbps for the R770 per Ruckus's published datasheet.
- Dual uplink: 10 GbE primary + 5 GbE secondary — fully utilizes the AP5020's throughput capacity with a wired backhaul that matches radio performance.
- Wi-Fi 7 Multi-Link Operation (MLO) enables simultaneous transmission across bands, reducing latency for latency-sensitive applications (VoIP, video conferencing, real-time assessment tools).

### Feature Comparison Matrix

| Feature | Ruckus R770 | Extreme AP5020 |
|---|---|---|
| Wi-Fi Generation | Wi-Fi 7 (802.11be) | Wi-Fi 7 (802.11be) |
| Radio / MIMO Configuration | 2x2:2 (2.4 GHz) + 4x4:4 (5 GHz) + 2x2:2 (6 GHz) — 8 spatial streams total — per Ruckus R770 published datasheet | 4x4:4 (2.4 GHz) + 4x4:4 (5 GHz) + 4x4:4 (6 GHz) — 12 spatial streams total — per Extreme AP5020 product specifications |
| Aggregate Throughput | 12.22 Gbps (2.4 GHz: 689 Mbps + 5 GHz: 5,765 Mbps + 6 GHz: 5,765 Mbps) — per Ruckus R770 published datasheet | Up to 20 Gbps — per Extreme AP5020 product specifications |
| 6 GHz Spatial Streams | 2 streams (2x2:2) — per Ruckus R770 published datasheet | 4 streams (4x4:4) — per Extreme AP5020 product specifications |
| Uplink Port(s) | 1x 10 GbE (1/2.5/5/10 GbE multi-gig) + 1x 1 GbE — per Ruckus R770 datasheet | 1x 10 GbE + 1x 5 GbE — per Extreme AP5020 product specifications |
| PoE Input | 802.3bt (PoE++) for full tri-band operation | Operational at 21W typical — 802.3at (PoE+) sufficient for full Wi-Fi functionality — per Extreme AP5020 specifications |
| Typical Power Draw | *per Ruckus R770 datasheet* | 21W typical — lowest reported among enterprise Wi-Fi 7 APs — per Extreme Networks product specifications |
| Concurrent Users | 1,024 — per Ruckus R770 datasheet | 512 per radio / 1,536 total — per Extreme AP5020 product specifications |
| Antenna Technology | BeamFlex+ adaptive antenna array; 4,000+ patterns per band; ChannelFly — per Ruckus R770 datasheet | Integrated tri-band antennas; OFDMA and MU-MIMO spatial reuse — per Extreme AP5020 product specifications |
| WIPS / Sensor Mode | Requires dedicated WIPS configuration; no built-in sensor-mode radio | Dedicated tri-frequency sensor mode (2.4/5/6 GHz) built into AP hardware — no external overlay required |
| Cloud Management | Ruckus One — subscription required per AP per year | ExtremeCloud IQ (Navigator / Pilot / CoPilot); Extreme Platform ONE |
| On-Premises Management | SmartZone (separate appliance or VM) — additional license and infrastructure cost | ExtremeCloud IQ Site Engine; ExtremeCloud IQ on-premises option |
| AIOps | Ruckus AI analytics (Ruckus One subscription) | CoPilot AIOps (GA): explainable anomaly detection, Digital Twin configuration validation, client experience insights |
| Warranty | Limited lifetime hardware; TAC and software updates require active subscription | Lifetime hardware warranty; software updates included |

### Design Description

For each location referencing the Ruckus R770 flagship Wi-Fi 7 access point, the Extreme AP5020 provides a direct and demonstrably stronger substitution on published throughput and spatial stream metrics. Per Ruckus's published R770 datasheet, the R770 delivers 12.22 Gbps aggregate and provides only 2 spatial streams in the 6 GHz band. The AP5020, per Extreme's published product specifications, delivers up to 20 Gbps aggregate with 4 spatial streams in 6 GHz — a 60% aggregate throughput advantage and double the 6 GHz spatial stream capacity on a per-datasheet basis. The District should verify both figures against the vendors' current datasheets prior to procurement.

At a typical draw of 21W, the AP5020 can be powered by existing 802.3at PoE+ switch infrastructure — eliminating the need for PoE++ switch upgrades in locations where the R770's higher power draw would otherwise require infrastructure changes. This power efficiency advantage directly reduces both capital and operational costs in a large-scale District deployment.

---

## Section 3 — Wi-Fi 7 Outdoor Access Point
### Ruckus T670 → Extreme AP5060U

### Solution Overview

For outdoor coverage requirements — athletic facilities, outdoor common areas, portable classroom courtyards, bus loading zones, and covered walkways — Extreme Networks proposes the **AP5060U** as a direct substitution for the Ruckus T670 outdoor Wi-Fi 7 access point. Both products are hardened outdoor tri-band Wi-Fi 7 (802.11be) access points designed for year-round exterior deployment in enterprise environments — a true like-for-like generation match.

The Extreme AP5060U is IP67-rated for complete dust and water immersion protection, delivers a quad-radio design with tri-band 4x4:4 MIMO across 2.4 GHz, 5 GHz, and 6 GHz plus a dedicated 2x2 tri-band sensor radio and dual IoT radios. It is rated for operation from -40°C to +60°C and delivers up to 23 Gbps aggregate Wi-Fi 7 throughput — more than double the T670's 9.34 Gbps. Per Extreme's product specifications, the AP5060U operates at full Wi-Fi performance on a standard 802.3at PoE+ port (typical 21W), with 802.3bt enabling PoE passthrough on ETH1.

### Key Design Features

**Simplicity in Deployment**
- IP67 weatherproof rating — complete protection against dust ingress and sustained water immersion; suitable for exposed outdoor mounting.
- -40°C to +60°C operating range covers the full range of North American school environments without environmental enclosure additions.
- Operates at full Wi-Fi performance on standard 802.3at PoE+ (typical 21W) — no PoE++ outdoor injector required; 802.3bt enables ETH1 PoE passthrough.
- Zero-touch provisioning through ExtremeCloud IQ — identical deployment process to indoor APs; no separate outdoor management workflow.

**Simplicity in Management**
- Outdoor and indoor APs managed from the same ExtremeCloud IQ dashboard — no separate outdoor controller or management system.
- Unified policy across all AP types: the same SSID, security, and VLAN policies applied to indoor APs extend automatically to outdoor APs.
- ExtremeCloud IQ CoPilot AIOps monitors outdoor APs alongside all other network devices — a single anomaly detection system for the entire campus.

**Simplicity in Performance**
- Quad-radio Wi-Fi 7 design: tri-band 4x4:4 MIMO (2.4/5/6 GHz) plus a dedicated 2x2 tri-band sensor — symmetric spatial stream configuration across all bands for consistent outdoor coverage with continuous WIPS at no throughput cost.
- Up to 23 Gbps aggregate Wi-Fi 7 throughput — versus 9.34 Gbps for the T670 — per Extreme AP5060U product specifications.
- Wi-Fi 7 OFDMA, MU-MIMO, and Multi-Link Operation (MLO) enable efficient multi-client service in outdoor high-density scenarios (stadium-style seating areas, graduation ceremonies, outdoor testing).
- Dual IoT radios (BLE/Zigbee/Thread) provide outdoor IoT sensor coverage for asset tracking and environmental monitoring.

### Feature Comparison Matrix

| Feature | Ruckus T670 | Extreme AP5060U |
|---|---|---|
| Wi-Fi Generation | Wi-Fi 7 (802.11be) — per Ruckus T670 product page | Wi-Fi 7 (802.11be) — per Extreme AP5060U product page |
| Radio / MIMO Configuration | Tri-band 2x2:2 (2.4 GHz + 5 GHz + 6 GHz) — per Ruckus T670 datasheet | Quad-radio: 4x4:4 (2.4 GHz) + 4x4:4 (5 GHz) + 4x4:4 (6 GHz) + dedicated 2x2 tri-band sensor; also supports dual-5 GHz and dual-6 GHz modes — per Extreme AP5060U product specifications |
| Aggregate Throughput | 9.34 Gbps (tri-band, US/Canada) — per Ruckus T670 datasheet | Up to 23 Gbps — per Extreme AP5060U product specifications |
| Spatial Streams | 6 streams (2+2+2) — per Ruckus T670 datasheet | 12 data streams (4+4+4) + 2-stream dedicated sensor — per Extreme AP5060U product specifications |
| Uplink Port(s) | 1x 1/2.5/5 GbE + 1x 1 GbE — per Ruckus T670 datasheet | ETH0: up to 10 GbE (PoE in); ETH1: up to 10 GbE (PoE in or 15.4W PSE out with 802.3bt on ETH0) — per Extreme AP5060U product specifications |
| PoE Input | 802.3bt (PoE++) for full tri-band operation | 802.3at (PoE+, typical 21W): full Wi-Fi performance; 802.3bt (max 28W): adds ETH1 PSE out — per Extreme AP5060U product specifications |
| Weatherproof Rating | IP67 — per Ruckus T670 product page | IP67 — per Extreme AP5060U product specifications |
| Operating Temperature | -40°C to +65°C — per Ruckus T670 datasheet (Ruckus +5°C advantage at upper range) | -40°C to +60°C — per Extreme AP5060U product specifications |
| Concurrent Users | 768 — per Ruckus T670 datasheet | *per Extreme AP5060U datasheet* |
| IoT Radios | 1x onboard IoT radio (BLE or Zigbee) — per Ruckus T670 datasheet | Dual integrated IoT radios (BLE/Zigbee/Thread) — per Extreme AP5060U product specifications |
| Cloud Management | Ruckus One — subscription required | ExtremeCloud IQ (cloud or on-premises); Extreme Platform ONE |
| On-Premises Management | SmartZone — additional appliance/VM and license required | ExtremeCloud IQ Site Engine; same management as indoor APs |
| Sensor / WIPS Mode | External WIPS configuration required; no dedicated always-on outdoor sensor radio | Dedicated hardware tri-band sensor (2.4/5/6 GHz) built in — continuous WIPS without repurposing a data radio — per Extreme AP5060U product specifications |
| Warranty | Limited lifetime hardware; TAC and software require active subscription | Lifetime hardware warranty; software updates included |

### Design Description

For each location referencing the Ruckus T670 outdoor Wi-Fi 7 access point, the Extreme AP5060U provides a direct Wi-Fi 7 substitution — same 802.11be generation — with a substantially stronger radio and throughput profile. The AP5060U's quad-radio design delivers up to 23 Gbps aggregate vs. the T670's 9.34 Gbps, and provides 12 spatial streams (4x4:4 per band) vs. the T670's 6 (2x2:2 per band), enabling significantly higher outdoor client density for scenarios such as graduation events, outdoor testing, athletic fields, and campus perimeter coverage.

Note: the T670's rated upper operating temperature is +65°C vs. the AP5060U's +60°C — a genuine 5-degree advantage for Ruckus in extreme-heat environments. For the majority of North American K-12 deployments this distinction is not operationally significant, but should be confirmed for sites in regions that regularly see sustained ambient temperatures above +55°C (e.g., desert Southwest without shade mounting). For such environments, verify local conditions against both products' rated specs before procurement.

Because the AP5060U is managed through the same ExtremeCloud IQ instance as all indoor APs and switches, outdoor locations are fully visible in the same operational dashboard — there is no separate outdoor management system to maintain. ExtremeCloud IQ CoPilot AIOps monitors outdoor APs alongside all wired and wireless devices for a unified campus operational view.

---

## Section 4 — Access Switch (PoE+)
### Ruckus ICX 8200 → Extreme 5320-48P-8XE

### Solution Overview

For campus access layer switching requirements where the Ruckus ICX 8200 series has been referenced, Extreme Networks proposes the **5320-48P-8XE** as a direct substitution. Both products are enterprise-class stackable access switches with full PoE+ support on all access ports, 10 GbE uplinks, and a stacking architecture designed for simplified management across multi-IDF school deployments.

The Extreme 5320-48P-8XE provides 48 PoE+ access ports with a 740W PoE budget (per switch), 8x 10 GbE SFP+ uplink/stacking ports, and a stacking capacity of up to 8 switches per stack at 40 Gbps per unit stacking bandwidth. It is fully managed through ExtremeCloud IQ, ExtremeCloud IQ Site Engine, or Extreme Platform ONE — the same management platform used for all Extreme APs and switches, providing true single-pane-of-glass visibility from access switch to wireless client.

### Key Design Features

**Simplicity in Deployment**
- Zero-touch provisioning through ExtremeCloud IQ — switches receive configuration automatically via DHCP/ZTP on first boot; no manual CLI staging required.
- When a new switch is added to a stack, it automatically inherits the stack's existing configuration and OS version — true plug-and-play stack expansion.
- Standard SFP+ optics or copper cables used for stacking — no proprietary stacking modules or cables required.
- 8x 10 GbE uplink/stacking ports on the 48P-8XE model — flexible port assignment between uplinks and stacking connections.

**Simplicity in Management**
- Up to 8 switches managed as a single logical stack — single IP address, single management view, single firmware update action.
- ExtremeCloud IQ Site Engine provides multi-vendor management capability — Extreme switches and third-party devices managed from the same console, unlike Ruckus SmartZone which is Ruckus-only.
- Unified wired and wireless policy: the same ExtremeCloud IQ instance managing the 5320 switches also manages all Extreme APs — VLANs, port policies, and user authentication policies applied consistently across wired and wireless.
- CoPilot AIOps provides AI-driven switch operations visibility alongside wireless analytics.

**Simplicity in Performance**
- Full PoE+ (802.3at, 30W) on all 48 access ports simultaneously — no port power derating under load; 740W total PoE budget per switch (double the ICX 8200-48P's 370W).
- PoE++ (802.3bt, 60/90W) available on multi-gigabit port variants within the 5320 family for high-power device requirements.
- 40 Gbps per-unit stacking bandwidth supports full line-rate traffic across stack members.
- Advanced L3 routing (OSPF, VRRP, VRF, VXLAN) available without separate licensing on the 5320 series.

### Feature Comparison Matrix

| Feature | Ruckus ICX 8200 Series | Extreme 5320-48P-8XE |
|---|---|---|
| Access Ports | Up to 48 x 1 GbE RJ-45 (series max) — per Ruckus ICX 8200 product page | 48 x 1 GbE RJ-45 PoE+ — per Extreme 5320-48P-8XE product specifications |
| PoE Standard | 802.3at PoE+ (30W) on all 48 ports (ICX 8200-48P); 802.3bt (60/90W) available only on multigig variants (8200-24ZP, 8200-48ZP2) — per Ruckus ICX 8200 datasheet | 802.3at PoE+ (30W) on all 48 ports — per Extreme 5320-48P-8XE product specifications |
| Total PoE Budget | 370W (ICX 8200-48P, single PSU, PoE+/802.3at only) — per Ruckus ICX 8200 datasheet; series max up to 1,480W applies only to dual-PSU multigig variants (8200-48ZP2, 8200-24ZP) | 740W — per Extreme 5320-48P-8XE product specifications |
| Uplink / Stacking Ports | 4x 1/10/25 GbE SFP28 (ICX 8200-48P); stacking at 10G or 25G — per Ruckus ICX 8200 datasheet | 8x 10 GbE SFP+ (uplink and/or stacking) — per Extreme 5320-48P-8XE product specifications |
| Stacking Capacity | Up to 12 switches per stack; 1,200 Gbps aggregate stack bandwidth — per Ruckus ICX 8200 product page | Up to 8 switches per stack; 40 Gbps per unit stacking bandwidth — per Extreme 5320 product specifications |
| Switching Capacity | 296 Gbps (ICX 8200-48P); series max 720 Gbps on ICX 8200-24FX — per Ruckus ICX 8200 datasheet | 256 Gbps / 190.5 Mpps — per Extreme 5320-48P-8XE datasheet |
| L3 Routing | Advanced L3 (static, RIP, OSPF, VRRP, VRF, GRE, PIM, PBR, VXLAN) — per Ruckus ICX 8200 product page | Advanced L3 (static, OSPF, VRRP, VRF, VXLAN) — per Extreme 5320 product specifications |
| Multi-Gig Ports | 1/2.5/5/10 GbE RJ-45 available on select ICX 8200 variants — per Ruckus product page | Multi-gig 1/2.5/5 GbE variants available within 5320 family — per Extreme 5320 product specifications |
| Auto-Configuration / ZTP | Zero-touch provisioning supported via Ruckus One — per Ruckus ICX 8200 product page | Zero-touch provisioning via ExtremeCloud IQ and ExtremeCloud IQ Site Engine |
| Cloud Management | Ruckus One (cloud only — separate from SmartZone) | ExtremeCloud IQ — same instance manages APs and switches together |
| On-Premises Management | SmartZone; RUCKUS-only devices supported | ExtremeCloud IQ Site Engine — supports multi-vendor device management (Extreme and third-party) |
| Warranty | Limited lifetime hardware; 3 years TAC included — per Ruckus ICX 8200 product page | Lifetime hardware warranty; software updates included — per Extreme Networks warranty policy |

### Design Description

For each IDF closet referencing the Ruckus ICX 8200 access switch, the Extreme 5320-48P-8XE provides a direct port-for-port substitution with 48 PoE+ access ports and 8 SFP+ uplink/stacking ports. The 5320-48P-8XE delivers a 740W PoE budget — double the ICX 8200-48P's 370W — enabling more APs and powered devices per switch without hitting power budget limits. The 5320 stack architecture supports up to 8 units per stack with 40 Gbps per-unit stacking bandwidth — sufficient for all-active, STP-free redundant uplinks to the District's distribution and core layers.

A key operational advantage is management unification: the same ExtremeCloud IQ instance that manages all Extreme access points also manages the 5320 switches, eliminating the need for a separate network management appliance for wired infrastructure. The ExtremeCloud IQ Site Engine further extends management to third-party devices already on the District's network — unlike Ruckus SmartZone, which is limited to Ruckus equipment. When a new 5320 joins an existing stack, it automatically inherits the stack configuration and OS version with no manual intervention, enabling the District to expand access layer capacity at any IDF without a networking engineer on-site for staging.

---

## Section 5 — PoE++ Multi-Gig Access Switch
### Ruckus ICX 7550-48ZP → Extreme 5720-48MXW

### Solution Overview

For high-density locations requiring multi-gigabit PoE++ access switching — media centers, computer labs, faculty office areas, server rooms, and facilities deploying high-power Wi-Fi 7 APs — Extreme Networks proposes the **5720-48MXW** as a direct substitution for the Ruckus ICX 7550-48ZP. Both products are enterprise-class stackable access switches with multi-gigabit port configurations and 802.3bt PoE++ support.

The Extreme 5720-48MXW delivers 48 multi-gigabit access ports (100 Mb/1G/2.5G/5G/10G per port), up to 90W PoE++ per port (802.3bt), modular uplink choices of 6x 25 GbE or 2x 100 GbE, and a 400 Gbps per-unit stacking bandwidth. This provides the wired infrastructure backbone required to fully support a dense Wi-Fi 7 deployment — each multi-gig port can natively backhaul a directly-connected AP5020 at its full 10 GbE uplink capacity.

### Key Design Features

**Simplicity in Deployment**
- Zero-touch provisioning through ExtremeCloud IQ — identical deployment process to the 5320 series; no separate provisioning workflow for high-power switches.
- Modular uplink flexibility: choose between 6x 25 GbE SFP28 or 2x 100 GbE QSFP28 depending on distribution layer connectivity — no re-purchase of the base unit required to change uplink speed.
- When added to an existing 5720 stack, new units inherit configuration and OS automatically — plug-and-play stack expansion.

**Simplicity in Management**
- Up to 8 switches per stack managed as a single logical unit — single IP, single firmware image, single configuration point.
- 400 Gbps per-unit stacking bandwidth — supports full line-rate operation across all 48 multi-gig access ports without congestion.
- Same ExtremeCloud IQ management instance as all other Extreme switches and APs — wired and wireless managed in a unified console.
- CoPilot AIOps and Digital Twin available for switch operations — configuration change validation before push to production.

**Simplicity in Performance**
- 90W PoE++ (802.3bt) on all 48 ports — sufficient to power high-wattage devices including pan-tilt-zoom cameras, large displays, digital signage, and next-generation APs at full power.
- 100 Mb/1G/2.5G/5G/10G per access port — native multi-gig connectivity eliminates the 1 GbE bottleneck that limits single-gig access switches in high-throughput AP deployments.
- 100 GbE uplink option provides future-proof capacity for high-bandwidth distribution core connections.

### Feature Comparison Matrix

| Feature | Ruckus ICX 7550-48ZP | Extreme 5720-48MXW |
|---|---|---|
| Access Ports | 48 — per Ruckus ICX 7550 product page (48-port variant) | 48 x 100Mb/1G/2.5G/5G/10G multi-gig — per Extreme 5720 product specifications |
| Multi-Gig Ports | 36 x 1/2.5G + 12 x 1/2.5/5/10G (ICX 7550-48ZP — only 12 of 48 ports reach 10G; remaining 36 cap at 2.5G) — per Ruckus ICX 7550 technical specs | All 48 ports: 100Mb/1G/2.5G/5G/10G — every port full 10G multi-gig — per Extreme 5720-48MXW product specifications |
| PoE Standard | 802.3bt (PoE++, up to 90W per port) — per Ruckus ICX 7550 product page | 802.3bt (PoE++, up to 90W per port) — per Extreme 5720 product specifications |
| Total PoE Budget | Up to 2,000W with dual PSUs — per Ruckus ICX 7550 product page | Voltage-dependent: 835W (110V, 1×2000W PSU) to 3,535W (220V, 2×2000W PSUs) — per Extreme 5720-48MXW datasheet |
| Uplink Ports | Up to 4x 40 GbE QSFP — per Ruckus ICX 7550 product page | Choice of 6x 1G/10G/25G SFP28 or 2x 100G QSFP28 modular — per Extreme 5720 product specifications |
| Stacking Capacity | Up to 12 switches per stack; 1,020 Gbps total switching — per Ruckus ICX 7550 product page | Up to 8 switches per stack; 400 Gbps per-unit stacking bandwidth — per Extreme 5720 product specifications |
| Switching Capacity | 1,020 Gbps — per Ruckus ICX 7550 product page | 1,760 Gbps / 810 Mpps — per Extreme 5720-48MXW datasheet |
| Cloud Management | Ruckus One — subscription required | ExtremeCloud IQ — same instance manages APs and switches |
| On-Premises Management | SmartZone — Ruckus devices only | ExtremeCloud IQ Site Engine — multi-vendor support |
| Unified Wired/Wireless Mgmt | Ruckus One manages both ICX switches and Ruckus APs | ExtremeCloud IQ manages Extreme 5720 switches and all Extreme APs from one console with unified policy |
| AIOps for Switching | Ruckus AI analytics (Ruckus One) | CoPilot AIOps: AI-driven switch anomaly detection and Digital Twin configuration validation |
| Warranty | Limited lifetime hardware; TAC requires active subscription | Lifetime hardware warranty; software updates included |

### Design Description

For each location referencing the Ruckus ICX 7550-48ZP multi-gig PoE++ access switch, the Extreme 5720-48MXW provides a direct substitution with full 10G-capable multi-gig ports on all 48 access connections — eliminating the port-speed bottleneck for every connected device. The ICX 7550-48ZP delivers 10G on only 12 of its 48 ports; the remaining 36 ports cap at 2.5G. The 5720-48MXW provides full 100M/1G/2.5G/5G/10G on all 48 ports, making it the stronger choice for locations deploying high-density Wi-Fi 7 APs at their full backhaul capability. The 5720-48MXW also operates at 0°C to +50°C versus the ICX 7550-48ZP's 0°C to +40°C — a 10-degree wider operating window relevant for non-climate-controlled IDF closets.

The 5720-48MXW's modular uplink design — with the choice of 6x 25 GbE or 2x 100 GbE — provides genuine future-proofing for the District's distribution layer. As the number of multi-gig endpoints and high-throughput APs grows, the uplink capacity can be scaled without replacing the access switch hardware. The 400 Gbps per-unit stacking bandwidth ensures that a full 8-unit stack operates without internal congestion, and with ExtremeCloud IQ managing both the 5720 switches and all Extreme APs from a single console, the District gains complete wired-to-wireless visibility from a single pane of glass.

---

## Section 6 — On-Premises Network Management
### Ruckus SmartZone → ExtremeCloud IQ Site Engine

### Solution Overview

For Districts requiring on-premises network management — whether due to data sovereignty policy, regulatory requirements, limited WAN bandwidth, or a preference for local control — Extreme Networks proposes **ExtremeCloud IQ Site Engine** as a direct substitution for the Ruckus SmartZone on-premises controller platform. Both products provide on-premises network visibility, configuration management, and policy enforcement for enterprise wireless and switching infrastructure.

ExtremeCloud IQ Site Engine (XIQ-SE) extends significantly beyond SmartZone's wireless-centric management model by providing true multi-vendor network management — supporting Extreme Networks switches and APs alongside documented third-party network devices from a single interface. For a District with an existing mixed-vendor network, XIQ-SE provides a single management platform that grows with the network, rather than requiring a separate management system for each vendor. XIQ-SE is a key differentiator noted in Extreme's competitive positioning: it is one of the few enterprise NMS platforms that provides documented multi-vendor management capability with full policy enforcement.

### Key Design Features

**Simplicity in Deployment**
- Available as a virtual appliance (VM) or physical appliance — flexible deployment on existing District server infrastructure.
- Zero-touch provisioning for Extreme APs and switches through XIQ-SE — new devices auto-claim and receive configuration on first boot.
- Manages both wired and wireless infrastructure from a single application — no separate wireless controller and NMS required.

**Simplicity in Management**
- Multi-vendor management capability — XIQ-SE supports Extreme Networks devices and documented third-party network equipment from a single console. SmartZone manages Ruckus devices only.
- Unified wired and wireless policy: the same user authentication, VLAN, and security policies applied consistently across all Extreme switches and APs through a single policy engine.
- ExtremeControl (NAC) integration provides onboarding, authentication, and segmentation for all device types — Chromebooks, tablets, IoT devices, and staff laptops — with policy applied automatically at the port or SSID level.
- Configuration and firmware management across all devices from a single interface — bulk upgrades, scheduled maintenance windows, and configuration rollback supported.

**Simplicity in Scale**
- SmartZone scales to 30,000 APs and 450,000 clients per cluster — per Ruckus SmartZone product page. XIQ-SE scale specifications are available from Extreme Networks per deployment requirements.
- XIQ-SE supports hybrid management alongside ExtremeCloud IQ — the District can use on-premises XIQ-SE for primary management while ExtremeCloud IQ provides a cloud-based backup view, with no duplicate licensing or hardware required.

### Feature Comparison Matrix

| Feature | Ruckus SmartZone | ExtremeCloud IQ Site Engine |
|---|---|---|
| Deployment Model | Physical appliance or virtual appliance; cloud-hosted option — per Ruckus SmartZone product page | Virtual appliance (VMware ESXi, Hyper-V, Nutanix AHV, RHEL bare metal, Extreme Universal Compute Platform) — no dedicated proprietary hardware appliance SKU; hybrid (on-prem + cloud) option — per Extreme XIQ-SE deployment guide |
| Scale (APs) | Up to 30,000 APs per cluster — per Ruckus SmartZone product page | Up to 25,000 APs on Enterprise sizing (24-core / 64GB RAM VM) — per Extreme XIQ-SE deployment guide |
| Scale (Switches) | Up to 3,750 switches per cluster — per Ruckus SmartZone product page | *per Extreme XIQ-SE deployment guide — contact Extreme for current sizing* |
| Multi-Vendor Support | Ruckus devices only | Extreme Networks devices + documented third-party support — per Extreme XIQ-SE product specifications |
| Wired + Wireless | Manages Ruckus APs and ICX switches from unified console — per Ruckus product page | Manages Extreme APs, Extreme switches, and third-party devices from unified console |
| Zero-Touch Provisioning | Supported for Ruckus APs and switches — per Ruckus SmartZone product page | Supported for all Extreme APs and switches via XIQ-SE |
| REST / JSON API | Extensive REST/JSON APIs — per Ruckus SmartZone product page | REST API available — per Extreme XIQ-SE specifications |
| NAC Integration | Cloudpath (separate product) for NAC — per Ruckus product portfolio | ExtremeControl NAC integrated — native port and SSID policy enforcement with automated device onboarding |
| Guest Access | Secure guest network access through SmartZone — per Ruckus product page | ExtremeGuest integrated with XIQ Site Engine; customizable captive portal |
| Firmware Management | Automatic firmware updates across AP and switch infrastructure — per Ruckus SmartZone product page | Bulk firmware management across all devices; scheduled update windows supported |
| Cloud Hybrid Option | Cloud and on-prem are separate platforms; requires separate migration | XIQ-SE and ExtremeCloud IQ can operate in hybrid mode on the same device fleet |
| Licensing | Perpetual license model historically available; new deployments increasingly directed toward Ruckus One subscription — per CommScope product guidance (subject to change under Belden) | Subscription-only; requires ExtremeCloud IQ Pilot or Navigator tier (Connect NOT supported); per-device subscription — per Extreme Networks XIQ-SE licensing guide |

### Design Description

For Districts that require on-premises network management, ExtremeCloud IQ Site Engine provides the most direct substitution for Ruckus SmartZone — with the added advantage of multi-vendor management capability that SmartZone does not offer. For a District with an existing mixed-vendor network, XIQ-SE provides a single management platform for the entire estate: Extreme APs, Extreme switches, and documented third-party devices managed from one console, with consistent policy enforcement across wired and wireless.

The integration of ExtremeControl NAC within XIQ-SE is a significant operational simplification over the Ruckus model, where Cloudpath is a separate product requiring separate licensing, separate management, and separate integration work. With ExtremeControl, the District's device onboarding, authentication, and segmentation policies for Chromebooks, tablets, staff devices, and IoT are all managed within the same XIQ-SE console — with port-level and SSID-level policy applied automatically at connection time.

**M&A Continuity Note:** Ruckus SmartZone licensing and roadmap commitments are made under the current Vistance Networks organizational structure. Post-Belden close (expected 2H 2026), neither the SmartZone licensing model nor the perpetual-to-subscription transition timeline has been confirmed. Districts entering long-term SmartZone commitments should obtain written assurance on license portability and roadmap continuity from Ruckus prior to procurement.

---

## Section 7 — Cloud Network Management
### Ruckus One → ExtremeCloud IQ

### Solution Overview

For Districts adopting cloud-managed networking — or for those augmenting on-premises management with cloud visibility — Extreme Networks proposes **ExtremeCloud IQ** as a direct substitution for Ruckus One. Both platforms are AI-enhanced cloud management services providing unified management for wireless access points and wired switches, with machine learning-driven analytics and automated recommendations for network optimization.

ExtremeCloud IQ delivers three licensing tiers — Navigator (base), Pilot (adds ExtremeGuest, ExtremeAirDefense, and ExtremeLocation), and CoPilot (adds advanced AIOps with anomaly detection and enhanced client experience analytics) — providing a clear capability path from entry-level management to full AI-operations. All three tiers manage the same AP and switch hardware, allowing the District to start with Navigator and upgrade to CoPilot analytics without any hardware replacement. The emerging Extreme Platform ONE, including Digital Twin and the forthcoming Agent ONE autonomous operations layer, is the evolution of ExtremeCloud IQ for Districts looking at a long-term AI-driven operations roadmap.

### Key Design Features

**Simplicity in Deployment**
- Near zero-touch auto-provisioning — APs and switches claim to ExtremeCloud IQ automatically on first power-up; no staging or pre-configuration required.
- Mobile companion app with QR/barcode device onboarding — field technicians can onboard new devices without a laptop or CLI access.
- Full-stack provisioning: the same ExtremeCloud IQ instance manages APs, switches, and SD-WAN from a single cloud instance.

**Simplicity in Management**
- Machine learning-driven visual dashboards for location, device, and user health — "explainable ML" algorithms show the reasoning behind recommendations, not just alert outputs.
- Application usage visibility — identifies professional and recreational app usage by device, SSID, and location; enables policy-based control.
- CoPilot AIOps tier: advanced anomaly detection with multi-level dynamic baselining; alerts include root-cause explanation and recommended remediation action.
- Digital Twin (GA): pre-deployment simulation of firmware updates and configuration changes in a virtual environment before applying to production.
- MSP portal (msp.extremecloudiq.com) for multi-site, multi-tenant management — suitable for Districts managing multiple school campuses as separate management domains.

**Simplicity in Performance and Security**
- ExtremeAirDefense (Pilot tier and above) provides cloud-based WIPS monitoring — rogue AP detection, over-the-air threat identification, and compliance reporting.
- ExtremeLocation (Pilot tier and above) provides location analytics — suitable for Districts tracking asset location or analyzing traffic flow in large facilities.
- ISO 27701 Privacy Information Management certification (Extreme Networks) — the only enterprise networking vendor with this certification, providing documented compliance with GDPR and CCPA privacy requirements. Relevant for Districts subject to FERPA, COPPA, and state student data privacy laws.
- Compliance reporting capabilities for regulatory and audit requirements.

### Feature Comparison Matrix

| Feature | Ruckus One | ExtremeCloud IQ |
|---|---|---|
| Deployment Model | Cloud (SaaS) — per Ruckus One product page | Cloud (SaaS), on-premises, or hybrid — same hardware, switchable management mode |
| Wired + Wireless | Manages Ruckus APs and ICX switches — per Ruckus One product page | Manages Extreme APs, Extreme switches, and SD-WAN from single cloud instance |
| AI / ML Analytics | AI-driven analytics; AI-generated recommendations; issue severity classification — per Ruckus One product page | Explainable ML algorithms (transparent reasoning); CoPilot anomaly detection with dynamic baselining; client experience insights |
| AIOps | Ruckus AI (Ruckus One subscription) | CoPilot AIOps tier: advanced anomaly detection, root-cause explanation, 30–50% MTTR reduction target |
| Digital Twin | Not documented in public Ruckus One specifications | Digital Twin (GA): pre-deployment simulation of configuration and device changes before applying to production |
| Autonomous Operations | AI recommendations; DSE AI assistant (2025) | Agent ONE roadmap: Coworker mode (Q3 2026), Operator mode (Q4 2026) — governed autonomous operations |
| WIPS / Air Defense | Requires WIPS service configuration | ExtremeAirDefense included in Pilot tier — cloud-based WIPS, rogue detection, compliance reporting |
| Location Services | *per Ruckus One product specifications* | ExtremeLocation included in Pilot tier — asset and traffic analytics |
| Guest Management | Secure guest network access — per Ruckus One product page | ExtremeGuest included in Pilot tier — customizable captive portal, social login, sponsored access |
| Privacy Certification | Not documented in public Ruckus One specifications | ISO 27701 Privacy Information Management (PIIM) certified — only enterprise networking vendor with this certification; GDPR/CCPA alignment |
| MSP / Multi-Tenant | Ruckus One MSP Portal with delegated accounts; AI-powered DSE assistant — per Ruckus One product page | msp.extremecloudiq.com — multi-site, multi-tenant management; license and performance monitoring across all clients |
| Licensing Model | Network management as-a-service; ~$150/AP/yr cloud subscription (per market data) | Navigator / Pilot / CoPilot subscription tiers — hardware license included with XIQ subscription (per Extreme pricing data) |
| Free / Trial Tier | Trial available — per Ruckus One product page | Trial available — per Extreme Networks product page |
| On-Prem Option | SmartZone (separate platform, separate management interface) | XIQ on-premises or XIQ Site Engine — same management interface as cloud; hybrid supported simultaneously |

### Design Description

ExtremeCloud IQ provides a direct, cloud-for-cloud substitution for Ruckus One with several meaningful advantages for K-12 and higher education Districts. The three-tier licensing structure (Navigator, Pilot, CoPilot) gives Districts the flexibility to start at a base management level and add AIOps, WIPS, location services, and guest management capabilities as the organization's needs and budget grow — without any hardware replacement.

For Districts operating in environments subject to student data privacy regulation (FERPA, COPPA, state privacy laws), Extreme's ISO 27701 Privacy Information Management certification provides a documented, auditable privacy compliance posture for the cloud management platform — an increasingly common procurement requirement that Ruckus One does not currently match with an equivalent certification. The Digital Twin capability and forthcoming Agent ONE autonomous operations layer position ExtremeCloud IQ as a management platform with a credible multi-year AI operations roadmap, providing the District with long-term investment protection in their network management infrastructure.

**M&A Continuity Note:** Ruckus One is the strategic cloud management investment area for Ruckus's current ownership. Belden has not publicly disclosed integration plans for Ruckus One post-close (expected 2H 2026). Districts entering multi-year Ruckus One subscriptions should obtain written confirmation that the platform's roadmap, SLAs, and pricing structure will be honored under post-close ownership.

---

## Conclusion

Extreme Networks provides a complete, end-to-end substitution for the Ruckus network infrastructure referenced in this document, with all three wireless access points matched to Extreme Wi-Fi 7 (802.11be) equivalents: the AP5022 (R670 mid-tier), AP5020 (R770 flagship), and AP5060U (T670 outdoor). Every AP comparison in this document is a like-for-like Wi-Fi 7 to Wi-Fi 7 substitution. The AP5020's 20 Gbps aggregate throughput and 4x4:4 MIMO in 6 GHz represent a documented performance advantage over the R770's 12.22 Gbps aggregate and 2x2 6 GHz radio per published datasheets. The AP5060U's 23 Gbps Wi-Fi 7 outdoor capability — more than double the T670's 9.34 Gbps — delivers superior outdoor throughput and spatial stream capacity for high-density campus environments. The 5720-48MXW's all-port multi-gig architecture and 5320-48P-8XE's 740W PoE budget ensure that the wired access layer fully supports the District's Wi-Fi 7 investment. And ExtremeCloud IQ Site Engine's multi-vendor management capability — absent from Ruckus SmartZone — provides a single management console that serves both the new Extreme infrastructure and any existing third-party network equipment in the District.

The core differentiator across this entire solution is management flexibility and investment protection. Extreme Networks provides a single hardware platform that can be managed cloud-first, on-premises, or in a hybrid model — with no hardware swap when the District's management strategy evolves. Combined with a lifetime hardware warranty, included software updates, CoPilot AIOps, Digital Twin, and the forthcoming Agent ONE autonomous operations platform, the Extreme Networks solution presented in this document represents a strong, defensible, and forward-looking alternative to the Ruckus portfolio for *(Customer / School District Name)*.

**The vendor-stability dimension makes this argument particularly time-sensitive.** As documented in Section 0, Ruckus is in an active acquisition by Belden Inc., with close expected in the second half of 2026 and a multi-year integration overhang to follow. The combination of unresolved brand identity, unconfirmed product roadmap, potential strategic drift toward industrial/OT verticals, and the historical pattern of ownership volatility (five corporate parents in under a decade) introduces procurement risk that did not exist when many existing Ruckus customers originally selected the platform. Extreme Networks — publicly traded and independent since 1999, with continuous strategic focus on enterprise networking and education — provides the stability profile this multi-year infrastructure commitment requires.

---

*Specification Sources and Disclaimer: All product specifications cited in this document are sourced from publicly available vendor datasheets and product pages as of May 2026. Ruckus specifications are sourced from ruckusnetworks.com product pages and published datasheets. Extreme Networks specifications are sourced from extremenetworks.com product pages and the Competitive Dashboard internal reference (version May 2026). Specifications marked [per Extreme datasheet] or [per Ruckus datasheet] indicate values sourced directly from official published documentation. Specifications marked with [per Extreme product specifications] indicate values sourced from Extreme Networks product pages, which should be verified against current datasheets before procurement. Cells marked [per vendor datasheet] without a value are placeholders where the specification was not available from public sources at time of authorship and should be filled in from current vendor documentation prior to customer distribution. All prices referenced are list prices from market data as of May 2026 and are subject to change. M&A facts in Section 0 are sourced from: Belden Inc. investor release (2026-04-30); SDxCentral; Light Reading; Pulse 2.0; Alston & Bird (Vistance counsel). This document is prepared for informational and competitive comparison purposes; the buyer should verify all specifications and pricing with the respective vendor prior to procurement decisions.*

---

## Related

- [[Ruckus - CommScope]] — vendor note (updated with Belden M&A status)
- [[vs Ruckus - CommScope]] — battle card
- [[Extreme Networks]] — primary vendor note
- [[Competitive Replacements]] — full vendor replacement matrix
- [[Wireless]], [[Switching]], [[Management]] — category overviews
- [[TCO Comparison]], [[Value Scores]] — financial analyses
- [[00 Index]] — vault index

## Source

- v2 markdown source: `/Users/jsaarikko/Ruckus-Substitution-v2.md`
- Original PDF: `/Users/jsaarikko/Downloads/Ruckus-Substitution-and-Solution-Overview.pdf` (May 2026, 38 pages)
- Pre-M&A version: see PDF; this v2 adds Section 0 (Vendor Stability & Strategic Risk) and updates ownership references throughout
