import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MachineObj from '../models/machine.glb';

interface MachineInfo {
  scene: THREE.Scene;
  gltfLoader: GLTFLoader;
  x: number;
  y: number;
  z: number;
  scale?: number;
}

export class Machine {
  x: number;
  y: number;
  z: number;
  visible: boolean;
  modelMesh?: THREE.Object3D;

  constructor(info: MachineInfo) {
    this.x = info.x;
    this.y = info.y;
    this.z = info.z;
    this.visible = false;

    info.gltfLoader.load(MachineObj, (glb) => {
      this.modelMesh = glb.scene.children[0];
      (this.modelMesh as THREE.Mesh).castShadow = true;
      this.modelMesh.position.set(this.x, this.y, this.z);

      // 크기 조정
      const scale = info.scale || 1;
      this.modelMesh.scale.set(scale, scale, scale);

      info.scene.add(this.modelMesh);
    });
  }
}
