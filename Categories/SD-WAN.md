---
tags: [category]
---
# SD-WAN

## Feature Comparison

| Feature | Extreme | Cisco | Meraki | Aruba | Juniper - Mist | Fortinet | Ruckus | Ubiquiti | Arista | Alcatel-Lucent |
|---------|---|---|---|---|---|---|---|---|---|---|
| **SD-WAN Core** |  |  |  |  |  |  |  |  |  |  |
| SD-WAN Solution | Yes (ExtremeCloud SD-WAN) | Yes (Catalyst SD-WAN (Viptela)) | Yes (Meraki SD-WAN (Auto VPN)) | Yes (EdgeConnect SD-WAN) | Yes (Session Smart Router) | Yes (FortiGate SD-WAN) | No (No SD-WAN offering) | Partial (Basic site-to-site VPN) | Partial (VeloCloud, newly acquired) | No (No native SD-WAN) |
| Zero-Touch Provisioning | Yes (Cloud ZTP) | Yes (PnP / ZTP) | Yes (Auto VPN) | Yes (Cloud-based ZTP) | Yes (Mist ZTP) | Yes (FortiDeploy) | N/A | No | Yes (VeloCloud ZTP) | N/A |
| Application-Aware Routing | Yes (DPI + SLA-based) | Yes (AppQoE) | Partial (Basic app awareness) | Yes (AppRF) | Yes (AI-driven routing) | Yes (FortiOS DPI) | N/A | No | Yes (VeloCloud DPI) | N/A |
| WAN Optimization | Yes (Built-in) | Yes (AppQoE / TCP opt) | Partial (Limited) | Yes (Boost WAN) | Yes | Yes (WAN opt engine) | N/A | No | Yes (VeloCloud) | N/A |
| **SASE & Security** |  |  |  |  |  |  |  |  |  |  |
| SASE Integration | Yes (ExtremeCloud Universal ZTNA) | Yes (Cisco+ Secure Connect) | Yes (Meraki SASE) | Yes (SSE integration) | Yes (Secure Edge) | Yes (FortiSASE) | N/A | No | Partial (Integration in progress) | No |
| Integrated Firewall | Partial (Basic stateful) | Yes (Full NGFW) | Yes (Meraki MX) | Yes (EdgeConnect NGFW) | Yes (SRX Series) | Yes (Industry-leading NGFW) | N/A | Yes (USG / UDM) | No | No |
| Zero Trust (ZTNA) | Yes (Universal ZTNA) | Yes (Duo + Umbrella) | Partial (Via Umbrella) | Yes (ZTNA + ClearPass) | Yes (Mist Access Assurance) | Yes (FortiZTNA) | N/A | No | Partial | Partial (CyberElements ZTNA) |
| **Deployment** |  |  |  |  |  |  |  |  |  |  |
| Max Sites | 10,000+ (Cloud-managed) | 10,000+ (vManage) | 10,000+ (Dashboard) | 10,000+ (Orchestrator) | 10,000+ (Mist Cloud) | 10,000+ (FortiManager) | N/A | Limited (Manual config) | 10,000+ (VeloCloud) | N/A |
| Multi-Cloud Support | Yes (AWS, Azure, GCP) | Yes (All major clouds) | Yes (vMX) | Yes (Cloud gateways) | Yes (Cloud-native router) | Yes (FortiGate VM) | N/A | No | Yes (CloudEOS) | No |

## Pricing Comparison

### Extreme Networks

| Model | Type | Price | License |
|-------|------|-------|---------|
| SD-WAN Appliance | Branch (50 users) | $1,200 | Per-site subscription |
| SD-WAN Virtual | Cloud / DC | $800/yr | Subscription |

> ExtremeCloud SD-WAN: ~$50-$100/site/month depending on bandwidth tier.

### Cisco

| Model | Type | Price | License |
|-------|------|-------|---------|
| C1111-8P | Branch ISR | $2,495 | DNA + Viptela license |
| C8300-2N2S | Mid-size branch | $5,995 | DNA Advantage |

> Catalyst SD-WAN: ~$100-$300/site/month. Requires DNA license + SD-WAN overlay license.

### Meraki

| Model | Type | Price | License |
|-------|------|-------|---------|
| MX68 | Small branch | $595 | License included |
| MX95 | Mid-size branch | $2,495 | License included |

> Meraki MX: License mandatory (~$100-$200/device/yr). Simple but limited SD-WAN features.

### Aruba

| Model | Type | Price | License |
|-------|------|-------|---------|
| EC-S | Small branch | $1,500 | Orchestrator subscription |
| EC-M | Medium branch | $3,500 | Orchestrator subscription |

> EdgeConnect: ~$75-$150/site/month. Strong SD-WAN from Silver Peak acquisition.

### Juniper - Mist

| Model | Type | Price | License |
|-------|------|-------|---------|
| SSR120 | Branch | $1,995 | Mist WAN Assurance |
| SSR1000 | Hub/DC | $8,995 | Mist WAN Assurance |

> Session Smart Router: ~$100-$200/site/month. Unique tunnel-free architecture.

### Fortinet

| Model | Type | Price | License |
|-------|------|-------|---------|
| FG-40F | Small branch | $495 | FortiCare + UTP |
| FG-100F | Mid-size branch | $2,995 | FortiCare + UTP |

> SD-WAN built into FortiGate at no extra cost. Only need FortiCare bundle (~$500-$2,000/yr).

### Arista

| Model | Type | Price | License |
|-------|------|-------|---------|
| VeloCloud Edge 520 | Branch | $1,500 | VeloCloud subscription |
| VeloCloud Edge 840 | Mid-size branch | $4,500 | VeloCloud subscription |

> VeloCloud subscription model. Integration with CloudVision in progress following July 2025 acquisition from Broadcom.

### Alcatel-Lucent

| Model | Type | Price | License |
|-------|------|-------|---------|
| N/A | No native SD-WAN | N/A | Partner solutions only |

> ALE does not offer a native SD-WAN product. Partner integrations available for WAN connectivity.

## Market Position

| Vendor | Quadrant | Note |
|--------|----------|------|
| [[Extreme Networks]] | Visionary | Growing SD-WAN with cloud-native integration |
| [[Cisco]] | Leader | Catalyst SD-WAN (Viptela) — strong enterprise presence |
| [[Aruba]] | Leader | EdgeConnect SD-WAN — top-rated WAN optimization |
| [[Juniper - Mist]] | Leader | Session Smart Router — tunnel-free innovation |
| [[Fortinet]] | Leader | SD-WAN built into FortiGate NGFW — best TCO |
| [[Meraki]] | Challenger | Simple Auto VPN, limited advanced features |
| [[Arista]] | Niche Player | VeloCloud acquired July 2025, integration in progress |
| [[Alcatel-Lucent]] | Niche Player | No native SD-WAN offering; relies on partner solutions |

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
