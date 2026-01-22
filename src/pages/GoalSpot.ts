import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import GoalObj from '../models/soccer_goal.glb';

interface GoalSpotInfo {
  scene: THREE.Scene;
  gltfLoader: GLTFLoader;
  x: number;
  y: number;
  z: number;
  scale?: number;
}

export class GoalSpot {
  x: number;
  y: number;
  z: number;
  visible: boolean;
  modelMesh?: THREE.Object3D;

  constructor(info: GoalSpotInfo) {
    this.x = info.x;
    this.y = info.y;
    this.z = info.z;
    this.visible = true;

    info.gltfLoader.load(GoalObj, (glb) => {
      this.modelMesh = glb.scene.children[0];
      (this.modelMesh as THREE.Mesh).castShadow = true;
      this.modelMesh.position.set(this.x, this.y, this.z);

      // 크기 조정 (기본값 0.2 - 작은 골대)
      const scale = info.scale || 0.2;
      this.modelMesh.scale.set(scale, scale, scale);

      info.scene.add(this.modelMesh);
    });
  }
}
