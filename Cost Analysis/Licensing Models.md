---
tags: [cost-analysis]
---
# Licensing Models

| Vendor | Model | Mandatory | Free Tier | HW Works Without | Lock-In | Exit Cost |
|--------|-------|-----------|-----------|------------------|---------|-----------|
| [[Extreme Networks]] | Flexible (Perpetual + Subscription) | No | Yes | Yes | Low | Low |
| [[Cisco]] | Mandatory Subscription (DNA) | Yes | No | No | High | High |
| [[Meraki]] | Mandatory Subscription (All-in) | Yes | No | No | Very High | Very High |
| [[Aruba]] | Required Subscription | Yes | No | Yes | Medium | Medium |
| [[Juniper - Mist]] | Required Subscription | Yes | No | Yes | Medium | Medium |
| [[Fortinet]] | Perpetual + Support | No | No | Yes | Medium-High | Medium |
| [[Ruckus - CommScope]] | Flexible (Perpetual + Subscription) | No | No | Yes | Medium-Low | Low-Medium |
| [[Ubiquiti]] | Free (No Licensing) | No | Yes | Yes | Low | Low |
| [[Arista]] | Perpetual EOS + Subscription CloudVision | No | No | Yes | Medium | Medium |
| [[Alcatel-Lucent]] | Perpetual AOS + Subscription OmniVista | No | No | Yes | Medium-Low | Medium |

## Detailed License Tiers

### Extreme Networks

- **Model:** Flexible (Perpetual + Subscription)
- **Tiers:** Navigator (Free) → Pilot ($150/dev/yr) → CoPilot ($180/dev/yr)
- **Lock-In:** Low — Hardware fully functional without cloud license. Can switch between cloud, on-prem, or hybrid at any time.
- **Exit Cost:** Low — No hardware bricking. Export configs and migrate. Universal hardware reduces stranded assets.

### Cisco

- **Model:** Mandatory Subscription (DNA)
- **Tiers:** DNA Essentials (~$100/dev/yr) → DNA Advantage (~$175-450/dev/yr) → DNA Premier
- **Lock-In:** High — DNA license required for full functionality. Features degrade without active subscription. Proprietary protocols.
- **Exit Cost:** High — Significant migration effort. DNA/ISE/SD-Access deeply integrated. Retraining costs for new platform.

### Meraki

- **Model:** Mandatory Subscription (All-in)
- **Tiers:** Enterprise ($150-500/dev/yr) — single tier, all-in
- **Lock-In:** Very High — Hardware completely non-functional without active license. Cloud-only — no on-prem escape hatch.
- **Exit Cost:** Very High — 100% hardware forklift required. Zero residual value from Meraki hardware. Full network redesign needed.

### Aruba

- **Model:** Required Subscription
- **Tiers:** Central Foundation ($75-110/dev/yr) → Central Advanced ($150-165/dev/yr)
- **Lock-In:** Medium — Subscription required for cloud management. Hardware can operate standalone but loses cloud features.
- **Exit Cost:** Medium — AOS-CX is standards-based. Hardware retains value. Migration effort moderate.

### Juniper - Mist

- **Model:** Required Subscription
- **Tiers:** Wired Assurance ($100/sw/yr) + Wireless Assurance ($150/AP/yr) + WAN Assurance
- **Lock-In:** Medium — Mist cloud subscription required for AI features. Junos-based hardware works standalone with reduced functionality.
- **Exit Cost:** Medium — Standard Junos CLI/config. Hardware has secondary market value. Clean subscription model easy to forecast.

### Fortinet

- **Model:** Perpetual + Support
- **Tiers:** FortiCare (support) + FortiGuard (security subs) bundles
- **Lock-In:** Medium-High — No per-device license but deeply coupled to FortiGate. Security Fabric creates interdependency.
- **Exit Cost:** Medium — Perpetual hardware licenses. But tightly integrated stack means replacing one product may require replacing several.

### Ruckus - CommScope

- **Model:** Flexible (Perpetual + Subscription)
- **Tiers:** Ruckus One ($120-150/dev/yr cloud) or SmartZone (perpetual on-prem)
- **Lock-In:** Medium-Low — Choice between cloud subscription and perpetual on-prem. Hardware works with either model.
- **Exit Cost:** Low-Medium — Standard hardware. SmartZone perpetual provides on-prem safety net. Moderate migration effort.

### Ubiquiti

- **Model:** Free (No Licensing)
- **Tiers:** Free — no license tiers
- **Lock-In:** Low — No licensing lock-in whatsoever. But proprietary hardware and limited standards support create soft lock-in.
- **Exit Cost:** Low — Low-cost hardware means low stranded asset cost. But no enterprise migration tools or professional services.

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

