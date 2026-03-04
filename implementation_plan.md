# Cyberpunk Portfolio Website — Implementation Plan

A Three.js + GSAP + Vite portfolio site with a **"Cyberpunk Security Lab"** theme for a cybersecurity / AI security / web dev professional.

## Proposed Changes

### Project Setup

#### [NEW] package.json & Vite config
- Initialize a Vite vanilla-JS project in the workspace directory
- Install `three`, `gsap`, `postprocessing` (for bloom)
- Configure Vite with the proper dev server

#### [NEW] index.html
- Canvas element for Three.js
- HTML overlay sections: Hero, About, Projects, Experience, Skills, Contact
- Load `src/main.js` as a module

---

### Three.js Core (`src/`)

#### [NEW] src/main.js
- Entry point: initializes scene, attaches scroll, starts render loop

#### [NEW] src/scene.js
- `Scene`, `PerspectiveCamera`, `WebGLRenderer`
- Cinematic gradient background (purple → deep blue → black) via shader or fog
- Ambient + directional + point lights (cyan/magenta tones)
- Neon grid floor using `GridHelper` + custom emissive material
- Floating geometry decorations (torus, icosahedron, octahedron) with glow materials
- Neon ring elements (TorusGeometry with emissive material)
- `UnrealBloomPass` post-processing for glow

#### [NEW] src/particles.js
- Three particle systems: stars (far), dust (mid), data particles (near)
- `BufferGeometry` + `PointsMaterial` with sprite textures
- Idle animation in the render loop

#### [NEW] src/scroll.js
- GSAP `ScrollTrigger` tied to the HTML scroller
- Animates camera position + rotation through the 3D scene as user scrolls
- Triggers section fade-in/out transitions

---

### Styling

#### [NEW] src/style.css
- Full-screen canvas behind a scroll container
- Glassmorphism panels (`backdrop-filter: blur`, semi-transparent backgrounds)
- Neon accent colors (cyan `#00f0ff`, magenta `#ff00ff`, purple `#a855f7`)
- Smooth section transitions, glowing text/borders
- Responsive layout
- Google Font (Orbitron for headings, Inter for body)

---

### Assets

#### [NEW] public/textures/
- Programmatically generated particle sprite (or a tiny glowing circle PNG)

---

## Verification Plan

### Browser Testing
1. Run `npm run dev` in the project directory
2. Open the Vite dev server URL in the browser
3. Verify:
   - WebGL canvas renders with gradient background and fog
   - Neon grid floor is visible and glowing
   - Particles animate in the background
   - Scrolling moves the camera through the scene
   - All 6 HTML sections (Hero → Contact) appear as glassmorphism cards
   - Bloom/glow post-processing is active
   - No console errors
