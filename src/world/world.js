import * as THREE from 'three';
import { zones } from './zones.js';

const objects = [];

export function setupWorld(scene) {
    // 1. Lighting (Cyberpunk Palette)
    const ambient = new THREE.AmbientLight(0xffffff, 0.2); // low ambient
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xa855f7, 0.5); // faint purple rim light
    dirLight.position.set(0, 10, 10);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 2, 30);
    cyanLight.position.set(0, 5, 0); // Hero zone glow
    scene.add(cyanLight);

    const magentaLight = new THREE.PointLight(0xff00ff, 1.5, 40);
    magentaLight.position.set(-10, 5, -20); // Projects zone bounce
    scene.add(magentaLight);

    // Grid generation moved to bottom to span whole scene

    // Shared Materials
    const materialCyan = new THREE.MeshStandardMaterial({
        color: 0x00f0ff, metalness: 0.8, roughness: 0.2, emissive: 0x004444, wireframe: true,
    });
    const materialCyanSolid = new THREE.MeshStandardMaterial({
        color: 0x00f0ff, metalness: 0.8, roughness: 0.2, emissive: 0x008888,
    });
    const materialMagenta = new THREE.MeshStandardMaterial({
        color: 0xff00ff, metalness: 0.9, roughness: 0.1, emissive: 0x440044,
    });
    const materialPurple = new THREE.MeshStandardMaterial({
        color: 0x8b5cf6, metalness: 0.5, roughness: 0.5, wireframe: true,
    });
    const materialBlueEmissive = new THREE.MeshStandardMaterial({
        color: 0x0044ff, metalness: 0.1, roughness: 0.8, emissive: 0x0022aa,
    });
    const materialLine = new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.4 });

    zones.forEach(zone => {
        // --- HERO ZONE ---
        if (zone.name === 'hero') {
            // Core
            const coreGeo = new THREE.IcosahedronGeometry(1.2, 0);
            const core = new THREE.Mesh(coreGeo, materialCyanSolid);
            core.position.set(0, 4, zone.z);
            core.userData = { isHeroCore: true, time: 0 };
            scene.add(core);
            objects.push(core);

            // Ring
            const ringGeo = new THREE.TorusGeometry(3, 0.05, 16, 100);
            const ring = new THREE.Mesh(ringGeo, materialCyan);
            ring.position.set(0, 4, zone.z);
            ring.rotation.x = Math.PI / 2;
            ring.userData = { isHeroRing: true, time: 0 };
            scene.add(ring);
            objects.push(ring);

            // Beam Down
            const beamGeo = new THREE.CylinderGeometry(0.1, 0.1, 8, 8);
            const beamMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending });
            const beam = new THREE.Mesh(beamGeo, beamMat);
            beam.position.set(0, 0, zone.z);
            scene.add(beam);
        }

        // --- ABOUT ZONE (Network Nodes) ---
        if (zone.name === 'about') {
            const nodeCount = 6;
            const nodes = [];
            const radius = 6;

            // Central Core
            const aboutCoreGeo = new THREE.OctahedronGeometry(0.8, 0);
            const aboutCore = new THREE.Mesh(aboutCoreGeo, materialPurple);
            aboutCore.position.set(0, 2, zone.z);
            aboutCore.userData = { isFloating: true, time: Math.random() * 100, floatSpeed: 0.02, initialY: 2 };
            scene.add(aboutCore);
            objects.push(aboutCore);
            nodes.push(aboutCore.position);

            // Surrounding Nodes
            for (let i = 0; i < nodeCount; i++) {
                const angle = (i / nodeCount) * Math.PI * 2;
                const nx = Math.cos(angle) * radius;
                const ny = 2 + (Math.random() - 0.5) * 3;
                const nz = Math.sin(angle) * radius;

                const nodeGeo = new THREE.SphereGeometry(0.3, 16, 16);
                const node = new THREE.Mesh(nodeGeo, materialCyanSolid);
                node.position.set(nx, ny, zone.z + nz);
                node.userData = { isFloating: true, time: Math.random() * 100, floatSpeed: 0.01 + Math.random() * 0.02, initialY: ny };
                scene.add(node);
                objects.push(node);
                nodes.push(node.position);

                // Lines to core
                const points = [aboutCore.position, node.position];
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(lineGeo, materialLine);
                scene.add(line);
                // Simple hack: line won't animate its endpoints in this basic setup without specific updates, which is fine for background fluff.
            }

            // Connect some outer nodes to each other
            for (let i = 1; i <= nodeCount; i++) {
                const nextIdx = (i % nodeCount) + 1;
                const points = [nodes[i], nodes[nextIdx]];
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(lineGeo, materialLine);
                scene.add(line);
            }
        }

        // --- PROJECTS ZONE (Holographic Database Corridor) ---
        if (zone.name === 'projects') {
            const pillarGeo = new THREE.CylinderGeometry(0.4, 0.4, 6, 16);
            // Spawn 3 on left, 3 on right forming a corridor
            const zOffsets = [-2, 0, 2];
            for (let i = 0; i < 3; i++) {
                // Left
                const pLeft = new THREE.Mesh(pillarGeo, materialMagenta);
                pLeft.position.set(-4, 0, zone.z + zOffsets[i] * 4);
                scene.add(pLeft);

                // Right
                const pRight = new THREE.Mesh(pillarGeo, materialMagenta);
                pRight.position.set(4, 0, zone.z + zOffsets[i] * 4);
                scene.add(pRight);

                // Add to objects to give them a slow rotation
                pLeft.userData = { isPillar: true, rotY: 0.005 };
                pRight.userData = { isPillar: true, rotY: -0.005 };
                objects.push(pLeft, pRight);
            }
        }

        // --- SKILLS ZONE (Orbit System) ---
        if (zone.name === 'skills') {
            const centerGeo = new THREE.SphereGeometry(1, 16, 16);
            const center = new THREE.Mesh(centerGeo, materialPurple);
            center.position.set(0, 3, zone.z);
            scene.add(center);

            const orbits = 6;
            for (let i = 0; i < orbits; i++) {
                // Vary size and speed
                const size = 0.2 + Math.random() * 0.3;
                const radius = 2 + Math.random() * 4;
                const speed = (0.01 + Math.random() * 0.02) * (Math.random() > 0.5 ? 1 : -1);

                const orbGeo = new THREE.SphereGeometry(size, 16, 16);
                const orb = new THREE.Mesh(orbGeo, materialCyanSolid);

                // Start angle
                const angle = Math.random() * Math.PI * 2;
                orb.position.set(Math.cos(angle) * radius, 3, zone.z + Math.sin(angle) * radius);
                orb.userData = { isOrbital: true, angle, radius, speed, centerY: 3, centerZ: zone.z };

                scene.add(orb);
                objects.push(orb);
            }
        }

        // --- CONTACT ZONE (Secure Portal) ---
        if (zone.name === 'contact') {
            // Outer Ring
            const outerGeo = new THREE.TorusGeometry(3, 0.2, 16, 100);
            const outer = new THREE.Mesh(outerGeo, materialBlueEmissive);
            outer.position.set(0, 4, zone.z);
            outer.userData = { isPortalOuter: true };
            scene.add(outer);
            objects.push(outer);

            // Inner Ring
            const innerGeo = new THREE.TorusGeometry(2.5, 0.1, 16, 100);
            const inner = new THREE.Mesh(innerGeo, materialCyan);
            inner.position.set(0, 4, zone.z);
            inner.userData = { isPortalInner: true };
            scene.add(inner);
            objects.push(inner);
        }
    });

    // Fade grid with distance by using a fog in scene, but since grid is PlaneGeometry, 
    // it inherently fades into the fog we set up in scene.js
    // Let's make sure the grid is large enough
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#050510';
    ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 4;

    ctx.beginPath();
    for (let i = 0; i <= 512; i += 64) {
        ctx.moveTo(i, 0); ctx.lineTo(i, 512);
        ctx.moveTo(0, i); ctx.lineTo(512, i);
    }
    ctx.stroke();

    const gridTexture = new THREE.CanvasTexture(canvas);
    gridTexture.wrapS = THREE.RepeatWrapping;
    gridTexture.wrapT = THREE.RepeatWrapping;
    gridTexture.repeat.set(40, 40); // Need more tiles for larger floor

    // Make grid much longer to cover z=0 to z=-60
    const gridGeo = new THREE.PlaneGeometry(120, 120);
    const gridMat = new THREE.MeshStandardMaterial({
        color: 0x001111,
        map: gridTexture,
        emissiveMap: gridTexture,
        emissive: 0x00f0ff,
        emissiveIntensity: 1.5,
        roughness: 0.1,
        metalness: 0.8,
        transparent: true,
        opacity: 0.8 // Fading happens naturally via Scene Fog!
    });

    const neonFloor = new THREE.Mesh(gridGeo, gridMat);
    neonFloor.rotation.x = -Math.PI / 2;
    neonFloor.position.y = -2;
    // Shift floor center to match world depth
    neonFloor.position.z = -25;
    scene.add(neonFloor);
}

export function updateWorld() {
    objects.forEach((obj) => {
        // Hero
        if (obj.userData.isHeroCore) {
            obj.userData.time += 0.01;
            obj.position.y = 4 + Math.sin(obj.userData.time) * 0.2;
            obj.rotation.y += 0.005;
            obj.rotation.x += 0.002;
        }
        if (obj.userData.isHeroRing) {
            obj.rotation.z += 0.002;
            obj.position.y = 4 + Math.sin(obj.userData.time) * 0.2; // follow core
        }

        // About / Generic floating
        if (obj.userData.isFloating) {
            obj.userData.time += obj.userData.floatSpeed;
            obj.position.y = obj.userData.initialY + Math.sin(obj.userData.time) * 0.4;
        }

        // Projects
        if (obj.userData.isPillar) {
            obj.rotation.y += obj.userData.rotY;
        }

        // Skills Orbiter
        if (obj.userData.isOrbital) {
            obj.userData.angle += obj.userData.speed;
            obj.position.x = Math.cos(obj.userData.angle) * obj.userData.radius;
            obj.position.z = obj.userData.centerZ + Math.sin(obj.userData.angle) * obj.userData.radius;
            // Add slight vertical wobble
            obj.position.y = obj.userData.centerY + Math.sin(obj.userData.angle * 2) * 0.5;
        }

        // Contact Portal
        if (obj.userData.isPortalOuter) {
            obj.rotation.z -= 0.005;
            obj.rotation.y = Math.sin(Date.now() * 0.001) * 0.2; // slight wobble
        }
        if (obj.userData.isPortalInner) {
            obj.rotation.z += 0.02;
            obj.rotation.y = Math.sin(Date.now() * 0.001) * 0.2;
        }
    });
}
