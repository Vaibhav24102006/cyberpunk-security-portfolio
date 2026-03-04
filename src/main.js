import { scene, camera, renderer, composer, resize } from './core/scene.js';
import { setupWorld, updateWorld } from './world/world.js';
import { setupParticles, updateParticles } from './world/particles.js';
import { setupScroll } from './interaction/scroll.js';
import { startEngine } from './core/engine.js';

// Setup everything
setupWorld(scene);
setupParticles(scene);
setupScroll(camera, scene);

// Handle resize
window.addEventListener('resize', () => resize(camera, renderer, composer));

// Start the animation loop
startEngine({
    renderer,
    scene,
    camera,
    composer,
    onUpdate: () => {
        updateWorld();
        updateParticles();
    }
});
