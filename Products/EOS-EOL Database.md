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
| [[Cisco]] | 124 | Aironet (1700-4800), Catalyst Wi-Fi 6/6E/7 (9105-CW9178), Catalyst switches (2960/3000/9000), Nexus DC (2000-9500), Small Business (SG/CBS), ISR 4000, ASR 1000, Catalyst 8000 SD-WAN, ASA 5500-X, Firepower, Secure Firewall, WLC/9800/CW9800 controllers |
| [[Meraki]] | 45 | MR APs (MR20-MR86, Wave 2 → Wi-Fi 6E), MS switches (MS120-MS450), MX security appliances (MX64-MX450) |
| [[Aruba]] | 129 | APs (802.11n → Wi-Fi 7 AP-745), Instant On APs, CX switches (6000-8400), Instant On switches, Gateways (9004/9012/9240), Controllers, ClearPass, AirWave, Silver Peak/EdgeConnect SD-WAN |
| [[Juniper - Mist]] | 126 | Mist APs (AP12-AP63), EX switches (EX2200-EX9253), QFX DC, SRX firewalls, MX routers, SSR, PTX/ACX/NFX |
| [[Fortinet]] | 263 | FortiAP (53 incl. K-series Wi-Fi 7), FortiGate (89 incl. G-series SP5), FortiSwitch (31), FortiAnalyzer (16), FortiMail (10), FortiWeb (11), FortiManager (9), FortiSandbox (7), FortiADC (7), FortiDDoS (6), FortiAuthenticator (6), FortiWLC (5), FortiExtender (6), FortiWiFi (3), FortiVoice (5) |
| [[Ruckus - CommScope]] | 122 | ZoneFlex APs (802.11n → Wi-Fi 7 R770), ZoneDirector/SmartZone controllers, SmartZone software, ICX switches (6xxx-8200) |
| [[Ubiquiti]] | 217 | UniFi APs (802.11n → Wi-Fi 7 U7/E7), Switches (Gen1 → ECS), Gateways (USG/UDM/UCG/EdgeRouter), Cameras, airMAX/airFiber, Access, Talk |
| [[Arista]] | 116 | 7010-7800R3 switches, Campus CCS/C-series APs, CloudVision/vEOS appliances, DMF/CCF monitoring, Pluribus Freedom 9000, ETM/Untangle NG Firewall |
| [[Alcatel-Lucent]] | 105 | OmniSwitch (6400-9912), Stellar APs (802.11n → Wi-Fi 7 AP15xx), OAW controllers, OmniVista, OmniPCX/Rainbow |
| **TOTAL** | **~1,370+** | |

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
- ISR 4000 series fully EOS Nov 2023-Jan 2025; replaced by Catalyst 8000 SD-WAN
- ASA 5500-X series being replaced by Firepower → Secure Firewall 1200/3100/4200
- Catalyst 9800-40/80 wireless controllers EOS Dec 2025; replaced by CW9800M/H
- Small Business SG/CBS lines transitioning to Catalyst 1200/1300

### [[Meraki]]
- **Hardware ceases ALL traffic upon license expiration** — most aggressive policy
- No on-prem fallback option
- CW9164/CW9176I/CW9178I support both Meraki and Catalyst/DNA management
- MS120/MS125/MS390 EOS Mar 2025; MS210/MS225 EOS Apr 2026; MS250/MS350/MS355 EOS Aug 2025
- MR Wave 2 APs (MR33/MR42/MR52/MR53) support ending Jul 2026

### [[Aruba]]
- Standard 5-year support post-EOS
- Hardware operates standalone but loses cloud features without Central subscription
- HPE/Juniper acquisition may affect future lifecycle
- Wi-Fi 7 APs: AP-734/AP-735/AP-745 active; Wi-Fi 6E AP-615/635/655 active
- CX 6000-8400 switches are current gen; legacy ProCurve/OfficeConnect fully EOL
- Silver Peak EdgeConnect SD-WAN acquired → HPE Aruba EdgeConnect current gen

### [[Juniper - Mist]]
- Publishes formal TSB (Technical Service Bulletin) for each EOL
- SKU Transformations ≠ True EOL (new part numbers, same hardware)
- HPE acquisition (Jul 2025) may affect future policies
- SRX300 series branch firewalls remain active (no EOL announced)

### [[Fortinet]]
- Standard policy: EOS (End of Support) = EOO (End of Order) + 60 months
- FortiAPs/FortiSwitches managed by FortiGate = ZERO per-device subscription
- F-series transitioning to G-series (2025-2026): FortiGate 100F first F-series EOO (Apr 2026)
- G-series (SP5 ASIC): 30G/50G/70G announced Feb 2025; 700G/900G announced May 2025
- FortiAP K-series (Wi-Fi 7): 231K/233K/241K/243K/441K/443K now shipping; G-series APs going EOO mid-2025

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
- DMF/CCF monitoring platform winding down — migrate to UCN (Universal Cloud Networking)
- Pluribus Freedom 9000 / NVOS EOS Dec 2024 (acquired 2022)
- ETM/Untangle NG Firewall line: Q6E/Q6EWL last call Jan 2026

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
