# Extreme Networks Switch Portfolio

Every Extreme switch with approximate MSRP and equivalents across 9 competitors: **Cisco, Aruba, Juniper, Meraki, Fortinet, Ruckus, Ubiquiti, Arista, ALE**.

> **⚠️ Prices are estimates** (training data cutoff May 2025) — verify with current price lists before quoting externally.

## Cambium-to-Extreme Migration Map

These Extreme switches are validated drop-in replacements for specific Cambium cnMatrix SKUs from prior BOM review:

| Cambium SKU | Cambium Model | Extreme Replacement | Why |
|---|---|---|---|
| MXEX3024FxFxA01 | EX3024F | **5120-24X-4Y** | 24× 10G SFP+ fiber agg, same role, ~40% cheaper than 5520-24X |
| MXEX3052MxPA11 | EX3052RM-P | **4120-48MW-4Y** | 48× mGig PoE++ + 25G uplinks — exact functional match |
| MX-EX2010PxA-U | EX2010-P | **5320-16P-4XE** | Closest small-port PoE access (16-port vs Cambium 8-port) |

> AP mapping (not shown in switch portfolio): Cambium X7-55X → **Extreme AP5050U-1-WR**; Cambium XV2-23T → **AP410e-WR**.

---

## Series Overview

| Series | Role | Positioning |
|---|---|---|
| **4120** | Mid-tier Universal Access | Newer (~2024), cost-optimized access with 10G/25G uplinks |
| **5120** | Aggregation / ToR | Fiber aggregation, cheaper than 5520 |
| **5320** | Entry Universal Access | Best $/port for Fabric Engine deploys |
| **5420F** | Universal Access | Mid-range workhorse |
| **5520** | Flagship Access / Distribution | Full Universal Platform, 25G uplinks |
| **5720** | Multi-Gig Flagship | Wi-Fi 6/7 AP backhaul, highest port speeds |
| **7520** | DC Access / Leaf | 25G leaf with 100G uplinks |
| **7720** | DC Spine | 100G / 400G spine |
| **X435** | Legacy (EXOS) | Small-port access — use 5320 for new deploys |

---

## Pricing Legend

Each series has two comparison tables:
- **Primary**: vs Cisco, Aruba, Juniper, Meraki
- **Extended**: vs Fortinet, Ruckus, Ubiquiti, Arista, ALE

---

## 4120 Series — Mid-tier Universal Access

**Primary** (Cisco / Aruba / Juniper / Meraki)

| Model | Extreme | Cisco | Aruba | Juniper | Meraki |
|---|---|---|---|---|---|
| 4120-24P-4X | **$2,200** | C9200L-24P-4X $3,495 | CX 6100 24G PoE $2,295 | EX2300-24P $3,295 | MS130-24P $2,795 |
| 4120-48P-4X | **$3,800** | C9200L-48P-4X $5,995 | CX 6100 48G PoE $3,995 | EX2300-48P $4,995 | MS130-48P $4,795 |
| 4120-24MW-4Y | **$4,200** | C9300L-24UXG-4X $7,995 | CX 6300M 24 MG $5,495 | EX4100-24MP $6,995 | MS355-24X2 $6,495 |
| 4120-48MW-4Y | **$6,800** | C9300L-48UXG-4X $11,995 | CX 6300M 48 MG $8,995 | EX4100-48MP $10,495 | MS355-48X2 $9,995 |

**Extended** (Fortinet / Ruckus / Ubiquiti / Arista / ALE)

| Model | Extreme | Fortinet | Ruckus | Ubiquiti | Arista | ALE |
|---|---|---|---|---|---|---|
| 4120-24P-4X | $2,200 | FS-124F-POE $1,595 | ICX 7150-24P $2,395 | USW-Pro-24-PoE $799 | CCS-720DP-24S $4,200 | OS6360-P24 $2,195 |
| 4120-48P-4X | $3,800 | FS-148F-POE $2,795 | ICX 7150-48P $3,895 | USW-Pro-48-PoE $1,099 | CCS-720DP-48S $4,500 | OS6360-P48 $3,650 |
| 4120-24MW-4Y | $4,200 | FS-424E-FPOE $3,895 | ICX 7650-24P $5,495 | USW-Pro-Max-24 $1,399 | CCS-720XP-24Y6 $6,995 | OS6865-P16X $4,895 |
| 4120-48MW-4Y | $6,800 | FS-448E-FPOE $5,995 | ICX 7650-48P $8,795 | USW-Pro-Max-48 $1,999 | CCS-720XP-48Y6 $7,500 | OS6865-P48X $7,995 |

---

## 5120 Series — Aggregation / ToR

**Primary**

| Model | Extreme | Cisco | Aruba | Juniper | Meraki |
|---|---|---|---|---|---|
| 5120-24X-4Y | **$9,500** | C9300X-24Y $15,995 | CX 8100 24XT4X $10,995 | QFX5120-32C $18,995 | MS425-16 $13,995 |
| 5120-48X-8Y | **$15,500** | C9300X-48Y $21,995 | CX 8360 32Y4C $18,995 | QFX5120-48Y $24,995 | MS425-32 $17,995 |

**Extended**

| Model | Extreme | Fortinet | Ruckus | Ubiquiti | Arista | ALE |
|---|---|---|---|---|---|---|
| 5120-24X-4Y | $9,500 | FS-1024E $7,995 | ICX 7750-26Q $12,995 | USW-EnterpriseXG-24 $1,999 | CCS-720XP-24ZY8 $11,500 | OS6900-X20 $14,995 |
| 5120-48X-8Y | $15,500 | FS-1048E $12,995 | ICX 7850-48F $18,995 | — | CCS-720XP-48ZC2 $13,500 | OS6900-X48 $22,995 |

---

## 5320 Series — Entry Universal Access

**Primary**

| Model | Extreme | Cisco | Aruba | Juniper | Meraki |
|---|---|---|---|---|---|
| 5320-16P-4XE | **$1,650** | C9200L-24P-4X $3,495 | CX 6000 12G PoE $1,395 | EX2300-C-12P $1,895 | MS130-12P $1,995 |
| 5320-24P-8XE | **$2,495** | C9200-24P $4,495 | CX 6200F 24G PoE $2,695 | EX3400-24P $3,995 | MS210-24P $3,495 |
| 5320-48P-8XE | **$3,695** | C9200-48P $6,495 | CX 6200F 48G PoE $3,995 | EX3400-48P $5,995 | MS210-48FP $5,495 |
| 5320-48T-8XE | **$2,495** | C9200-48T $4,295 | CX 6200F 48G $2,595 | EX3400-48T $4,295 | MS210-48 $3,995 |

**Extended**

| Model | Extreme | Fortinet | Ruckus | Ubiquiti | Arista | ALE |
|---|---|---|---|---|---|---|
| 5320-16P-4XE | $1,650 | FS-108F-POE $895 | ICX 7150-C12P $1,495 | USW-16-PoE $399 | CCS-720DP-24S $4,200 | OS6360-P10 $1,295 |
| 5320-24P-8XE | $2,495 | FS-224E-POE $1,795 | ICX 7250-24P $2,895 | USW-Pro-24-PoE $799 | CCS-720DP-24S $4,200 | OS6360-P24X $2,395 |
| 5320-48P-8XE | $3,695 | FS-248E-POE $2,995 | ICX 7250-48P $4,495 | USW-Pro-48-PoE $1,099 | CCS-720DP-48S $4,500 | OS6360-P48X $3,200 |
| 5320-48T-8XE | $2,495 | FS-248D $1,995 | ICX 7250-48 $2,895 | USW-48 $699 | CCS-720DP-48S $4,500 | OS6360-48 $1,995 |

---

## 5420F Series — Universal Access

**Primary**

| Model | Extreme | Cisco | Aruba | Juniper | Meraki |
|---|---|---|---|---|---|
| 5420F-24P-4XE | **$2,995** | C9300-24P $5,995 | CX 6300F 24G PoE $3,895 | EX4100-24P $4,995 | MS250-24P $4,795 |
| 5420F-48P-4XE | **$4,995** | C9300-48P $8,995 | CX 6300F 48G PoE $5,495 | EX4100-48P $7,495 | MS250-48FP $7,995 |
| 5420F-16MW-32P-4XE | **$6,495** | C9300-48UXM $12,995 | CX 6300F 48G MG $7,495 | EX4100-48MP $10,495 | MS355-48X $9,495 |

**Extended**

| Model | Extreme | Fortinet | Ruckus | Ubiquiti | Arista | ALE |
|---|---|---|---|---|---|---|
| 5420F-24P-4XE | $2,995 | FS-424E-POE $2,695 | ICX 7450-24P $3,795 | USW-Pro-Max-24-PoE $1,299 | CCS-720XP-24Y6 $6,995 | OS6860E-P24 $3,495 |
| 5420F-48P-4XE | $4,995 | FS-448E-POE $3,995 | ICX 7450-48P $5,995 | USW-Pro-Max-48-PoE $1,599 | CCS-720XP-48Y6 $7,500 | OS6860E-P48 $5,800 |
| 5420F-16MW-32P-4XE | $6,495 | FS-448E-FPOE $5,995 | ICX 7650-48ZP $7,895 | — | CCS-720XP-48ZC2 $13,500 | OS6865-P48X $7,995 |

---

## 5520 Series — Flagship Access / Distribution

**Primary**

| Model | Extreme | Cisco | Aruba | Juniper | Meraki |
|---|---|---|---|---|---|
| 5520-24T | **$3,995** | C9300-24T $5,495 | CX 6400 v2 24G $4,795 | EX4400-24T $5,295 | MS350-24 $5,295 |
| 5520-24W | **$4,349** | C9300-24P $5,995 | CX 6400 v2 24 PoE $5,295 | EX4400-24P $5,995 | MS350-24P $5,995 |
| 5520-24X | **$11,995** | C9500-24Y4C $24,995 | CX 8360 24XT4C $14,995 | QFX5110-32Q $22,995 | MS425-16 $13,995 |
| 5520-48T | **$6,995** | C9300-48T $8,995 | CX 6400 v2 48G $7,295 | EX4400-48T $8,495 | MS350-48 $8,995 |
| 5520-48W | **$7,995** | C9300-48P $8,995 | CX 6400 v2 48 PoE $8,495 | EX4400-48P $9,495 | MS350-48FP $10,995 |
| 5520-12MW-36W | **$8,995** | C9300-48UXM $12,995 | CX 6300F 48G MG $7,495 | EX4400-48MP $11,495 | MS355-48X $9,495 |

**Extended**

| Model | Extreme | Fortinet | Ruckus | Ubiquiti | Arista | ALE |
|---|---|---|---|---|---|---|
| 5520-24T | $3,995 | FS-524D $2,895 | ICX 7550-24 $4,495 | USW-EnterpriseXG-24 $1,999 | CCS-722XPM-24ZY8 $7,500 | OS6860E-24 $3,895 |
| 5520-24W | $4,349 | FS-524D-POE $3,495 | ICX 7550-24P $5,295 | — | CCS-722XPM-24ZY8 $7,500 | OS6860E-P24 $4,195 |
| 5520-24X | $11,995 | FS-1024F $9,995 | ICX 7750-26Q $12,995 | — | CCS-720XP-24ZY8 $11,500 | OS6900-X20 $14,995 |
| 5520-48T | $6,995 | FS-548D $4,995 | ICX 7550-48 $6,995 | — | CCS-722XPM-48ZY8 $9,500 | OS6860E-48 $6,195 |
| 5520-48W | $7,995 | FS-548D-POE $5,795 | ICX 7550-48P $7,995 | — | CCS-722XPM-48ZY8 $9,500 | OS6860E-P48 $6,895 |
| 5520-12MW-36W | $8,995 | FS-448E-FPOE $5,995 | ICX 7650-48ZP $7,895 | — | CCS-720XP-48ZC2 $13,500 | OS6865-P48X $7,995 |

---

## 5720 Series — Multi-Gig Flagship

**Primary**

| Model | Extreme | Cisco | Aruba | Juniper | Meraki |
|---|---|---|---|---|---|
| 5720-24MW | **$6,995** | C9300-24UX $10,995 | CX 6300M 24 MG $7,995 | EX4400-24MP $8,995 | MS390-24U $9,995 |
| 5720-24MXW | **$8,495** | C9300X-24HX $14,995 | CX 6400 MG 24 $10,995 | EX4400-24X $12,995 | MS390-24UX $13,995 |
| 5720-48MW | **$12,995** | C9300-48UX $17,995 | CX 6300M 48 MG $13,495 | EX4400-48MP $14,995 | MS390-48U $15,995 |
| 5720-48MXW | **$14,995** | C9300X-48HX $22,995 | CX 6400 MG 48 $17,495 | EX4400-48X $19,995 | MS390-48UX $21,995 |

**Extended**

| Model | Extreme | Fortinet | Ruckus | Arista | ALE |
|---|---|---|---|---|---|
| 5720-24MW | $6,995 | FS-424E-FPOE $3,895 | ICX 7650-24 $5,995 | CCS-720XP-24MG $8,500 | OS6860N-P24M $7,495 |
| 5720-24MXW | $8,495 | FS-524D-FPOE $4,995 | ICX 7650-24ZP $7,995 | CCS-722XPM-24ZY8 $7,500 | OS6860N-P24Z $9,495 |
| 5720-48MW | $12,995 | FS-448E-FPOE $5,995 | ICX 7650-48P $8,795 | CCS-720XP-48MG $12,500 | OS6860N-P48M $11,995 |
| 5720-48MXW | $14,995 | FS-548D-FPOE $7,495 | ICX 7850-48FS $15,995 | CCS-722XPM-48ZY8 $9,500 | OS6860N-P48Z $15,995 |

---

## 7520 Series — Data Center Access / Leaf

**Primary**

| Model | Extreme | Cisco | Aruba | Juniper |
|---|---|---|---|---|
| 7520-48Y | **$28,995** | N9K-C93180YC-FX3 $42,995 | CX 10000-48Y6C $38,995 | QFX5120-48Y $34,995 |
| 7520-48XT | **$24,995** | N9K-C93108TC-FX $34,995 | CX 8325-48XT4Y $27,995 | QFX5120-48T $28,995 |

**Extended**

| Model | Extreme | Fortinet | Arista | ALE |
|---|---|---|---|---|
| 7520-48Y | $28,995 | FS-1048E $22,995 | 7050SX3-48YC8 $32,995 | OS10K-XNI-U48E $44,995 |
| 7520-48XT | $24,995 | FS-1048F $19,995 | 7050TX3-48C8 $29,995 | OS10K-XNI-T48 $36,995 |

---

## 7720 Series — Data Center Spine

**Primary**

| Model | Extreme | Cisco | Aruba | Juniper |
|---|---|---|---|---|
| 7720-32C | **$44,995** | N9K-C9332D-GX2B $74,995 | CX 8400-32C $49,995 | QFX5220-32CD $64,995 |
| 7720-32X | **$74,995** | N9K-C9364D-GX2A $119,995 | CX 10000-32X4C $89,995 | QFX5700-32CD $94,995 |

**Extended**

| Model | Extreme | Arista | ALE |
|---|---|---|---|
| 7720-32C | $44,995 | 7060CX2-32S $54,995 | OS10K-XNI-Q32 $69,995 |
| 7720-32X | $74,995 | 7060DX5-32 $99,995 | — |

---

## X435 Series — Legacy (EXOS)

> For new deployments, prefer 5320 series (Fabric Engine ready).

**Primary**

| Model | Extreme | Cisco | Aruba | Juniper | Meraki |
|---|---|---|---|---|---|
| X435-8P-4S | **$1,095** | C1000-8P-2G-L $1,295 | CX 6000 8G PoE $895 | EX2300-C-12P $1,895 | MS120-8FP $995 |
| X435-24P-4S | **$1,895** | C1000-24P-4G-L $2,295 | CX 6000 24G PoE $1,695 | EX2300-24P $3,295 | MS120-24P $2,295 |

**Extended**

| Model | Extreme | Fortinet | Ruckus | Ubiquiti | ALE |
|---|---|---|---|---|---|
| X435-8P-4S | $1,095 | FS-108F-POE $795 | ICX 7150-C08P $1,095 | USW-Flex $99 | OS6350-P10 $995 |
| X435-24P-4S | $1,895 | FS-124F-POE $1,595 | ICX 7150-24P $2,395 | USW-24-PoE $379 | OS6350-P24 $1,695 |

---

## Competitor Notes

- **Cisco** — highest prices across the board, mandatory DNA licenses double effective cost
- **Aruba** — closest on hardware price, adds Central subscription
- **Juniper** — mid-priced, Mist AI bundled for newer EX4100/4400
- **Meraki** — cloud-only, license mandatory, hardware bricks without it
- **Fortinet** — cheap hardware but only makes sense if you already run FortiGate
- **Ruckus** — competitive pricing, thinner portfolio at DC spine
- **Ubiquiti** — dramatically lower hardware cost, no mandatory license, limited enterprise features (no real MACsec, limited fabric, basic ACLs)
- **Arista** — premium DC brand, CCS campus line is competitive but adds CloudVision subscription
- **ALE** — comparable hardware pricing, perpetual AOS licenses, SPB fabric included

## Key Takeaways

- **Extreme is consistently 30-50% cheaper than Cisco** at the same performance tier
- **5320 and 4120** are the sweet spots for cost-optimized Fabric Engine deployments
- **5720 MXW models** are the Wi-Fi 7 AP backhaul play (10GBASE-T at the access port)
- **7520/7720** beat Cisco Nexus on price by 30-40% with Fabric Engine parity for many DC use cases
- **Ubiquiti** is a budget shortcut but shouldn't be compared on features — it's a different class
- **X435 legacy** should only be used for spares — 5320 series is the new-deploy replacement

## Related

- [[TCO Comparison]]
- [[Licensing Models]]
- [[Cloud Licensing]]

#switches #competitive #pricing #extreme
