---
tags: [products, eos-eol, lifecycle]
---
# EOS/EOL Database Summary

> Per-vendor End-of-Sale / End-of-Life product lifecycle data maintained in the Competitive Dashboard. Updated February 2026.

---

## Database Coverage

| Vendor | Entries | Key Product Families |
|--------|---------|---------------------|
| [[Extreme Networks]] | 111 | APs (Altitude → AP5020), Switches (Summit X → 5520), Controllers (NX/C/V series), Enterasys legacy |
| [[Cisco]] | ~15 | Catalyst, Meraki CW, Aironet (basic coverage — expand from Cisco EOL advisories) |
| [[Meraki]] | ~8 | MR/MS/MX series (basic coverage) |
| [[Aruba]] | 63 | APs (802.11n → Wi-Fi 6), Switches (ProCurve → CX), Controllers, ClearPass, Routers |
| [[Juniper - Mist]] | 126 | Mist APs (AP12-AP63), EX switches (EX2200-EX9253), QFX DC, SRX firewalls, MX routers, SSR, PTX/ACX/NFX |
| [[Fortinet]] | 229 | FortiAP (46), FortiGate (70), FortiSwitch (30), FortiAnalyzer (16), FortiMail (10), FortiWeb (11), FortiManager (9), FortiSandbox (7), FortiADC (7), FortiDDoS (6), FortiAuthenticator (6), FortiWLC (5), FortiExtender (6) |
| [[Ruckus - CommScope]] | 122 | ZoneFlex APs (802.11n → Wi-Fi 7 R770), ZoneDirector/SmartZone controllers, SmartZone software, ICX switches (6xxx-8200) |
| [[Ubiquiti]] | 217 | UniFi APs (802.11n → Wi-Fi 7 U7/E7), Switches (Gen1 → ECS), Gateways (USG/UDM/UCG/EdgeRouter), Cameras, airMAX/airFiber, Access, Talk |
| [[Arista]] | 97 | 7010-7800R3 switches, Campus CCS, Wireless C-series APs, CloudVision appliances |
| [[Alcatel-Lucent]] | 105 | OmniSwitch (6400-9912), Stellar APs (802.11n → Wi-Fi 7 AP15xx), OAW controllers, OmniVista, OmniPCX/Rainbow |
| **TOTAL** | **~1,100+** | |

---

## Status Definitions

| Status | Meaning | Action Required |
|--------|---------|-----------------|
| **EOL** (End of Life) | Past end of support — no patches, no updates, no TAC | **Immediate replacement** — security risk |
| **EOS** (End of Sale) | Can no longer purchase; still receiving support/patches | **Plan migration** — budget for replacement |
| **Last Call** | EOS imminent or just announced; still orderable | **Buy now or plan transition** |
| **Active** | Currently sold and fully supported | No action needed |

## Urgency Levels

| Urgency | Criteria |
|---------|----------|
| **Critical** | Past EOL, no support, security vulnerability risk |
| **High** | EOS with support ending within 18 months |
| **Medium** | EOS with 18+ months of support remaining, or Last Call |
| **Low** | Active products with no EOL announced |

---

## Key Lifecycle Policies by Vendor

### [[Extreme Networks]]
- XIQ Connect (free tier) allows basic management indefinitely
- Hardware fully functional without cloud license
- GA → EOS → EOSL lifecycle phases

### [[Cisco]]
- DNA license required for full functionality post-EOS
- Cisco publishes formal EOL milestones: EoS → EoSW → EoRFA → EoVSP → EoSCR → LDoS
- IOS XE devices continue forwarding without license but lose cloud management

### [[Meraki]]
- **Hardware ceases ALL traffic upon license expiration** — most aggressive policy
- No on-prem fallback option

### [[Aruba]]
- Standard 5-year support post-EOS
- Hardware operates standalone but loses cloud features without Central subscription
- HPE/Juniper acquisition may affect future lifecycle

### [[Juniper - Mist]]
- Publishes formal TSB (Technical Service Bulletin) for each EOL
- SKU Transformations ≠ True EOL (new part numbers, same hardware)
- HPE acquisition (Jul 2025) may affect future policies
- SRX300 series branch firewalls remain active (no EOL announced)

### [[Fortinet]]
- Standard policy: EOS (End of Support) = EOO (End of Order) + 60 months
- FortiAPs/FortiSwitches managed by FortiGate = ZERO per-device subscription
- F-series transitioning to G-series (2025-2026)

### [[Ruckus - CommScope]]
- 60-day grace period after license expiration
- APs retain config and continue PSK/802.1x after expiration
- SmartZone 300 EOS Dec 2024, last ship Jun 2025
- All Wi-Fi 5 APs reached EOS by Jan-Feb 2022

### [[Ubiquiti]]
- No traditional EOL announcements — uses "Vintage" and "Legacy" classifications
- **Vintage**: No longer manufactured, gets critical bug fixes
- **Legacy**: Stopped receiving updates entirely
- USG family officially EOL Nov 2024
- EdgeRouter/EdgeSwitch lines effectively EOL

### [[Arista]]
- Perpetual EOS license — hardware works without CloudVision
- Publishes formal End of Sale advisories
- Strong OpenConfig support aids migration

### [[Alcatel-Lucent]]
- 5-year hardware warranty post-EOS (Limited Lifetime Warranty on some)
- PALM (ProActive Lifecycle Management) tracks device lifecycle in OmniVista
- Fully abandoned Aruba OEM controller-based WLAN → Stellar distributed architecture
- OmniSwitch 6900 Gen1 cannot VC with Gen2 — critical for upgrade planning

---

## Data Sources

- Official vendor EOL/lifecycle pages and support portals
- CDW street pricing (Feb 2026)
- Park Place Technologies EOSL databases
- TeamKCI EOL reference guides
- Service Express EOL databases
- Vendor community forums and technical bulletins
- DataCenter360 lifecycle mirrors
