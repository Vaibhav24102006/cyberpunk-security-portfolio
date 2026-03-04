import * as THREE from 'three';

const particleSystems = [];

function createParticleLayer(scene, count, size, color, spreadXZ, spreadY) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * spreadXZ;     // x
        positions[i + 1] = (Math.random() - 0.5) * spreadY;  // y
        positions[i + 2] = (Math.random() - 0.5) * spreadXZ; // z
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        size: size,
        color: color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false, // Prevents particles from sorting poorly
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    return particles;
}

export function setupParticles(scene) {
    // 1. Stars (Far away, very small, slow)
    const stars = createParticleLayer(scene, 1000, 0.05, 0xffffff, 100, 50);
    stars.userData = { rotSpeed: 0.0002 };

    // 2. Dust (Mid, slightly bigger, cyan/purple tint)
    const dust = createParticleLayer(scene, 800, 0.08, 0xa855f7, 60, 30);
    dust.userData = { rotSpeed: 0.0005 };

    // 3. Data Data Particles (Near, largest, fast)
    const dataParticles = createParticleLayer(scene, 500, 0.12, 0x00f0ff, 30, 20);
    dataParticles.userData = { rotSpeed: 0.001 };

    particleSystems.push(stars, dust, dataParticles);
}

export function updateParticles() {
    particleSystems.forEach(system => {
        system.rotation.y += system.userData.rotSpeed;
    });
}
