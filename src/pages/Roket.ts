import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import RoketObj from '../models/roket_portfolio.glb';

interface RoketInfo {
  scene: THREE.Scene;
  gltfLoader: GLTFLoader;
  x: number;
  y: number;
  z: number;
}

export class Roket {
  x: number;
  y: number;
  z: number;
  visible: boolean;
  modelMesh?: THREE.Object3D;

  constructor(info: RoketInfo) {
    this.x = info.x;
    this.y = info.y;
    this.z = info.z;
    this.visible = false;

    info.gltfLoader.load(RoketObj, (glb) => {
      this.modelMesh = glb.scene.children[0];
      (this.modelMesh as THREE.Mesh).castShadow = true;
      this.modelMesh.position.set(this.x, this.y, this.z);
      info.scene.add(this.modelMesh);
    });
  }
}
