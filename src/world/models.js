import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Vite base URL — resolves to "/" in plain dev or "/cyberpunk-security-portfolio/" with the configured base
const BASE = import.meta.env.BASE_URL;

// Setup LoadingManager for debugging
export const manager = new THREE.LoadingManager();
manager.onLoad = () => {
    console.log("All models loaded");
};
manager.onError = (url) => {
    console.error("LoadingManager: failed to load", url);
};

const loader = new GLTFLoader(manager);

export function loadGuardian(scene, objects) {
    const url = `${BASE}models/guardian.glb`;
    console.log("Loading guardian from", url);
    loader.load(url, (gltf) => {
        console.log("Guardian loaded", gltf);
        const guardian = gltf.scene;
        guardian.scale.set(4, 4, 4);
        guardian.position.set(0, 1.2, 0);

        scene.add(guardian);
        objects.push(guardian);
    }, undefined, (err) => {
        console.error("Failed to load guardian:", err);
    });
}

export function loadReactor(scene, objects) {
    const url = `${BASE}models/reactor.glb`;
    console.log("Loading reactor from", url);
    loader.load(url, (gltf) => {
        console.log("Reactor loaded", gltf);
        const reactor = gltf.scene;
        reactor.scale.set(4, 4, 4);
        reactor.position.set(0, 4, -3);

        reactor.userData = { isReactor: true };
        scene.add(reactor);
        objects.push(reactor);
    }, undefined, (err) => {
        console.error("Failed to load reactor:", err);
    });
}

export function loadDrone(scene, objects) {
    const url = `${BASE}models/drone.glb`;
    console.log("Loading drone from", url);
    loader.load(url, (gltf) => {
        console.log("Drone loaded", gltf);
        const drone = gltf.scene;
        drone.scale.set(4, 4, 4);
        drone.position.set(3, 3, 1);

        drone.userData = { isDrone: true, time: 0 };
        scene.add(drone);
        objects.push(drone);
    }, undefined, (err) => {
        console.error("Failed to load drone:", err);
    });
}

export function loadPillars(scene, objects) {
    const url = `${BASE}models/pillar.glb`;
    console.log("Loading pillar from", url);
    const pillarZPositions = [-15, -25, -35];

    loader.load(url, (gltf) => {
        console.log("Pillar loaded", gltf);
        const basePillar = gltf.scene;

        pillarZPositions.forEach((zPos) => {
            const pillar = basePillar.clone(true);
            pillar.scale.set(4, 4, 4);
            pillar.position.set(0, 1.2, zPos);
            pillar.rotation.y = Math.random() * Math.PI;

            scene.add(pillar);
            objects.push(pillar);
        });
    }, undefined, (err) => {
        console.error("Failed to load pillar:", err);
    });
}

export function loadPortal(scene, objects) {
    const url = `${BASE}models/portal.glb`;
    console.log("Loading portal from", url);
    loader.load(url, (gltf) => {
        console.log("Portal loaded", gltf);
        const portal = gltf.scene;
        portal.scale.set(4, 4, 4);
        portal.position.set(0, 1.5, -45);

        portal.userData = { isPortal: true };
        scene.add(portal);
        objects.push(portal);
    }, undefined, (err) => {
        console.error("Failed to load portal:", err);
    });
}
