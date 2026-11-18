import * as THREE from 'three';
import { disposeObject } from './disposeObject';

test('scene teardown releases bone textures shared by animated meshes', () => {
  const scene = new THREE.Scene();
  const skeleton = new THREE.Skeleton([new THREE.Bone()]);
  skeleton.computeBoneTexture();
  const releases: string[] = [];
  skeleton.boneTexture!.addEventListener('dispose', () => releases.push('bone texture'));
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.MeshBasicMaterial();
  for (let index = 0; index < 2; index++) {
    const mesh = new THREE.SkinnedMesh(geometry, material);
    mesh.skeleton = skeleton;
    scene.add(mesh);
  }
  disposeObject(scene);
  expect(releases).toEqual(['bone texture']);
  expect(skeleton.boneTexture).toBeNull();
});
