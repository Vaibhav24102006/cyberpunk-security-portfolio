import { scene, camera, renderer, composer, resize } from './scene.js';
import { setupWorld, updateWorld } from './world.js';
import { setupParticles, updateParticles } from './particles.js';
import { setupScroll } from './scroll.js';
import { startEngine } from './engine.js';

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
