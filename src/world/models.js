import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Setup LoadingManager for debugging
export const manager = new THREE.LoadingManager();
manager.onLoad = () => {
    console.log("All models loaded");
};

const loader = new GLTFLoader(manager);

export function loadGuardian(scene, objects) {
    loader.load("/models/futuristiccyberneticguardian3dmodel-v1.glb", (gltf) => {
        const guardian = gltf.scene;
        guardian.scale.set(0.6, 0.6, 0.6);
        guardian.position.set(0, 0, 0);
        scene.add(guardian);
    });
}

export function loadReactor(scene, objects) {
    loader.load("/models/futuristicenergycore3dmodel.glb", (gltf) => {
        const reactor = gltf.scene;
        reactor.scale.set(0.6, 0.6, 0.6);
        reactor.position.set(0, 3, -2);

        reactor.userData = { isReactor: true };
        scene.add(reactor);
        objects.push(reactor);
    });
}

export function loadDrone(scene, objects) {
    loader.load("/models/scifidrone3dmodel.glb", (gltf) => {
        const drone = gltf.scene;
        drone.scale.set(0.6, 0.6, 0.6);
        drone.position.set(3, 2, 1);

        drone.userData = { isDrone: true, time: 0 };
        scene.add(drone);
        objects.push(drone);
    });
}

export function loadPillars(scene, objects) {
    const pillarZPositions = [-15, -25, -35];

    loader.load("/models/scifiportaldevice3dmodel.glb", (gltf) => {
        const basePillar = gltf.scene;

        pillarZPositions.forEach((zPos) => {
            const pillar = basePillar.clone();
            pillar.scale.set(0.8, 0.8, 0.8); // Slightly larger for structural importance, matching earlier design scale request
            pillar.position.set(0, 0, zPos);
            pillar.rotation.y = Math.random() * Math.PI; // Add slight structural rotation
            scene.add(pillar);
        });
    });
}

export function loadPortal(scene, objects) {
    loader.load("/models/energyportal3dmodel.glb", (gltf) => {
        const portal = gltf.scene;
        portal.scale.set(1.5, 1.5, 1.5); // Retaining 1.5 scale requested for cinematic final piece
        portal.position.set(0, 0, -45);

        portal.userData = { isPortal: true };
        scene.add(portal);
        objects.push(portal);
    });
}
