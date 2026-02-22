---
tags: [cost-analysis, licensing]
---
# Cloud Licensing

> Per-vendor cloud management platform subscriptions, tiers, and pricing. Complements [[Licensing Models]] (which covers lock-in and exit costs) and [[TCO Comparison]] (which covers total cost of ownership).

---

## [[Extreme Networks]] — ExtremeCloud IQ / Platform ONE

### Management Applications
Platform ONE subscriptions work across all management applications:
- **ExtremeCloud IQ (XIQ)** — Cloud-native management
- **ExtremeCloud IQ - Controller (XIQ-C)** — On-prem controller with cloud option
- **ExtremeCloud IQ - Site Engine (XIQ-SE)** — Legacy on-prem management

### XIQ Application Subscriptions

| Subscription | Type | Description |
|-------------|------|-------------|
| **Pilot** | Standard | Core cloud management — required for most XIQ-managed devices |
| **CoPilot** | AI/ML | AI-driven network optimization and anomaly detection |
| **Navigator** | Premium | Full-feature orchestration and lifecycle management |
| **Connect** | Free | Basic device management at zero cost |
| **Legacy Pilot Twin** | Legacy | Existing customers only — backwards compatibility |

### Platform ONE Standard Networking Tiers

| Tier | Device Families |
|------|----------------|
| **Tier A** | Universal AP (AP4xx0/AP5xx0), Universal Switch (5320/5420/5520/5720) |
| **Tier B** | AP3xx series, 5xxx series switches |
| **Tier C** | Legacy WiNG APs, legacy EXOS switches |
| **Tier D** | Low-end (210/220 series) |

### Pricing
- XIQ Pilot + ExtremeWorks: ~$107/device/yr
- CoPilot/Navigator: Premium pricing above Pilot
- Connect: Free
- Trial: 30-day trial available for all subscription types

### Lifecycle
- **XIQ:** GA → EOS → EOSL phases (color-coded timeline)
- **Platform ONE:** GA → EOS → EOSL with SUPPORT impact track

---

## [[Cisco]] — DNA / Catalyst Software Subscription

### Tiers

| Tier | ~Price | Features |
|------|--------|----------|
| **DNA Essentials** | $92/AP/yr, ~$165/switch/yr | Base management, monitoring, automation |
| **DNA Advantage** | $400-500/device/yr | AI Analytics, Network Analytics, Assurance |
| **DNA Premier** | Discontinued | Being replaced by Catalyst Software Sub (DNX) |

### Key Notes
- **Catalyst Software Subscription (DNX):** New unified model replacing DNA
- **SLP (Smart Licensing with Policy):** All IOS XE 17.3.2+ devices
- Firepower threat/malware licensing is separate from DNA

---

## [[Meraki]] — Enterprise Cloud License

### Pricing

| Device Type | ~Annual License |
|-------------|----------------|
| APs (CW9176I, etc.) | $119/AP/yr |
| Switches (MS130, etc.) | $73/yr |
| MX Security Appliance | $249/yr |

### Critical
- **Hardware ceases to pass ALL traffic upon license expiration**
- Zero functionality without active license
- No on-prem fallback
- CW9164/CW9176I/CW9178I can run under either Meraki or Catalyst/DNA management

---

## [[Aruba]] — Central Foundation / Advanced

### Tiers

| Tier | AP | Switch (24-port) | Gateway |
|------|-------|---------|---------|
| **Foundation** | $93/yr | $216/yr | ~$100/yr |
| **Advanced** | ~$185/yr | ~$430/yr | ~$200/yr |

### Advanced Adds
- AI Insights and Client Insights
- UXI (User Experience Insight) integration
- ClearPass integration
- HPE GreenLake consumption model available

---

## [[Juniper - Mist]] — Assurance Subscriptions

### Tiers

| Subscription | ~Price |
|-------------|--------|
| **Wireless Assurance** | $150-268/AP/yr |
| **Wired Assurance** | $150-250/switch/yr |
| **WAN Assurance** | Per-SSR bandwidth tier |
| **Marvis AI** | Included with Assurance (not separate) |

### Notes
- Pricing highly variable — multi-year bundles reduce costs 15-30%
- Under HPE umbrella — future may align with Aruba Central

---

## [[Fortinet]] — FortiGuard Bundles

### Bundle Tiers (FortiGate)

| Bundle | Key Services | ~Price (FG-60F) |
|--------|-------------|-----------------|
| **FortiGuard ATP** | AV, IPS, App Control, Botnet + 24x7 FortiCare | — |
| **FortiGuard UTP** | ATP + Web Filter, DNS Filter, Anti-Spam, FortiSandbox Cloud | ~$428/yr |
| **FortiGuard Enterprise** | UTP + Industrial Security, OT Protocol, Inline CASB, ZTNA | — |

### Key Advantage
- **FortiAPs and FortiSwitches managed by FortiGate = ZERO per-device subscription**
- Only the FortiGate firewall needs a FortiGuard subscription
- FortiLink enables license-free switch management

---

## [[Ruckus - CommScope]] — RUCKUS One

### Tiers (Device-Agnostic: 1 license = 1 AP or 1 switch)

| Tier | ~Price | Data Retention | Key Features |
|------|--------|---------------|-------------|
| **Essentials** | $170/device/yr | 1 month | Core management, monitoring, standard reporting |
| **Professional** | $315/device/yr | 12 months | RUCKUS AI, IDS/IPS, compliance reports, advanced RBAC |

### Terms & Activation
- 1, 3, or 5-year subscriptions
- Unique activation code per license
- 180-day activation grace period
- Future start date selectable during activation

### Expiration Behavior
1. 30-day pre-expiration alarm (weekly emails)
2. 60-day grace period (all features remain)
3. After grace: APs retain config, continue PSK/802.1x
4. Cloud management removed, cloud-dependent services stop

---

## [[Ubiquiti]] — License-Free

### Model
- **$0 per device, $0 per year** for core networking
- All features included with hardware purchase
- Free remote management via Site Manager (unifi.ui.com)

### Optional Paid Add-ons

| Add-on | Price |
|--------|-------|
| CyberSecure Standard | $99/yr |
| CyberSecure Enterprise | $499/yr |
| UniFi Talk Plus | $9.99/mo/line |
| UniFi Talk Pro | $24.99/mo/line |
| Identity Enterprise | $5/user/mo |

### E-Rate Eligibility (Category 2)
- K-12 schools and libraries
- Zero recurring fees maximizes E-Rate dollar value
- Eligible products: APs, switches, gateways, cabling, PoE, CloudKeys, LTE, antennas
- File Form 470 → Evaluate → Form 471 → USAC Review → FCDL Approval
- Category 1 (Broadband): Certain gateway solutions may qualify

---

## Quick Reference — Annual Licensing Cost per Device

| Vendor | Standard Tier | Premium Tier | Free Tier |
|--------|--------------|-------------|-----------|
| [[Ubiquiti]] | $0 | $0 | Yes (all features) |
| [[Fortinet]] | $0 (AP/switch) | $0 (AP/switch) | N/A (gateway needs FortiGuard) |
| [[Extreme Networks]] | ~$107 (Pilot) | Higher (CoPilot/Nav) | Yes (Connect) |
| [[Cisco]] (DNA) | ~$92-165 | ~$400-500 | No |
| [[Meraki]] | ~$73-249 | Same (single tier) | No |
| [[Aruba]] | ~$93-216 | ~$185-430 | No |
| [[Juniper - Mist]] | ~$150-268 | Higher (Premium Assurance) | No |
| [[Ruckus - CommScope]] | ~$170 | ~$315 | No |
