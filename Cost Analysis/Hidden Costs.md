---
tags: [cost-analysis]
---
# Hidden Costs

Per-vendor breakdown of hidden and indirect costs.

## Extreme Networks

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $2,000-$5,000 | LOW |
| Professional Services | $5,000-$20,000 | LOW |
| Migration Complexity | Low | LOW |
| Multi-Platform Tax | None | LOW |
| License True-Up Surprises | None | LOW |
| Vendor Lock-In Risk | Low | LOW |

- **Training & Certification** ($2,000-$5,000, LOW): Free online training via Extreme Academy. Optional paid certifications.
- **Professional Services** ($5,000-$20,000, LOW): Simpler fabric deployment reduces PS needs. ZTP for most deployments.
- **Migration Complexity** (Low, LOW): Universal hardware means no hardware swap when changing mgmt modes.
- **Multi-Platform Tax** (None, LOW): Single unified platform. No Catalyst-vs-Meraki decision paralysis.
- **License True-Up Surprises** (None, LOW): Navigator is free. Clear per-device pricing at Pilot/CoPilot tiers.
- **Vendor Lock-In Risk** (Low, LOW): Open standards (SPB, LLDP-MED, OpenConfig). Hardware works without cloud.

## Cisco

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $5,000-$25,000 | HIGH |
| Professional Services | $30,000-$100,000+ | HIGH |
| Migration Complexity | High | HIGH |
| Multi-Platform Tax | $50,000-$200,000 | HIGH |
| License True-Up Surprises | $20,000-$50,000/yr | MEDIUM |
| Vendor Lock-In Risk | Very High | HIGH |

- **Training & Certification** ($5,000-$25,000, HIGH): CCNA/CCNP required. Extensive training ecosystem — and expectation. DNA Center has steep learning curve.
- **Professional Services** ($30,000-$100,000+, HIGH): SD-Access deployments typically require Cisco or partner PS. Complex architecture.
- **Migration Complexity** (High, HIGH): Migrating from IOS to IOS-XE, or between Catalyst/Meraki, is a major project.
- **Multi-Platform Tax** ($50,000-$200,000, HIGH): Catalyst + Meraki = two separate platforms, dashboards, training, and license models in one company.
- **License True-Up Surprises** ($20,000-$50,000/yr, MEDIUM): DNA license tiers confusing. Essentials vs Advantage vs Premier. Smart Licensing audits.
- **Vendor Lock-In Risk** (Very High, HIGH): ISE, TrustSec, SD-Access, DNAC deeply proprietary. Migration cost grows exponentially with depth.

## Meraki

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $1,000-$3,000 | LOW |
| Professional Services | $5,000-$15,000 | LOW |
| Migration Complexity | Very High | HIGH |
| Multi-Platform Tax | Moderate | MEDIUM |
| License True-Up Surprises | $10,000-$30,000/yr | HIGH |
| Vendor Lock-In Risk | Extreme | HIGH |

- **Training & Certification** ($1,000-$3,000, LOW): Simple platform. Meraki Solutions Specialist relatively easy.
- **Professional Services** ($5,000-$15,000, LOW): Simple deployments, but limited customization when you hit walls.
- **Migration Complexity** (Very High, HIGH): Cloud-only. Moving away = 100% hardware forklift. Zero hardware reuse.
- **Multi-Platform Tax** (Moderate, MEDIUM): If org also runs Catalyst, two completely separate ecosystems to manage.
- **License True-Up Surprises** ($10,000-$30,000/yr, HIGH): License expiry = hardware bricks. Renewal pricing can increase. Auto-renewal traps.
- **Vendor Lock-In Risk** (Extreme, HIGH): Most locked-in platform in the industry. No config export, no on-prem fallback, no hardware reuse.

## Aruba

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $3,000-$10,000 | MEDIUM |
| Professional Services | $15,000-$50,000 | MEDIUM |
| Migration Complexity | Medium | MEDIUM |
| Multi-Platform Tax | Low | LOW |
| License True-Up Surprises | $5,000-$15,000/yr | MEDIUM |
| Vendor Lock-In Risk | Medium | MEDIUM |

- **Training & Certification** ($3,000-$10,000, MEDIUM): Aruba certifications. ClearPass requires specialized training.
- **Professional Services** ($15,000-$50,000, MEDIUM): Dynamic Segmentation and ClearPass deployments often need PS.
- **Migration Complexity** (Medium, MEDIUM): AOS-CX is modern and standards-based. Reasonable migration path.
- **Multi-Platform Tax** (Low, LOW): Unified Aruba Central for wired + wireless + WAN.
- **License True-Up Surprises** ($5,000-$15,000/yr, MEDIUM): Foundation vs Advanced tier confusion. ClearPass licensing separate.
- **Vendor Lock-In Risk** (Medium, MEDIUM): ClearPass creates stickiness. HPE acquisition adds uncertainty. But AOS-CX is open.

## Juniper - Mist

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $5,000-$15,000 | MEDIUM |
| Professional Services | $10,000-$40,000 | MEDIUM |
| Migration Complexity | Medium | MEDIUM |
| Multi-Platform Tax | Low | LOW |
| License True-Up Surprises | $3,000-$10,000/yr | LOW |
| Vendor Lock-In Risk | Medium | MEDIUM |

- **Training & Certification** ($5,000-$15,000, MEDIUM): Junos certification track. Mist is simpler but Junos CLI has learning curve.
- **Professional Services** ($10,000-$40,000, MEDIUM): EVPN-VXLAN fabric can require PS. Mist wireless is simpler.
- **Migration Complexity** (Medium, MEDIUM): Standard Junos configs. EVPN-VXLAN is industry-standard. Good secondary market.
- **Multi-Platform Tax** (Low, LOW): Unified Mist cloud for all Juniper networking.
- **License True-Up Surprises** ($3,000-$10,000/yr, LOW): Clean per-device subscription. Marvis included. Predictable billing.
- **Vendor Lock-In Risk** (Medium, MEDIUM): Mist cloud dependency. But Junos is standards-based and hardware retains value.

## Fortinet

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $3,000-$12,000 | MEDIUM |
| Professional Services | $10,000-$30,000 | MEDIUM |
| Migration Complexity | Medium-High | MEDIUM |
| Multi-Platform Tax | Low | LOW |
| License True-Up Surprises | $5,000-$20,000/yr | MEDIUM |
| Vendor Lock-In Risk | Medium-High | MEDIUM |

- **Training & Certification** ($3,000-$12,000, MEDIUM): NSE certification track. FortiGate expertise widely available.
- **Professional Services** ($10,000-$30,000, MEDIUM): Security Fabric integration can require PS for complex deployments.
- **Migration Complexity** (Medium-High, MEDIUM): Tightly integrated stack. Replacing FortiGate may cascade to FortiSwitch, FortiAP, FortiNAC.
- **Multi-Platform Tax** (Low, LOW): Single Security Fabric. But need FortiManager + FortiAnalyzer + FortiGate = multi-box.
- **License True-Up Surprises** ($5,000-$20,000/yr, MEDIUM): FortiGuard bundle confusion. UTM vs ATP vs Enterprise bundles. Renewal price increases.
- **Vendor Lock-In Risk** (Medium-High, MEDIUM): Security Fabric interdependency. Switching one component may require switching all.

## Ruckus - CommScope

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $2,000-$8,000 | MEDIUM |
| Professional Services | $5,000-$20,000 | LOW |
| Migration Complexity | Medium | MEDIUM |
| Multi-Platform Tax | Moderate | MEDIUM |
| License True-Up Surprises | $3,000-$8,000/yr | LOW |
| Vendor Lock-In Risk | Medium-Low | LOW |

- **Training & Certification** ($2,000-$8,000, MEDIUM): Ruckus certifications. Platform transition (SmartZone → Ruckus One) requires retraining.
- **Professional Services** ($5,000-$20,000, LOW): Straightforward deployments. Strong wireless expertise in channel.
- **Migration Complexity** (Medium, MEDIUM): CommScope restructuring creates platform uncertainty. SmartZone to Ruckus One migration.
- **Multi-Platform Tax** (Moderate, MEDIUM): No SD-WAN — need third-party solution for WAN. Two management planes.
- **License True-Up Surprises** ($3,000-$8,000/yr, LOW): Simple cloud pricing. SmartZone perpetual option provides predictability.
- **Vendor Lock-In Risk** (Medium-Low, LOW): Standard hardware. SmartZone perpetual option. But CommScope future strategy unclear.

## Ubiquiti

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $0 | LOW |
| Professional Services | $0-$5,000 | LOW |
| Migration Complexity | Low | LOW |
| Multi-Platform Tax | None | LOW |
| License True-Up Surprises | None | LOW |
| Vendor Lock-In Risk | Low | LOW |

- **Training & Certification** ($0, LOW): No formal training. Community resources only. Simple platform.
- **Professional Services** ($0-$5,000, LOW): No vendor PS. Independent installers. Simple deployments.
- **Migration Complexity** (Low, LOW): Low-cost hardware. Easy to rip and replace due to low sunk cost.
- **Multi-Platform Tax** (None, LOW): Unified UniFi ecosystem. But missing enterprise features forces third-party additions.
- **License True-Up Surprises** (None, LOW): No licenses = no surprises. But also no vendor support when things break.
- **Vendor Lock-In Risk** (Low, LOW): Low cost = low switching cost. But no enterprise migration tools or support.

## Arista

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $5,000-$15,000 | MEDIUM |
| Professional Services | $15,000-$50,000 | MEDIUM |
| Migration Complexity | Medium-High | MEDIUM |
| Multi-Platform Tax | Moderate | MEDIUM |
| License True-Up Surprises | $5,000-$20,000/yr | MEDIUM |
| Vendor Lock-In Risk | Medium | MEDIUM |

- **Training & Certification** ($5,000-$15,000, MEDIUM): EOS has Junos-level learning curve. ACE certification track. Strong community but steep ramp for campus teams.
- **Professional Services** ($15,000-$50,000, MEDIUM): EVPN-VXLAN campus fabric deployments typically require PS. CloudVision onboarding can be complex.
- **Migration Complexity** (Medium-High, MEDIUM): EOS is standards-based (OpenConfig) but campus product line is new. Migration tools still maturing.
- **Multi-Platform Tax** (Moderate, MEDIUM): Separate CloudVision (wired) and CUE (wireless) portals. VeloCloud SD-WAN is another management plane.
- **License True-Up Surprises** ($5,000-$20,000/yr, MEDIUM): MACsec requires separate license. CloudVision premium pricing. Feature tiers can be confusing.
- **Vendor Lock-In Risk** (Medium, MEDIUM): EOS is open with strong OpenConfig/gNMI. But CloudVision creates management dependency. EVPN-VXLAN configs are portable.

## Alcatel-Lucent

| Cost Category | Amount | Risk |
|---------------|--------|------|
| Training & Certification | $3,000-$10,000 | MEDIUM |
| Professional Services | $10,000-$30,000 | MEDIUM |
| Migration Complexity | Medium | MEDIUM |
| Multi-Platform Tax | Low | LOW |
| License True-Up Surprises | $2,000-$8,000/yr | LOW |
| Vendor Lock-In Risk | Medium-Low | LOW |

- **Training & Certification** ($3,000-$10,000, MEDIUM): AOS certification track. SPB fabric requires specific training. Smaller training ecosystem than major vendors.
- **Professional Services** ($10,000-$30,000, MEDIUM): SPB fabric deployment may need PS. OmniVista setup can be complex.
- **Migration Complexity** (Medium, MEDIUM): AOS is CLI-based. SPB fabric is ALE-specific, requiring fabric redesign on exit.
- **Multi-Platform Tax** (Low, LOW): Unified OmniVista for wired + wireless. But no SD-WAN means third-party WAN solution needed.
- **License True-Up Surprises** ($2,000-$8,000/yr, LOW): Simple device-based OmniVista pricing. OV 2500 perpetual is predictable.
- **Vendor Lock-In Risk** (Medium-Low, LOW): AOS is perpetual. SPB is IEEE standard. But ALE-specific implementation. Moderate secondary market for hardware.

