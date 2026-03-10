# Model Integration Plan

## Goal Description
Integrate `futuristiccyberneticguardian3dmodel-v1.glb`, `futuristicenergycore3dmodel.glb`, `scifidrone3dmodel.glb`, `energyportal3dmodel.glb`, and `scifiportaldevice3dmodel.glb` into the Cyberpunk Security Lab Three.js scene using `GLTFLoader`. Replace primitive geometric shapes in `world.js` with these high-quality 3D models while preserving the existing post-processing and animation loops.

## User Review Required
None so far.

## Proposed Changes

### Integration of GLTF Models
#### [NEW] `src/world/models.js`
Create a new file that exports initialization functions for each model:
- `loadGuardian(scene)`: Loads Guardian at `(0,0,0)`.
- `loadReactor(scene, objects)`: Loads Reactor at `(0,3,-2)` and adds it to `objects` for rotation.
- `loadDrone(scene, objects)`: Loads Drone at `(3,2,1)` and adds to `objects` for floating.
- `loadPillars(scene)`: Uses `scifiportaldevice3dmodel.glb` as project pillars at `z = -15`, `z = -25`, `z = -35` scaled to `0.8`. Left and right placements at `x=-4` and `x=4` maintain the holographic corridor from `world.js`.
- `loadPortal(scene, objects)`: Uses `energyportal3dmodel.glb` at `(0,0,-45)`, scale `1.5` and adds it to `objects` for ring rotation.

#### [MODIFY] `src/world/world.js`
- **Imports:** Add imports for the new loader functions from `./models.js`.
- **Cleanup Primitive Meshes:**
  - Remove generation code for Icosahedron `core` and Torus `ring` in the Hero Zone.
  - Remove Cylinder `pLeft` and `pRight` generation in the Projects Zone.
  - Remove Torus `outer` and `inner` generation in the Contact Zone.
- **Initialization:** Call the `load*` functions at the end of `setupWorld(scene)`, passing the `objects` array so the models can be animated.
- **Animation Update:** Update `updateWorld()` to handle the `isDrone`, `isReactor`, and `isPortal` flags via `userData`, applying the requested math:
  - Drone floating: `drone.position.y = 2 + Math.sin(time)*0.3`
  - Reactor rotation: `reactor.rotation.y += 0.002`
  - Portal rotation: `portal.rotation.z += 0.003`

## Verification Plan

### Automated Tests
Run `npm run dev` to ensure Vite successfully serves the project without import errors and `GLTFLoader` evaluates correctly.

### Manual Verification
Visual inspection in the browser to ensure the new models apply correctly. Open browser devtools to verify there are no WebGL or 404 errors for the `.glb` files.
