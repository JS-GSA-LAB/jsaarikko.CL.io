---
tags: [cost-analysis]
---
# TCO Comparison

> Scenario: **100 APs / 50 Access Switches / 5 Core Switches / 10 SD-WAN Sites**

## Side-by-Side TCO

| Vendor | Hardware | Mgmt Platform | Annual License | Annual Support | 3-Year TCO | 5-Year TCO |
|--------|----------|---------------|----------------|----------------|------------|------------|
| [[Ubiquiti]] | $65,745 | $0 | $0/yr | $0/yr | **$65,745** | **$65,745** |
| [[Fortinet]] | $359,175 | $35,000 | $15,000/yr | $32,000/yr | **$535,175** | **$629,175** |
| [[Alcatel-Lucent]] | $509,500 | $0 | $18,600/yr | $30,000/yr | **$655,300** | **$752,500** |
| [[Extreme Networks]] | $553,725 | $0 | $27,000/yr | $28,000/yr | **$718,725** | **$828,725** |
| [[Ruckus - CommScope]] | $609,225 | $0 | $23,250/yr | $35,000/yr | **$783,975** | **$900,475** |
| [[Aruba]] | $554,225 | $0 | $42,625/yr | $38,000/yr | **$796,100** | **$957,350** |
| [[Juniper - Mist]] | $654,575 | $0 | $41,500/yr | $42,000/yr | **$905,075** | **$1,072,075** |
| [[Arista]] | $667,000 | $0 | $44,100/yr | $45,000/yr | **$934,300** | **$1,112,500** |
| [[Meraki]] | $645,575 | $0 | $107,500/yr | $0/yr | **$968,075** | **$1,183,075** |
| [[Cisco]] | $849,175 | $25,000 | $69,750/yr | $52,000/yr | **$1,239,425** | **$1,482,925** |

## Detailed Breakdown

### Ubiquiti

- **Hardware:** APs: 100x U7 Pro Max @ $289 | Access: 50x USW-Pro-48-PoE @ $699 | Core: 5x USW-Pro-Aggregation @ $379 | SD-WAN: N/A
- **Licensing:** Zero recurring license fees. Free UniFi Network controller (self-hosted or cloud). No per-device costs whatsoever.
- **Support:** No TAC, no SLA, no vendor support. Community forums + Discord only. RMA through retail channels.
- **Notes:** No licensing, no support contracts, no SD-WAN. Community support only. Dramatically lower cost, dramatically fewer features.

### Fortinet

- **Hardware:** APs: 100x FAP-441K @ $1,395 | Access: 50x FS-448E @ $3,495 | Core: 5x FS-1024E @ $7,995 | SD-WAN: 10x FG-40F @ $495
- **Licensing:** No per-AP or per-switch license. FortiCare UTP bundle for 10 FortiGates: ~$15,000/yr. SD-WAN included in FortiGate. Low recurring but need FortiGate infrastructure.
- **Support:** FortiCare: ~$32,000/yr. Includes firmware, TAC, RMA. FortiGuard subscriptions separate for UTM.
- **Notes:** No per-device license, but FortiGate + FortiManager/FortiAnalyzer required. FortiCare bundles.

### Alcatel-Lucent

- **Hardware:** APs: 100x OAW-AP1411 @ $1,295 | Access: 50x OS6860E-P48 @ $5,800 | Core: 5x OS6900-X72 @ $18,000 | SD-WAN: N/A
- **Licensing:** OmniVista Cirrus: 155 devices @ $120/yr = $18,600/yr. On-prem OmniVista 2500 alternative: ~$8,000 perpetual + maintenance.
- **Support:** ALE Partner Support: ~$30,000/yr. Software updates + TAC + RMA.
- **Notes:** AOS perpetual on switches. OmniVista Cirrus subscription for management. No SD-WAN. Strong value in education/government.

### Extreme Networks

- **Hardware:** APs: 100x AP5020 @ $1,495 | Access: 50x 5520-48T @ $6,995 | Core: 5x 5720-24MW @ $8,495 | SD-WAN: 10x Appliance @ $1,200
- **Licensing:** XIQ Navigator (free) or Pilot ($150/dev/yr for 155 devices = $23,250/yr). CoPilot optional add-on. SD-WAN $75/site/mo = $9,000/yr. Total annual: ~$27,000 at Pilot tier.
- **Support:** ExtremeWorks Premier: ~18% of hardware annually. 24x7 TAC + software updates.
- **Notes:** XIQ Navigator free; Pilot $150/dev/yr on 100 APs + 55 switches = $23,250/yr. No mandatory license. Support ~$28K/yr.

### Ruckus - CommScope

- **Hardware:** APs: 100x R770 @ $1,595 | Access: 50x ICX 7550-48 @ $6,995 | Core: 5x ICX 7850-48C @ $19,995 | SD-WAN: N/A
- **Licensing:** Ruckus One: 100 APs @ $150/yr = $15,000 + 55 switches @ $120/yr = $6,600. SmartZone on-prem alternative (perpetual). Total cloud: ~$23,250/yr.
- **Support:** CommScope WatchDog: ~$35,000/yr. Standard support + software maintenance.
- **Notes:** Ruckus One cloud license. No SD-WAN offering. ICX switches solid but aging.

### Aruba

- **Hardware:** APs: 100x AP-735 @ $1,695 | Access: 50x CX 6300F 48G @ $5,495 | Core: 5x CX 8360 32Y @ $18,995 | SD-WAN: 10x EC-S @ $1,500
- **Licensing:** Central Advanced: 100 APs @ $165/yr = $16,500 + 55 switches @ $150/yr = $8,250 + 10 SD-WAN @ $125/mo = $15,000. Total: ~$42,625/yr.
- **Support:** Aruba Foundation Care: ~$38,000/yr. 24x7 support + software updates.
- **Notes:** Aruba Central Advanced required for full features. Subscription model.

### Juniper - Mist

- **Hardware:** APs: 100x AP47 @ $1,799 | Access: 50x EX4400-48T @ $7,495 | Core: 5x QFX5120-48T @ $15,995 | SD-WAN: 10x SSR120 @ $1,995
- **Licensing:** Wireless Assurance: 100 APs @ $150/yr = $15,000 + Wired Assurance: 55 switches @ $100/yr = $5,500 + WAN Assurance: 10 @ $175/mo = $21,000. Marvis included. Total: ~$41,500/yr.
- **Support:** Juniper Care: ~$42,000/yr. Next-business-day or 24x7 options.
- **Notes:** Mist Assurance subscriptions. Clean model with Marvis AI included.

### Arista

- **Hardware:** APs: 100x C-460 @ $2,095 | Access: 50x CCS-720XP-48Y6 @ $7,500 | Core: 5x CCS-720XP-48ZC2 @ $13,500 | SD-WAN: 10x VeloCloud Edge 520 @ $1,500
- **Licensing:** CloudVision: 55 switches @ $35/mo = $23,100/yr + CUE Wireless: 100 APs @ $175/yr = $17,500/yr + VeloCloud: 10 sites @ ~$29/mo = $3,500/yr. Total: ~$44,100/yr.
- **Support:** A-Care support: ~$45,000/yr. 24x7 TAC + software updates + RMA.
- **Notes:** CloudVision subscription for management. EOS perpetual. VeloCloud SD-WAN newly acquired. Premium campus pricing reflects DC heritage.

### Meraki

- **Hardware:** APs: 100x MR78 @ $1,799 | Access: 50x MS390-48 @ $7,695 | Core: 5x MS425-32 @ $14,995 | SD-WAN: 10x MX68 @ $595
- **Licensing:** Meraki license mandatory: 100 APs @ $200/yr = $20,000 + 50 access @ $350/yr = $17,500 + 5 core @ $500/yr = $2,500 + 10 MX @ $150/yr = $1,500. Enterprise license for full features: add ~66K. Total: ~$107,500/yr.
- **Support:** Support included in license. No separate support contract, but no license = no support = no functioning hardware.
- **Notes:** All-in license (includes support), but mandatory — hardware bricks without it. ~$150-500/dev/yr.

### Cisco

- **Hardware:** APs: 100x CW9178I @ $2,495 | Access: 50x C9300-48T @ $8,995 | Core: 5x C9500-24Y4C @ $24,995 | SD-WAN: 10x C1111-8P @ $2,495
- **Licensing:** DNA Advantage required: 100 APs @ $175/yr = $17,500 + 50 access @ $400/yr = $20,000 + 5 core @ $1,200/yr = $6,000 + 10 SD-WAN @ $200/mo = $24,000. Total: ~$69,750/yr.
- **Support:** SmartNet Total Care: ~$52,000/yr. Required for TAC + software + RMA. SWSS for DNA.
- **Notes:** DNA Advantage mandatory (~$450/dev/yr). Catalyst Center appliance ~$25K. SmartNet ~$52K/yr.

