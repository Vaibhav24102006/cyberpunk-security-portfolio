import * as THREE from 'three';
import { EffectComposer } from 'postprocessing';
import { RenderPass } from 'postprocessing';
import { EffectPass } from 'postprocessing';
import { BloomEffect } from 'postprocessing';

// 1. Scene
export const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x080820, 0.015);

// 2. Camera
export const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 4, 12);

// 3. Renderer
export const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#webgl'),
    antialias: true,
    alpha: false,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Dynamic Pixel Ratio to save massive fragment overhead on mobile
const isMobile = window.innerWidth < 800;
const maxPixelRatio = isMobile ? 1 : 2;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
renderer.setClearColor(0x080820);

// 4. Post-processing (Bloom)
export const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomEffect = new BloomEffect({
    intensity: 1.2,
    kernelSize: 3, /* Resolution.AUTO_SIZE */
    luminanceThreshold: 0.1,
    luminanceSmoothing: 0.9,
});

composer.addPass(new EffectPass(camera, bloomEffect));

export function resize(camera, renderer, composer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
}
