import * as THREE from 'three';
import { EffectComposer } from 'postprocessing';
import { RenderPass } from 'postprocessing';
import { EffectPass } from 'postprocessing';
import { BloomEffect } from 'postprocessing';

// 1. Scene
export const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0a0a1a, 0.03);

// 2. Camera
export const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 3, 8);

// 3. Renderer
export const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#webgl'),
    antialias: true,
    alpha: false,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize pixel ratio
renderer.setClearColor(0x0a0a1a);

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
