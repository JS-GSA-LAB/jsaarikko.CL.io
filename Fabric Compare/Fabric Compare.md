---
tags: [fabric]
---
# Fabric Compare

SPB (Extreme & ALE) vs EVPN-VXLAN (Arista) comparison for campus networking.

## Comparison Table

| Aspect | Extreme (Fabric Connect) | ALE (SPB) | Arista (EVPN-VXLAN) |
|--------|--------------------------|-----------|---------------------|
| IEEE/IETF Standard | IEEE 802.1aq (SPB/SPBM) | IEEE 802.1aq (SPB) | IETF RFC 7432 + RFC 8365 (EVPN-VXLAN) |
| Architecture Type | Native L2/L3 fabric — no overlay | Native L2/L3 fabric — no overlay | Overlay — VXLAN tunnels over IP underlay |
| Control Plane | IS-IS (link-state, auto-discovery) | IS-IS (link-state, auto-discovery) | MP-BGP EVPN (explicit configuration) |
| Encapsulation | 802.1ah MAC-in-MAC (native Ethernet) | 802.1ah MAC-in-MAC (native Ethernet) | VXLAN (UDP encapsulation over IP) |
| Segmentation | I-SID (24-bit — 16M service instances) | I-SID (24-bit — 16M service instances) | VNI (24-bit — 16M segments) |
| Topology Discovery | Automatic via IS-IS — zero-touch | Automatic via IS-IS | Manual configuration or AVD automation |
| Multipath/ECMP | Built-in via IS-IS equal-cost paths | Built-in via IS-IS equal-cost paths | BGP multipath + ECMP over underlay |
| Redundancy Model | IS-IS fast-reroute (<50ms failover) | IS-IS fast-reroute + Virtual Chassis | MLAG/SWAG + BFD for fast failover |
| BGP Expertise Required | No — IS-IS only (simpler protocol) | No — IS-IS only | Yes — MP-BGP with EVPN address-family |
| Route Reflectors | Not needed — IS-IS floods natively | Not needed — IS-IS floods natively | Recommended at scale for BGP scalability |
| Typical Deployment Time | Hours (campus fabric) | Hours to days (campus fabric) | Days to weeks (campus EVPN-VXLAN) |
| Professional Services | Rarely needed for campus fabric | Sometimes needed for initial design | Typically required for campus EVPN-VXLAN |
| Primary Design Origin | Campus / enterprise (purpose-built) | Campus / enterprise (purpose-built) | Data center (adapted for campus) |
| Automation Framework | XIQ CoPilot + ZTP + Fabric auto-attach | OmniVista Cirrus + Intelligent Fabric | AVD (Arista Validated Designs) + Ansible |
| Network Mgmt Required | No — fabric works without cloud mgmt | OmniVista recommended for visibility | CloudVision recommended ($35/sw/mo) |
| Multi-Vendor Interop | Fabric is Extreme-only; standard L3 at edges | SPB is ALE-only; standard L3 at edges | EVPN-VXLAN supported by Juniper, Cisco, etc. |
| Troubleshooting Complexity | IS-IS adjacency + I-SID — straightforward | IS-IS adjacency + I-SID — straightforward | BGP EVPN routes + VXLAN tunnels + underlay — complex |
| Max Fabric Scale (campus) | 1,000+ switches (proven) | 500+ switches (campus proven) | 10,000+ switches (DC-proven, campus new) |
| Switch Platforms | 5320/5420/5520/5720 Universal | OmniSwitch 6860/6900/9900 | CCS-720XP/720DP campus series |
| Wireless Integration | Fabric auto-attach — APs join fabric natively | Unified Access — APs managed via OmniVista | Separate CloudVision CUE for wireless |

## Differentiators

### Deployment Speed

**Winner:** Extreme

Fabric Connect deploys in hours with IS-IS auto-discovery. ALE SPB is similar but slightly more manual. EVPN-VXLAN campus requires BGP config, route reflector planning, and VTEP mapping — typically days to weeks.

- **Extreme:** Fabric Connect zero-touch: connect cable, fabric auto-discovers, I-SID services propagate.
- **ALE:** SPB auto-discovery via IS-IS. OmniVista Cirrus simplifies initial setup but less automated than Extreme.
- **Arista:** EVPN-VXLAN requires explicit BGP peering config on every leaf/spine + VXLAN VTEP mapping.

---

### Operational Simplicity

**Winner:** Extreme

IS-IS is one of the simplest routing protocols to operate. No BGP peering tables, no route reflectors, no complex state machines. Campus teams with L2/L3 skills can manage SPB fabrics from day one.

- **Extreme:** IS-IS adjacencies + I-SID show commands = complete fabric visibility.
- **ALE:** IS-IS based like Extreme. OmniVista provides visibility but less mature cloud management.
- **Arista:** BGP EVPN show commands, VXLAN tunnel debugging, underlay vs overlay troubleshooting layers.

---

### BGP Expertise Requirement

**Winner:** Extreme

EVPN-VXLAN requires BGP expertise that most campus networking teams lack. Fabric Connect uses IS-IS — a campus-friendly protocol that doesn't require data-center-level routing skills.

- **Extreme:** Zero BGP. IS-IS auto-discovers topology and computes shortest paths natively.
- **ALE:** Zero BGP. Same IS-IS advantage as Extreme — campus teams can operate without DC skills.
- **Arista:** MP-BGP with EVPN address-family, route targets, route distinguishers, BGP communities.

---

### Data Center Switching

**Winner:** Arista

Arista's 7050X/7500R/7800R series with EVPN-VXLAN is the undisputed industry leader in data center switching. If DC-to-campus fabric convergence is the primary goal, Arista has the deeper DC portfolio.

- **Extreme:** Extreme SLX 9000 covers DC. Fabric Connect extends campus-to-DC via standard L3 routing.
- **ALE:** OmniSwitch 9900 for DC edge/aggregation. Not a DC core contender.
- **Arista:** Industry-leading DC switching with sub-microsecond latency, 400GbE, and massive scale.

---

### Automation & DevOps

**Winner:** Arista

Arista's AVD (Arista Validated Designs) with Ansible is the most comprehensive network-as-code framework. For organizations with DevOps culture, AVD is best-in-class.

- **Extreme:** XIQ CoPilot AI + ZTP + Fabric auto-attach. Simpler but less DevOps-oriented.
- **ALE:** OmniVista Cirrus + Intelligent Fabric. Limited DevOps/CI-CD tooling compared to Arista.
- **Arista:** AVD generates complete EVPN-VXLAN configs, supports CI/CD pipelines, GitOps workflows.

---

### Multi-Vendor Fabric

**Winner:** Arista

EVPN-VXLAN is supported by Arista, Juniper, Cisco, and others — enabling multi-vendor fabric if needed. SPB fabric is Extreme-only, though it interoperates via standard L3 at boundaries.

- **Extreme:** Fabric Connect is Extreme-proprietary. Standard OSPF/BGP at fabric edge for interop.
- **ALE:** ALE SPB is ALE-only. Standard L3 routing at fabric boundaries for interop.
- **Arista:** EVPN-VXLAN interoperates with Juniper QFX, Cisco Nexus/Catalyst, and others.

---

### Licensing & Cost of Entry

**Winner:** Extreme

Fabric Connect is included in EXOS at no extra cost. XIQ Navigator is free. Arista requires CloudVision subscription ($35/sw/mo) for lifecycle automation and MACsec is a separate license.

- **Extreme:** Fabric Connect: included. XIQ Navigator: free. No per-switch subscription for fabric.
- **ALE:** SPB included in AOS. OmniVista Cirrus requires subscription. Lower cost than Arista.
- **Arista:** CloudVision: $35/sw/mo. MACsec: separate license. AVD: free but requires Ansible expertise.

---

### Campus Fabric Maturity

**Winner:** Extreme

Fabric Connect has been in production campus deployments for 10+ years with thousands of customers. Arista's campus switching (CCS-720) launched in 2023 — campus EVPN-VXLAN is proven in DC but new for campus.

- **Extreme:** 10+ years in production campus. 50,000+ customers. NFL, Bundesliga, US DoD.
- **ALE:** 8+ years SPB deployments. Strong in education, hospitality, and government verticals.
- **Arista:** CCS-720 campus line launched 2023. DC EVPN-VXLAN is mature; campus adaptation is new.

---

### Scale & Performance

**Winner:** Tie

Both fabrics scale well beyond typical campus requirements. SPB is proven to 1,000+ campus switches. EVPN-VXLAN scales to 10,000+ in DC. For a 50-500 switch campus, both are more than adequate.

- **Extreme:** IS-IS scales efficiently. 1,000+ switch campus fabrics in production.
- **ALE:** OmniSwitch SPB proven to 500+ switches in campus. Adequate for most deployments.
- **Arista:** EVPN-VXLAN with route reflectors scales to hyperscale. Massive headroom for campus.

---

### No-Overlay Simplicity

**Winner:** Extreme

Fabric Connect is a native fabric — no VXLAN tunnels, no UDP encapsulation, no MTU issues. Data stays in Ethernet frames. EVPN-VXLAN adds 50-byte overhead per packet and requires MTU planning across the entire underlay.

- **Extreme:** MAC-in-MAC encapsulation: native Ethernet. No MTU concerns. No tunnel state.
- **ALE:** Same MAC-in-MAC advantage as Extreme. No overlay, no MTU impact, native Ethernet.
- **Arista:** VXLAN adds 50-byte UDP/IP overhead. Requires 9000+ MTU across all underlay links.

---

