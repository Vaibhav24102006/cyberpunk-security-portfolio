import * as THREE from 'three';

const particleSystems = [];

function createParticleLayer(scene, count, size, color, spreadXZ, spreadY, spreadZOffset = 0) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * spreadXZ;               // x
        positions[i + 1] = (Math.random() - 0.5) * spreadY;            // y
        positions[i + 2] = (Math.random() - 0.5) * spreadXZ + spreadZOffset; // z
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        size: size,
        color: color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    return particles;
}

export function setupParticles(scene) {
    // Media query performance check for mobile devices
    const isMobile = window.innerWidth < 800;
    const factor = isMobile ? 0.3 : 1.0; // Reduce by 70% on mobile

    // 1. Stars (Far away background, slow, huge spread)
    const stars = createParticleLayer(scene, Math.floor(1000 * factor), 0.05, 0xffffff, 200, 100, -20);
    stars.userData = {
        rotSpeedY: 0.0002,
        driftSpeedZ: 0
    };

    // 2. Dust (Mid depth, moderate, medium spread)
    const dust = createParticleLayer(scene, Math.floor(800 * factor), 0.08, 0xa855f7, 120, 80, -10);
    dust.userData = {
        rotSpeedY: 0.0004,
        driftSpeedZ: 0.005
    };

    // 3. Data Particles (Foreground, fastest, narrow spread)
    const dataParticles = createParticleLayer(scene, Math.floor(500 * factor), 0.15, 0x00f0ff, 80, 50, 0);
    dataParticles.userData = {
        rotSpeedY: 0.0008,
        driftSpeedZ: 0.02
    };

    particleSystems.push(stars, dust, dataParticles);
}

export function updateParticles() {
    particleSystems.forEach(system => {
        // Rotation for parallax feel
        system.rotation.y += system.userData.rotSpeedY;

        // Z-drift for continuous forward motion
        const positions = system.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            let px = positions[i];
            let py = positions[i + 1];
            let pz = positions[i + 2];

            pz += system.userData.driftSpeedZ;

            // Vortex effect near contact zone (z = -48)
            // If particle gets close to z=-48, pull it to center
            const distToPortal = Math.abs(pz - (-48));
            if (distToPortal < 10) {
                // Pull X and Y towards 0
                const pullStrength = (10 - distToPortal) * 0.002;
                px -= px * pullStrength;
                py -= py * pullStrength;

                // Add a spiral torque
                const spiralX = px * Math.cos(0.05) - py * Math.sin(0.05);
                const spiralY = px * Math.sin(0.05) + py * Math.cos(0.05);
                px = spiralX;
                py = spiralY;
            }

            // Loop back if they drift too far past camera (assuming max z around +10)
            if (pz > 15) {
                pz = -70; // send them to back of the world
                // reset X and Y randomly safely
                px = (Math.random() - 0.5) * 120;
                py = (Math.random() - 0.5) * 80;
            }

            positions[i] = px;
            positions[i + 1] = py;
            positions[i + 2] = pz;
        }
        system.geometry.attributes.position.needsUpdate = true;
    });
}
