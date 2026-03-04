export function startEngine({ renderer, scene, camera, composer, onUpdate }) {
    // Use a clock for delta timing if needed later
    // const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        // Custom updates (particles, world rotation) passed from main.js
        if (onUpdate) onUpdate();

        // Render using postprocessing composer instead of raw renderer
        composer.render();
    }

    animate();
}
