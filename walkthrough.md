# Walkthrough: Cyberpunk Portfolio Website

The cinematic Three.js + GSAP portfolio website has been fully implemented exactly as you specified with the **"Cyberpunk Security Lab"** theme!

## Architecture Implemented
The project was structured into logical modules for a professional, scalable architecture:
- **`src/main.js`**: The entry point that initializes the scene and starts the engine.
- **`src/scene.js`**: Sets up the Three.js Scene, Camera, WebGLRenderer, and Bloom post-processing.
- **`src/world.js`**: Contains the cyberpunk environment (neon grid, floating holographic geometry, and directional/point lighting).
- **`src/particles.js`**: Implements the 3-layer particle system (stars, dust, data particles) using `BufferGeometry` and `PointsMaterial`.
- **`src/scroll.js`**: Integrates GSAP `ScrollTrigger` to animate the camera deeper into the scene as the user scrolls, and fades in/out the HTML panels.
- **`src/engine.js`**: Handles the `requestAnimationFrame` loop, passing updates to the particles/objects and rendering the composer.

## Visual Features Included

1. **Cinematic Environment**: Dark background with fog and atmospheric point lights.
2. **Neon Grid Floor**: A glowing cyan grid that creates the cyberpunk foundation.
3. **Floating Geometry**: Icosahedrons, toruses, and octahedrons that slowly rotate and drift using sine wave logic.
4. **Atmospheric Particles**: Over 2000 particles spread across 3 depth layers with different speeds, sizes, and colors (white, purple, cyan).
5. **Bloom Post-Processing**: Used the `postprocessing` library (`BloomEffect`) to make the emissive materials truly glow.
6. **Scroll-Driven Camera**: The camera physically moves along the Z-axis into the 3D scene when scrolling.
7. **Glassmorphism UI**: The HTML content overlays the canvas with blurred, semi-transparent backgrounds and neon borders.

## How to Test

The Vite dev server is currently running. You can view the live site in your browser at:
**`http://localhost:5173`**

Make sure to scroll down the page to experience the 3D camera drift and the panel fade animations.
