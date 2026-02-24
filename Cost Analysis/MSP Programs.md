---
tags: [cost-analysis, msp]
---
# MSP Program Comparison

Managed Service Provider programs compared across all 10 vendors — billing models, multi-tenancy, TCO, and lock-in risk.

## TCO Summary (500-Device MSP Deployment)

| Vendor | Program | Est. TCO/dev/yr | Monthly Billing | Multi-Tenant | Free Tier | Lock-In |
|--------|---------|----------------|-----------------|--------------|-----------|---------|
| [[Ubiquiti]] | No Formal Program | $30–50 | No | Partial | Yes (free SW) | Low |
| [[Alcatel-Lucent]] | OmniVista Cirrus / Terra | $80–150 | OPEX mode | Yes | No | Medium-Low |
| [[Extreme Networks]] | **Platform ONE for MSPs** | **$95–130** | **Yes (consumption)** | **Yes** | **Yes** | **Low** |
| [[Fortinet]] | Engage MSSP / FortiFlex | $100–200 | Yes (FortiFlex) | Yes | No | Medium-High |
| [[Aruba]] | Central MSP / GreenLake | $120–200 | Via GreenLake | Yes | Yes | Medium |
| [[Juniper - Mist]] | Mist MSP / JPA 2025 | $140–220 | No | Yes | No | Medium |
| [[Meraki]] | Meraki MSP Program | $150–250 | Via MSLA | Yes | No | Very High |
| [[Arista]] | CloudVision CUE MSP | $150–250 | Yes | Yes | No | Medium |
| [[Cisco]] | CMSP / Cisco 360 / MSLA | $180–280 | Yes (MSLA) | Limited | No | High |
| [[Ruckus - CommScope]] | RUCKUS One MSP | $200–350 | No | Yes | Yes (trial) | Medium-Low |

## Annual Cost Comparison (500 Devices)

| Vendor | Annual Cost | vs Extreme |
|--------|------------|------------|
| Ubiquiti | ~$20,000 | -$36,250 |
| Alcatel-Lucent | ~$57,500 | +$1,250 |
| **Extreme** | **~$56,250** | **Baseline** |
| Fortinet | ~$75,000 | +$18,750 |
| Aruba | ~$80,000 | +$23,750 |
| Juniper / Mist | ~$90,000 | +$33,750 |
| Meraki | ~$100,000 | +$43,750 |
| Arista | ~$100,000 | +$43,750 |
| Cisco | ~$115,000 | +$58,750 |
| Ruckus | ~$137,500 | +$81,250 |

---

## Vendor Program Details

### [[Extreme Networks]] — Platform ONE for MSPs
- **Launched:** March 2025 (GA March 31, 2025)
- **Billing:** Consumption-based — industry's first for networking. Poolable licensing across devices/customers. Price locked 3 years.
- **Monthly Billing:** Yes (consumption metered)
- **Multi-Tenant:** Organization → VIQs → Sites hierarchy. Single workspace across all clients. 48+ MSP partners enrolled.
- **Free Tier:** XIQ Connect free tier + free software trials
- **White-Label:** Partial (partner portal)
- **API:** REST APIs (Swagger UI), SNMP, Syslog, AI conversational agents, single-click multi-device provisioning
- **NOC/SOC:** Centralized health/performance view, Syslog/SNMP streaming, API event streaming
- **MSP Portal:** msp.extremecloudiq.com
- **HW Ownership:** Flexible — customer-owned or MSP-owned. Universal hardware.
- **Lock-In:** Low — Hardware fully functional without license
- **Strengths:** Only consumption-based billing, poolable licensing, universal hardware, free tier, 3yr price lock
- **Weaknesses:** Program launched March 2025 (still maturing), 48+ MSP partners (growing)

### [[Cisco]] — CMSP / Cisco 360 / MSLA
- **Launched:** January 2026 (Cisco 360)
- **Billing:** MSLA monthly post-paid (fully uncommitted, invoiced in arrears). MSEA: enterprise agreement with quarterly true-up.
- **Monthly Billing:** Yes (MSLA)
- **Multi-Tenant:** Limited — DNA Center multi-site but not true MSP multi-tenant
- **Free Tier:** 90-day DNA Center evaluation only
- **White-Label:** Limited (Cisco branding prominent)
- **API:** DNA Center APIs, Catalyst Center APIs, NETCONF/YANG
- **NOC/SOC:** SecureX, ThousandEyes, Secure MSP Center, streaming telemetry
- **MSP Portal:** Secure MSP Center, CMSP Express portal, Cisco 360 dashboard
- **Lock-In:** High — DNA/ISE/SD-Access deeply proprietary
- **Strengths:** MSLA monthly billing, largest partner ecosystem, comprehensive NOC/SOC
- **Weaknesses:** Highest TCO, no true MSP multi-tenant, no free tier, complex licensing

### [[Meraki]] — Meraki MSP Program
- **Launched:** 2015 (MSP portal)
- **Billing:** Per-device prepaid. Enterprise: ~$115-131/AP/yr (street). 1/3/5/7/10yr terms.
- **Monthly Billing:** Via MSLA only
- **Multi-Tenant:** Yes — multi-org view, MSP Portal auto-displayed
- **Free Tier:** Trial hardware via webinar programs
- **White-Label:** Yes — Dashboard Branding (logo, colors, URL customization)
- **API:** RESTful Dashboard API v1, webhooks, ServiceNow connector, OAuth 2.0
- **NOC/SOC:** Live Tools, SNMP/Syslog export, Meraki Health
- **MSP Portal:** Multi-org management, cross-org license transfer
- **Lock-In:** Very High — Hardware bricks without license. 100% forklift to exit.
- **Strengths:** Best white-label, most mature MSP portal, simple model, extensive API
- **Weaknesses:** Hardware bricks, no free tier, very high lock-in, prepaid only

### [[Aruba]] — Aruba Central MSP / GreenLake
- **Launched:** 2019 (MSP mode)
- **Billing:** Per-device subscription. Foundation: ~$93/AP/yr. Advanced: ~$185/AP/yr.
- **Monthly Billing:** Via GreenLake NaaS only
- **Multi-Tenant:** Yes — dedicated MSP mode, GreenLake integration
- **Free Tier:** Aruba Central free tier for limited devices
- **White-Label:** Limited (HPE-branded portal)
- **API:** REST APIs, API streaming (Advanced), webhooks, ZTP
- **NOC/SOC:** AI Insights, AIOps, full-stack observability
- **Lock-In:** Medium
- **Strengths:** Four deployment models, GreenLake consumption, mature MSP mode, free tier
- **Weaknesses:** No native monthly billing, HPE branding, GreenLake complexity

### [[Juniper - Mist]] — Mist MSP / Partner Advantage 2025
- **Launched:** 2020
- **Billing:** Per-device subscription. WiFi+VNA: ~$120-180/AP/yr. 1/3/5yr terms.
- **Monthly Billing:** No
- **Multi-Tenant:** Yes — single-window view of SLAs, Marvis Actions, tickets
- **Free Tier:** POC through partners only
- **White-Label:** Limited
- **API:** Mist APIs, webhooks, Marvis AI automation
- **NOC/SOC:** Marvis Actions proactive remediation, service level monitoring
- **Lock-In:** Medium
- **Strengths:** Best AI ops (Marvis VNA), subscription transfer, proactive anomaly detection
- **Weaknesses:** No monthly billing, no free tier, premium pricing

### [[Fortinet]] — Fortinet Engage MSSP / FortiFlex
- **Launched:** 2018 (MSSP track)
- **Billing:** FortiFlex points-based, consumption metered, EA quarterly, per-device. Multiple models.
- **Monthly Billing:** Yes (FortiFlex)
- **Multi-Tenant:** Yes — FortiCloud Organization with OUs, FortiGate/FortiLAN/FortiSASE
- **Free Tier:** FortiFlex trial points for new partners
- **White-Label:** Yes — MSSPs deliver under own brand, FortiSIEM/FortiSOAR white-label
- **API:** FortiOS REST, FortiManager, FortiCloud, FortiSOAR, Ansible/Terraform
- **NOC/SOC:** FortiSIEM, FortiSOAR, FortiEDR, FortiAI — best SOC tooling in industry
- **Lock-In:** Medium-High
- **Strengths:** Best SOC/SIEM tools, FortiFlex consumption, white-label, security-first
- **Weaknesses:** High minimum commitment tiers, FortiGate required, networking secondary

### [[Ruckus - CommScope]] — RUCKUS One MSP
- **Launched:** 2023
- **Billing:** Per-device subscription. Essentials: ~$170/dev/yr. Professional: ~$315/dev/yr.
- **Monthly Billing:** No
- **Multi-Tenant:** Yes — RUCKUS One MSP Portal, AI-powered DSE assistant
- **Free Tier:** RUCKUS One Trial available
- **White-Label:** Limited
- **Lock-In:** Medium-Low (SmartZone perpetual fallback)
- **Strengths:** AI DSE assistant, trial available, SmartZone fallback, MDU 360
- **Weaknesses:** Highest pricing, no monthly billing, limited white-label, CommScope uncertainty

### [[Ubiquiti]] — No Formal MSP Program
- **Launched:** 2025 (UniFi OS Server for MSPs)
- **Billing:** Hardware-only — zero licensing fees. Third-party hosting: ~$5-15/site/month.
- **Monthly Billing:** N/A (no licensing)
- **Multi-Tenant:** Partial — multi-site mode, no global MSP roles. Third-party hosting adds features.
- **Free Tier:** All software permanently free
- **White-Label:** No
- **API:** Limited (community-maintained, undocumented)
- **NOC/SOC:** Basic SNMP/Syslog only. No native NOC tools.
- **Lock-In:** Low (but no enterprise support)
- **Strengths:** Lowest TCO ($30-50/dev/yr), zero licensing, no contracts
- **Weaknesses:** No formal MSP program, no enterprise support, limited API, no multi-tenant portal

### [[Arista]] — CloudVision CUE MSP Platform
- **Launched:** 2023
- **Billing:** Per-device subscription. CVaaS: ~$120-200/sw/yr. Monthly SKUs available.
- **Monthly Billing:** Yes
- **Multi-Tenant:** Yes — true multi-tenant NetDL architecture
- **Free Tier:** Lab licenses (10 switches, 1 month)
- **White-Label:** Limited
- **API:** CloudVision APIs, Studios, gNMI, NETCONF, REST, eAPI, Ansible/Terraform
- **NOC/SOC:** Network-wide telemetry, streaming analytics, change control
- **Lock-In:** Medium (EOS perpetual, OpenConfig)
- **Strengths:** True multi-tenant, monthly billing, DC-to-campus, Studios automation
- **Weaknesses:** Enterprise pricing, campus program maturing, no free tier

### [[Alcatel-Lucent]] — OmniVista Cirrus / Terra MSP
- **Launched:** 2020 (Cirrus MSP)
- **Billing:** Per-device subscription. Cirrus: ~$60-120/AP/yr. Switch: ~$40-80/sw/yr.
- **Monthly Billing:** OPEX mode available
- **Multi-Tenant:** Yes — hierarchical model, exclusive account isolation, RBAC per site
- **Free Tier:** Evaluation through partners
- **White-Label:** Limited
- **API:** 100% programmable via API, multi-vendor support (Network Advisor)
- **NOC/SOC:** Device inventory, alarms, Celona 5G and Versa SD-WAN integration
- **Lock-In:** Medium-Low
- **Strengths:** Most cost-competitive, multi-vendor support, on-prem option (Terra), 100% API
- **Weaknesses:** Shrinking partner base, no monthly billing, limited market presence outside EU

---

## Key Differentiators — Extreme Platform ONE for MSPs

1. **Only consumption-based billing** — No other networking vendor offers true consumption-based, pay-as-you-use MSP licensing
2. **Poolable licensing** — Dynamically reallocate licenses across devices, locations, and customers
3. **3-year price lock** — Guaranteed pricing stability in a market of annual price increases
4. **Free tier (XIQ Connect)** — Onboard new customers at zero cost
5. **No hardware bricking** — Universal hardware works without active license (unlike Meraki, Cisco DNA)
6. **Universal hardware** — Same AP/switch works cloud, on-prem, or hybrid without hardware swap

---

See also: [[Licensing Models]] · [[TCO Comparison]] · [[Hidden Costs]]
