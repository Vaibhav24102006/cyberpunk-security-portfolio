# Cyberpunk Perspective Narrative Update Plan

## 1. Scene Layout & World Zones (`zones.js` & `world.js`)
We will remap the world along the Z-axis with 12 unit intervals:
- **Hero / Boot Sequence**: `z = 0` (Central glowing core + Torus hex ring + point light)
- **About / Identity Scan**: `z = -12` (Network nodes: 5-8 spheres connected by thin glowing lines)
- **Projects / Threat Analysis**: `z = -24` (Holographic database: 6 cylinder pillars forming an avenue)
- **Skills / Capability Matrix**: `z = -36` (Orbiting skill system: Central core + 6 orbiting technology nodes)
- **Contact / Secure Channel**: `z = -48` (Portal: Emissive blue Torus + particle spiral pulling inward)

## 2. Camera Motion (`scroll.js`)
- Implement lateral drift logic during scroll:
  - `x = Math.sin(scrollProgress * Math.PI * 2) * 2`
  - `y = 4 + Math.sin(scrollProgress * Math.PI * 4) * 0.5`
- Easing will use `power2.out` for smooth scrub transitions.

## 3. Lighting & Atmosphere (`world.js` & `scene.js`)
- **Fog**: Update to `new THREE.FogExp2(0x0a0a1f, 0.015)` (deep blue).
- **Lights**:
  - Global: Low `AmbientLight` (0.2) + Subtle `DirectionalLight` (0.5).
  - Local: Strong cyan `PointLight` at Hero (`z=0`), magenta at Projects (`z=-24`), blue at Contact (`z=-48`).

## 4. UI Polish (`index.html` & `style.css`)
- Update text content to match the narrative (Boot Sequence, Identity Scan, etc.).
- Add typing animation to the Hero section.
- Enhance glassmorphism with `backdrop-filter: blur(10px)` and cyan glowing borders.

## 5. Particle System Control (`particles.js`)
- Maintain existing 3-layer sizes, but adjust depths to match the extended 50-unit world.
- Add a specific attractor logic at `z=-48` (Contact Portal) to spiral particles inward if they pass near it.

## Execution Steps
1. Update `zones.js` coordinates to multiples of 12.
2. Rewrite `world.js` Switch statement to build the exact Narrative sets (Network nodes with lines, Pillars, Orbiting cores).
3. Update `scroll.js` with the lateral sinusoidal camera drift.
4. Update `scene.js` and `world.js` lighting/fog.
5. Update HTML/CSS for the UI narrative text and typing effects.
