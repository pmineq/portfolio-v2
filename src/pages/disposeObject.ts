import * as THREE from 'three';

/** Dispose resources owned by one scene, including textures shared by its meshes. */
export function disposeObject(root: THREE.Object3D): void {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();
  const skeletons = new Set<THREE.Skeleton>();
  root.traverse((object) => {
    const mesh = object as THREE.Mesh;
    if (mesh.geometry) geometries.add(mesh.geometry);
    const skinnedMesh = object as THREE.SkinnedMesh;
    if (skinnedMesh.isSkinnedMesh && skinnedMesh.skeleton) skeletons.add(skinnedMesh.skeleton);
    if (mesh.material) {
      for (const material of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) {
        materials.add(material);
        for (const value of Object.values(material)) {
          if (value instanceof THREE.Texture) textures.add(value);
        }
      }
    }
  });
  skeletons.forEach((skeleton) => skeleton.dispose());
  textures.forEach((texture) => {
    texture.dispose();
    if (typeof ImageBitmap !== 'undefined' && texture.image instanceof ImageBitmap) {
      texture.image.close();
    }
  });
  materials.forEach((material) => material.dispose());
  geometries.forEach((geometry) => geometry.dispose());
}

