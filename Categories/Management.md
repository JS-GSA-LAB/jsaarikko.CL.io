---
tags: [category]
---
# Management

## Feature Comparison

| Feature | Extreme | Cisco | Meraki | Aruba | Juniper - Mist | Fortinet | Ruckus | Ubiquiti | Arista | Alcatel-Lucent |
|---------|---|---|---|---|---|---|---|---|---|---|
| **Platform Architecture** |  |  |  |  |  |  |  |  |  |  |
| Platform Name | ExtremeCloud IQ (Cloud-native microservices) | Catalyst Center (On-prem appliance + cloud) | Meraki Dashboard (Cloud-only SaaS) | Aruba Central (Cloud-native) | Mist Cloud (Cloud-native microservices) | FortiManager (On-prem + FortiCloud) | Ruckus One (Cloud-native) | UniFi Network (Self-hosted / cloud) | CloudVision + CUE (Cloud or on-prem) | OmniVista Cirrus (Cloud + on-prem OV2500) |
| Single Pane of Glass | Yes (Wired + Wireless + SD-WAN) | Partial (Separate from Meraki) | Yes (Full stack Meraki only) | Yes (Wired + Wireless + WAN) | Yes (Wired + Wireless + WAN) | Yes (All Fortinet products) | Yes (Wired + Wireless) | Yes (Full UniFi stack) | Partial (Separate wired/wireless portals) | Yes (Wired + Wireless via OmniVista) |
| Multi-Tenant | Yes (VIQ hierarchy) | Yes (Limited) | Yes (Organization model) | Yes (MSP-ready) | Yes (Org-based) | Yes (FortiManager ADOMs) | Yes | Partial (Site-based) | Yes | Yes (Multi-customer support) |
| **AI & Operations** |  |  |  |  |  |  |  |  |  |  |
| AIOps | Yes (CoPilot AI assistant) | Yes (AI Network Analytics) | Partial (Health scores) | Yes (AIOps in Central) | Yes (Marvis AI — industry best) | Partial (FortiAIOps) | Yes (Ruckus AI) | No (Basic monitoring) | Yes (Cognitive analytics) | No (Basic analytics) |
| Natural Language Queries | Yes (CoPilot chat) | Partial (Limited AI assistant) | No | Partial (Search-based) | Yes (Marvis conversational) | No | No | No | No | No |
| Proactive Anomaly Detection | Yes (ML-based alerts) | Yes (AI-driven insights) | Partial (Health alerts) | Yes (AIOps alerts) | Yes (Marvis Actions) | Partial | Partial | No | Yes (ML baselining) | Partial (Basic threshold alerts) |
| **Integration & API** |  |  |  |  |  |  |  |  |  |  |
| REST API | Yes (Comprehensive) | Yes (Extensive) | Yes (Well-documented) | Yes (Full API coverage) | Yes (Extensive) | Yes (FortiOS REST) | Yes | Partial (Unofficial API) | Yes (eAPI + gNMI) | Yes (AOS REST API) |
| Webhooks / Streaming | Yes (XIQ webhooks) | Yes | Yes (Webhooks + MQTT) | Yes | Yes (Mist webhooks) | Yes | Partial | No | Yes | Partial (SNMP traps + syslog) |
| ITSM Integration | Yes (ServiceNow, Slack, etc.) | Yes (Extensive ecosystem) | Partial (Limited) | Yes | Yes (ServiceNow, PagerDuty) | Yes | Partial | No | Yes | Partial (Limited integrations) |
| **Deployment Flexibility** |  |  |  |  |  |  |  |  |  |  |
| Cloud-Only Mode | Yes (XIQ cloud) | Yes (Catalyst Center SaaS) | Yes (Only option) | Yes (Central cloud) | Yes (Mist cloud) | Yes (FortiCloud) | Yes (Ruckus One) | Yes (UniFi cloud) | Yes (CVaaS) | Yes (OmniVista Cirrus) |
| On-Prem Mode | Yes (XIQ-SE / full parity) | Yes (Appliance (full features)) | No (Cloud-only) | Yes (Central On-Prem) | Partial (Limited) | Yes (FortiManager) | Yes (SmartZone) | Yes (Self-hosted controller) | Yes (CV appliance) | Yes (OmniVista 2500) |
| Hybrid Mode | Yes (Universal mgmt — same HW) | Partial (Different platforms) | No | Partial (Different feature sets) | Partial | Yes (FortiManager + FortiCloud) | Partial | Partial | Yes | Yes (OV Cirrus + OV 2500) |

## Pricing Comparison

### Extreme Networks

| Model | Type | Price | License |
|-------|------|-------|---------|
| XIQ Navigator | Basic cloud mgmt | Free | Included |
| XIQ Pilot | Advanced analytics | $150/device/yr | Subscription |
| XIQ CoPilot | AI assistant + Digital Twin | $180/device/yr | Subscription |

> Unique free tier (Navigator). No lock-in — hardware works without cloud subscription.

### Cisco

| Model | Type | Price | License |
|-------|------|-------|---------|
| Catalyst Center Essentials | Basic management | Included | With DNA license |
| Catalyst Center Advantage | Advanced analytics | $3,600/switch/3yr | Required for SD-Access |
| ThousandEyes | WAN visibility | ~$100/agent/mo | Subscription |

> DNA license tiers determine Catalyst Center features. Mandatory for full functionality.

### Meraki

| Model | Type | Price | License |
|-------|------|-------|---------|
| Meraki License | Per-device subscription | $150-$500/yr | Mandatory |
| Meraki Insight | WAN health | Add-on | Per-network |

> License is mandatory. All management included but hardware is non-functional without active license.

### Aruba

| Model | Type | Price | License |
|-------|------|-------|---------|
| Central Foundation | Basic cloud mgmt | $75-$110/dev/yr | Subscription |
| Central Advanced | AIOps + analytics | $150-$165/dev/yr | Subscription |

> Subscription required for cloud management. Tiered model with clear feature delineation.

### Juniper - Mist

| Model | Type | Price | License |
|-------|------|-------|---------|
| Wired Assurance | Switch management | $100/switch/yr | Subscription |
| Wireless Assurance | AP management | $150/AP/yr | Subscription |
| Marvis | AI engine | Included | With Assurance |

> Clean subscription model. Marvis AI included with Assurance subscriptions.

### Fortinet

| Model | Type | Price | License |
|-------|------|-------|---------|
| FortiManager | Centralized management | $10,000-$50,000 | Perpetual + FortiCare |
| FortiAnalyzer | Analytics / logging | $10,000-$40,000 | Perpetual + FortiCare |

> Perpetual appliance licensing with annual FortiCare support. No per-device cloud fees.

### Ruckus - CommScope

| Model | Type | Price | License |
|-------|------|-------|---------|
| Ruckus One | Cloud management | $120-$150/dev/yr | Subscription |
| SmartZone | On-prem controller | $3,000-$15,000 | Perpetual |

> Choice between cloud subscription (Ruckus One) or perpetual on-prem (SmartZone).

### Ubiquiti

| Model | Type | Price | License |
|-------|------|-------|---------|
| UniFi Network | Self-hosted / cloud | Free | None |
| UI.com Cloud | Remote management | Free | None |

> Completely free management. No recurring fees. Trade-off: limited enterprise features.

### Arista

| Model | Type | Price | License |
|-------|------|-------|---------|
| CloudVision Full | Full management suite | $35/switch/mo | Subscription |
| CloudVision Lite | Basic management | $20/switch/mo | Subscription |
| CUE Wireless | Wireless management | $175/AP/yr | Subscription |

> Subscription-based per device. EOS is perpetual; management is subscription. CloudVision pricing varies by tier.

### Alcatel-Lucent

| Model | Type | Price | License |
|-------|------|-------|---------|
| OmniVista Cirrus | Cloud management | $120/device/yr | Subscription |
| OmniVista 2500 | On-prem management | $8,000 | Perpetual + maintenance |

> OmniVista Cirrus subscription per device. OmniVista 2500 on-prem is perpetual license with annual maintenance.

## Market Position

| Vendor | Quadrant | Note |
|--------|----------|------|
| [[Extreme Networks]] | Leader | Cloud-native XIQ with CoPilot AI and Digital Twin |
| [[Cisco]] | Leader | Catalyst Center — most features, most complexity |
| [[Aruba]] | Leader | Aruba Central — strong AIOps and segmentation |
| [[Juniper - Mist]] | Leader | Mist — best AI assistant (Marvis), microservices |
| [[Meraki]] | Challenger | Simple but limited to Meraki ecosystem |
| [[Fortinet]] | Challenger | FortiManager — strong for Fortinet stack |
| [[Ruckus - CommScope]] | Visionary | Ruckus One — new platform, growing features |
| [[Ubiquiti]] | Niche Player | Free but no enterprise management features |
| [[Arista]] | Visionary | CloudVision strong for DC, expanding campus capabilities |
| [[Alcatel-Lucent]] | Niche Player | OmniVista Cirrus and on-prem OmniVista 2500 |

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
