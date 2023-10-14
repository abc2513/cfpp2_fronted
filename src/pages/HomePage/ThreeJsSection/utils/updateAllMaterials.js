import * as THREE from 'three';
export default function updateAllMaterials(scene) {
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
      child.material.envMap = scene.background;
      child.material.envMapIntensity = 5;
      child.material.needsUpdate = true;
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
};