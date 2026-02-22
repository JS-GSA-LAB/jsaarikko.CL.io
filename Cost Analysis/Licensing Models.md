---
tags: [cost-analysis]
---
# Licensing Models

| Vendor | Model | Mandatory | Free Tier | HW Works Without | Lock-In | Exit Cost |
|--------|-------|-----------|-----------|------------------|---------|-----------|
| [[Extreme Networks]] | Platform ONE / XIQ Subscription | No | Yes (Connect) | Yes | Low | Low |
| [[Cisco]] | Mandatory Subscription (DNA) | Yes | No | Partial | High | High |
| [[Meraki]] | Mandatory Subscription (All-in) | Yes | No | No | Very High | Very High |
| [[Aruba]] | Central Foundation / Advanced | Yes | No | Yes | Medium | Medium |
| [[Juniper - Mist]] | Assurance Subscriptions | Yes | No | Yes | Medium | Medium |
| [[Fortinet]] | FortiGuard Bundles (Gateway-only) | No | No | Yes | Medium-High | Medium |
| [[Ruckus - CommScope]] | RUCKUS One (Device-Agnostic) | No | No | Yes | Medium-Low | Low-Medium |
| [[Ubiquiti]] | Free (No Licensing) | No | Yes | Yes | Low | Low |
| [[Arista]] | Perpetual EOS + Subscription CloudVision | No | No | Yes | Medium | Medium |
| [[Alcatel-Lucent]] | Perpetual AOS + Subscription OmniVista | No | No | Yes | Medium-Low | Medium |

---

## Detailed License Tiers

### Extreme Networks

- **Model:** Platform ONE Standard Networking — subscription-based, works across XIQ, XIQ-C, and XIQ-SE management apps
- **Tiers:**
  - **Connect** (Free) — Basic device management at no cost
  - **Pilot** (~$107/device/yr with ExtremeWorks) — Full cloud management, Tier A-D device tiers
  - **CoPilot** — AI-driven network optimization, advanced analytics
  - **Navigator** — Premium tier with full feature set
- **Platform ONE Tiers:** Tier A (Universal AP/Switch), Tier B (AP3xx/5xxx switches), Tier C (Legacy), Tier D (Low-end)
- **Add-on Licenses:** NAC (ExtremeCloud IQ NAC), Premier Switch (enhanced switch features), MACsec
- **Trial:** 30-day trial available for all subscription types
- **Lifecycle:** GA → EOS → EOSL phases for both XIQ and Platform ONE
- **Lock-In:** Low — Hardware fully functional without cloud license. Can switch between cloud, on-prem, or hybrid at any time.
- **Exit Cost:** Low — No hardware bricking. Export configs and migrate. Universal hardware reduces stranded assets.
- **Source:** ExtremeCloud IQ v25.6.0 Licensing Guide

### Cisco (Catalyst / DNA)

- **Model:** Mandatory Subscription (DNA)
- **Tiers:**
  - **DNA Essentials** (~$92/AP/yr wireless, ~$165/yr switching annualized from 3yr) — Base management, monitoring, automation
  - **DNA Advantage** (~$400-500/device/yr) — AI Analytics, Cisco AI Network Analytics, Assurance features
  - **DNA Premier** — Being discontinued; replaced by Catalyst Software Subscription (DNX)
- **Catalyst Software Subscription (DNX):** New unified licensing replacing DNA — covers switching + wireless + SD-WAN
- **SLP (Smart Licensing with Policy):** All Cisco IOS XE 17.3.2+ devices use policy-based licensing with Cisco Smart Account
- **Lock-In:** High — DNA license required for full functionality. Features degrade without active subscription. Proprietary protocols.
- **Exit Cost:** High — Significant migration effort. DNA/ISE/SD-Access deeply integrated. Retraining costs for new platform.

### Meraki

- **Model:** Mandatory Subscription (All-in)
- **Tiers:**
  - **Enterprise** ($119-500/device/yr) — Single tier, all features included
  - APs: ~$119/AP/yr, Switches: ~$73/yr, MX Security: ~$249/yr
- **CW (Catalyst Wireless):** New unified platform — CW9164/CW9176I/CW9178I hardware runs under either Meraki cloud or Catalyst/DNA management
- **Critical:** Hardware ceases to pass ALL traffic upon license expiration. Zero functionality without active license.
- **Lock-In:** Very High — Cloud-only, no on-prem escape hatch.
- **Exit Cost:** Very High — 100% hardware forklift required. Zero residual value. Full network redesign needed.

### Aruba (HPE)

- **Model:** Central Foundation / Advanced subscription
- **Tiers:**
  - **Central Foundation** (~$93/AP/yr, ~$216/switch/yr for 24-port, ~$100/gateway/yr) — Core management, monitoring, automation
  - **Central Advanced** (~2x Foundation pricing) — AI Insights, Client Insights, UXI integration, ClearPass integration
- **HPE GreenLake:** Aruba licensing increasingly delivered through HPE GreenLake consumption model
- **Cloud NAC:** Separate add-on for network access control
- **Note:** HPE/Juniper acquisition may lead to platform convergence
- **Lock-In:** Medium — Subscription required for cloud management. Hardware can operate standalone but loses cloud features.
- **Exit Cost:** Medium — AOS-CX is standards-based. Hardware retains value.

### Juniper - Mist

- **Model:** Assurance Subscriptions (Wired + Wireless + WAN)
- **Tiers:**
  - **Wireless Assurance** (~$150-268/AP/yr) — WiFi management, Marvis AI included
  - **Wired Assurance** (~$150-250/switch/yr) — Switch management via Mist cloud
  - **WAN Assurance** — SSR-based SD-WAN management
  - **Marvis AI** — Included with Assurance subscriptions (not separate add-on)
- **SSR (Session Smart Router):** Bandwidth-tiered licensing for SD-WAN
- **HPE Acquisition:** Now under HPE umbrella — future licensing may align with Aruba Central
- **Lock-In:** Medium — Mist cloud subscription required for AI features. Junos-based hardware works standalone.
- **Exit Cost:** Medium — Standard Junos CLI/config. Hardware has secondary market value.

### Fortinet

- **Model:** FortiGuard Bundles — gateway-only licensing (APs/switches are FREE)
- **Tiers:**
  - **FortiCare** (support only) — 8x5, 24x7, or Premium tiers
  - **FortiGuard ATP** — AV, IPS, App Control, Botnet, plus 24x7 FortiCare
  - **FortiGuard UTP** (~$428/yr for FG-60F) — ATP + Web Filter, DNS Filter, Anti-Spam, plus FortiSandbox Cloud
  - **FortiGuard Enterprise** — UTP + Industrial Security, OT Protocol, Inline CASB, ZTNA
- **Key Advantage:** FortiAPs and FortiSwitches managed by FortiGate require ZERO per-device subscription. Only the FortiGate firewall needs FortiGuard.
- **FortiLink:** License-free management of FortiSwitches via FortiGate
- **Lock-In:** Medium-High — No per-device license but deeply coupled to FortiGate. Security Fabric creates interdependency.
- **Exit Cost:** Medium — Perpetual hardware licenses. But tightly integrated stack means replacing one product may require replacing several.

### Ruckus - CommScope

- **Model:** RUCKUS One — device-agnostic licensing (1 license = 1 AP or 1 switch, same SKU)
- **Tiers:**
  - **Essentials** (~$170/device/yr) — Core management, monitoring, 1-month data retention
  - **Professional** (~$315/device/yr) — AI-powered analytics (RUCKUS AI), 12-month data retention, IDS/IPS, compliance reports, advanced RBAC
- **Activation:** Unique activation code per license, 180-day activation grace period, future start date selectable
- **Terms:** 1, 3, or 5-year subscriptions. Customer types: REC (End Customer), MSP (Managed Service Provider)
- **Expiration Behavior:** 60-day grace period → APs retain config and continue servicing PSK/802.1x clients → Cloud management removed → Cloud-dependent services stop (DPSK, captive portal, analytics)
- **SmartZone 300:** End of Sale Dec 2024, Last Ship Jun 2025 — migrate to RUCKUS One or Virtual SmartZone
- **Lock-In:** Medium-Low — Choice between cloud and on-prem. Hardware works with either model.
- **Exit Cost:** Low-Medium — Standard hardware. Moderate migration effort.

### Ubiquiti

- **Model:** Free (No Licensing)
- **Tiers:**
  - **UniFi Network** — FREE, all network features included (firewall, VLAN, VPN, DPI, guest portal, IDS/IPS)
  - **CyberSecure** (optional) — $99/yr standard, $499/yr enterprise (enhanced threat intelligence via Proofpoint)
  - **UniFi Talk** (optional) — $9.99-24.99/mo/line (VoIP)
  - **Identity Enterprise** (optional) — $5/user/mo (SSO, advanced RADIUS)
- **E-Rate:** Category 2 eligible for K-12 schools and libraries — zero recurring fees maximizes funding
- **Management:** Self-hosted controller (Linux) or console hardware (Dream Machine/Cloud Gateway). Free remote management via Site Manager.
- **Lock-In:** Low — No licensing lock-in. Proprietary hardware creates soft lock-in.
- **Exit Cost:** Low — Low-cost hardware = low stranded asset cost. No enterprise migration tools.

### Arista

- **Model:** Perpetual EOS + Subscription CloudVision
- **Tiers:** CloudVision Lite ($20/sw/mo) → CloudVision Full ($35/sw/mo) + CUE Wireless ($175/AP/yr)
- **Lock-In:** Medium — EOS is perpetual and hardware works without CloudVision. However, CloudVision subscription required for full lifecycle management and automation features.
- **Exit Cost:** Medium — EOS is standards-based with strong OpenConfig support. Hardware retains value. EVPN-VXLAN configs are portable. Migration effort moderate.

### Alcatel-Lucent

- **Model:** Perpetual AOS + Subscription OmniVista
- **Tiers:** OmniVista Cirrus ($120/device/yr) or OmniVista 2500 (perpetual ~$8K)
- **Lock-In:** Medium-Low — AOS is perpetual. Hardware works without OmniVista. SPB fabric is vendor-specific but standards-based (IEEE 802.1aq).
- **Exit Cost:** Medium — AOS configs are CLI-based. SPB is ALE-specific. Hardware has moderate secondary market value. Migration requires fabric redesign.
