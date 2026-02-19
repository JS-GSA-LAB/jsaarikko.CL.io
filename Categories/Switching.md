---
tags: [category]
---
# Switching

## Feature Comparison

| Feature | Extreme | Cisco | Meraki | Aruba | Juniper - Mist | Fortinet | Ruckus | Ubiquiti | Arista | Alcatel-Lucent |
|---------|---|---|---|---|---|---|---|---|---|---|
| **Architecture** |  |  |  |  |  |  |  |  |  |  |
| Network Fabric | Yes (Fabric Connect (SPB)) | Yes (SD-Access / VXLAN) | No (Basic L2/L3) | Yes (Dynamic Segmentation) | Yes (EVPN-VXLAN) | Partial (FortiLink) | No (Traditional) | No (Basic L2/L3) | Yes (EVPN-VXLAN) | Yes (SPB (IEEE 802.1aq)) |
| Stacking | Yes (Up to 8 units) | Yes (StackWise Virtual) | Yes (Virtual stacking) | Yes (VSF stacking) | Yes (Virtual Chassis) | Yes (FortiLink stack) | Yes (ICX stacking) | Yes (Basic stacking) | Partial (MLAG/SWAG, no traditional) | Yes (Virtual Chassis) |
| Campus/Access | Yes (5000/5500 series) | Yes (Catalyst 9200-9400) | Yes (MS130-MS425) | Yes (CX 6000-6400) | Yes (EX2300-EX4400) | Yes (FortiSwitch) | Yes (ICX 7150-7850) | Yes (USW series) | Yes (CCS-720XP/720DP) | Yes (OS6360/6465/6560/6860E) |
| Data Center | Yes (SLX 9000 series) | Yes (Nexus 9000) | No | Yes (CX 10000) | Yes (QFX series) | No (Campus only) | Partial (Limited DC) | No | Yes (7050X/7500R/7800R — industry leader) | Partial (OS6900/OS9900 DC edge) |
| **PoE & Power** |  |  |  |  |  |  |  |  |  |  |
| PoE++ (802.3bt) | Yes (Up to 90W) | Yes (UPOE+) | Yes | Yes | Yes | Yes | Yes | Yes | Yes (Up to 90W) | Yes (Up to 90W) |
| Max PoE Budget | 1,480W (5520 series) | 1,900W (C9300-48UXM) | 740W (MS390) | 1,440W (CX 6400) | 1,440W (EX4400) | 500W (FS-448E) | 1,480W (ICX 7850) | 400W (USW-Pro-48-PoE) | 2,000W (CCS-720XP) | 1,440W (OS6860E) |
| **Automation & Open Standards** |  |  |  |  |  |  |  |  |  |  |
| OpenConfig / YANG | Yes (Full support) | Yes | No | Yes (AOS-CX REST/YANG) | Yes (Industry leader) | Partial | Partial | No | Yes (Industry leader) | Partial (REST API, limited YANG) |
| Ansible / Terraform | Yes (Modules available) | Yes (Extensive) | Partial (API only) | Yes | Yes (Strong ecosystem) | Yes (FortiOS modules) | Partial | No (Community only) | Yes (AVD — best-in-class) | Partial (Limited modules) |
| REST API | Yes (XIQ + device APIs) | Yes (DNA Center APIs) | Yes (Dashboard API) | Yes (Central + CX APIs) | Yes (Mist + Junos APIs) | Yes (FortiOS API) | Yes (Ruckus One API) | Yes (UniFi API) | Yes (eAPI) | Yes (AOS REST API) |
| **Security** |  |  |  |  |  |  |  |  |  |  |
| MACsec | Yes (Hardware offload) | Yes | Partial (Select models) | Yes | Yes | No | Yes | No | Yes (256-bit, separate license) | Yes (OS6860E/6900) |
| Micro-Segmentation | Yes (Fabric Connect + Policy) | Yes (SGT / TrustSec) | Partial (Group Policy) | Yes (Dynamic Segmentation) | Yes (Mist micro-seg) | Yes (ZTNA + FortiLink) | Partial | No (Basic VLAN) | Yes (EVPN-VXLAN + MSS) | Yes (SPB + Unified Access) |

## Pricing Comparison

### Extreme Networks

| Model | Type | Price | License |
|-------|------|-------|---------|
| 5520-24T | 24-port Campus Access | $3,995 | XIQ Pilot optional |
| 5520-48T | 48-port Campus Access | $6,995 | XIQ Pilot optional |
| 5720-24MW | Multi-rate Campus | $8,495 | XIQ Pilot optional |

> No mandatory per-switch cloud license. XIQ Navigator is free. Pilot adds AIOps at ~$100/switch/yr.

### Cisco

| Model | Type | Price | License |
|-------|------|-------|---------|
| C9200L-24T | 24-port Access | $2,995 | DNA Essentials required |
| C9300-48T | 48-port Access | $8,995 | DNA Advantage required |
| C9500-24Y4C | Core/Aggregation | $24,995 | DNA Advantage required |

> DNA license mandatory (Essentials ~$1,200/3yr, Advantage ~$3,600/3yr per switch).

### Meraki

| Model | Type | Price | License |
|-------|------|-------|---------|
| MS130-24 | 24-port Access | $1,895 | License required |
| MS390-48 | 48-port Access | $7,695 | License required |
| MS425-32 | Aggregation | $14,995 | License required |

> Meraki license mandatory (~$200-$500/switch/yr). Hardware does not function without license.

### Aruba

| Model | Type | Price | License |
|-------|------|-------|---------|
| CX 6000 24G | 24-port Access | $1,695 | Central Foundation |
| CX 6300F 48G | 48-port Access | $5,495 | Central required |
| CX 8360 32Y | Core | $18,995 | Central Advanced |

> Aruba Central Foundation (~$75/switch/yr) or Advanced (~$150/switch/yr).

### Juniper - Mist

| Model | Type | Price | License |
|-------|------|-------|---------|
| EX2300-24T | 24-port Access | $2,295 | Mist Wired Assurance |
| EX4400-48T | 48-port Access | $7,495 | Mist Wired Assurance |
| QFX5120-48T | DC/Spine | $15,995 | Mist or standalone |

> Mist Wired Assurance: ~$100/switch/yr. Premium Analytics add-on available.

### Fortinet

| Model | Type | Price | License |
|-------|------|-------|---------|
| FS-124F | 24-port Access | $895 | FortiGate managed |
| FS-448E | 48-port Access | $3,495 | FortiGate managed |
| FS-1024E | Aggregation | $7,995 | FortiGate managed |

> No per-switch license — managed through FortiGate. Requires FortiGate + FortiCare subscription.

### Ruckus - CommScope

| Model | Type | Price | License |
|-------|------|-------|---------|
| ICX 7150-24 | 24-port Access | $2,195 | Ruckus One optional |
| ICX 7550-48 | 48-port Access | $6,995 | Ruckus One optional |
| ICX 7850-48C | Core | $19,995 | Ruckus One optional |

> Ruckus One cloud license ~$120/switch/yr. On-prem management available.

### Ubiquiti

| Model | Type | Price | License |
|-------|------|-------|---------|
| USW-24 | 24-port Access | $199 | None |
| USW-Pro-48-PoE | 48-port PoE Access | $699 | None |
| USW-Pro-Aggregation | Aggregation | $379 | None |

> No recurring licenses. Dramatically lower price point but limited enterprise features.

### Arista

| Model | Type | Price | License |
|-------|------|-------|---------|
| CCS-720DP-48S | Value Campus Access | $4,500 | CloudVision subscription |
| CCS-720XP-48Y6 | Campus Access | $7,500 | CloudVision subscription |
| CCS-720XP-48ZC2 | Campus Flagship | $13,500 | CloudVision subscription |

> CloudVision: ~$35/switch/mo subscription. EOS is perpetual. MACsec requires separate license.

### Alcatel-Lucent

| Model | Type | Price | License |
|-------|------|-------|---------|
| OS6360-P48X | Compact Access PoE | $3,200 | AOS perpetual |
| OS6860E-P48 | Campus Access PoE | $5,800 | AOS perpetual |
| OS6900-X72 | Core/Aggregation | $18,000 | AOS perpetual |

> AOS is perpetual. OmniVista Cirrus subscription for cloud management. SPB included in AOS.

## Market Position

| Vendor | Quadrant | Note |
|--------|----------|------|
| [[Extreme Networks]] | Leader | Fabric Connect and cloud-driven campus networking |
| [[Cisco]] | Leader | Dominant market position with Catalyst 9000 |
| [[Aruba]] | Leader | CX platform with strong automation |
| [[Juniper - Mist]] | Leader | EVPN-VXLAN expertise, AI-driven operations |
| [[Fortinet]] | Challenger | FortiSwitch tightly integrated with FortiGate security |
| [[Ruckus - CommScope]] | Challenger | ICX series solid performance |
| [[Meraki]] | Visionary | Simplified cloud switching, limited scale |
| [[Ubiquiti]] | Niche Player | Price leader, basic L2/L3 |
| [[Arista]] | Visionary | DC leader expanding to campus with EVPN-VXLAN fabric |
| [[Alcatel-Lucent]] | Niche Player | OmniSwitch with SPB fabric, strong in education/government |

## Related

- [[Extreme Networks]]
- [[Cisco]]
- [[Meraki]]
- [[Aruba]]
- [[Juniper - Mist]]
- [[Fortinet]]
- [[Ruckus - CommScope]]
- [[Ubiquiti]]
- [[Arista]]
- [[Alcatel-Lucent]]
