import * as THREE from 'three';

const objects = [];

export function setupWorld(scene) {
    // 1. Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    // Deep purple/blue point light for atmosphere
    const pointLight = new THREE.PointLight(0xa855f7, 2, 50);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    // 2. Cyberpunk Grid Floor
    const grid = new THREE.GridHelper(100, 100, 0x00f0ff, 0x003333);
    grid.position.y = -1.5;
    // Fade grid material for glow/fog effect combination
    grid.material.transparent = true;
    grid.material.opacity = 0.5;
    scene.add(grid);

    // 3. Floating Holographic Geometry
    const geometry1 = new THREE.IcosahedronGeometry(0.8, 0);
    const material1 = new THREE.MeshStandardMaterial({
        color: 0x00f0ff,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x004444,
        transparent: true,
        opacity: 0.8,
        wireframe: true,
    });

    const geometry2 = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
    const material2 = new THREE.MeshStandardMaterial({
        color: 0xff00ff,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x440044,
    });

    const geometry3 = new THREE.OctahedronGeometry(0.6, 0);
    const material3 = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        metalness: 0.5,
        roughness: 0.5,
        wireframe: true,
    });

    const geometries = [geometry1, geometry2, geometry3];
    const materials = [material1, material2, material3];

    for (let i = 0; i < 25; i++) {
        const geo = geometries[Math.floor(Math.random() * geometries.length)];
        const mat = materials[Math.floor(Math.random() * materials.length)];
        const mesh = new THREE.Mesh(geo, mat);

        // Spread them along Z to give depth during scroll
        mesh.position.set(
            (Math.random() - 0.5) * 30, // x spread
            Math.random() * 8 - 2,      // y spread (height)
            (Math.random() - 0.5) * 50  // z spread (depth)
        );

        // Give them random initial rotation
        mesh.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );

        // Custom properties for animation
        mesh.userData = {
            rotX: (Math.random() - 0.5) * 0.01,
            rotY: (Math.random() - 0.5) * 0.01,
            floatSpeed: Math.random() * 0.02 + 0.01,
            initialY: mesh.position.y,
            time: Math.random() * 100, // random start time for sine wave
        };

        scene.add(mesh);
        objects.push(mesh);
    }
}

export function updateWorld() {
    objects.forEach((obj) => {
        obj.userData.time += obj.userData.floatSpeed;

        // Rotation
        obj.rotation.x += obj.userData.rotX;
        obj.rotation.y += obj.userData.rotY;

        // Floating bounce
        obj.position.y = obj.userData.initialY + Math.sin(obj.userData.time) * 0.5;
    });
}
