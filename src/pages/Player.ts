import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Body, Box, Vec3, World } from 'cannon-es';
import PlayerObj from '../models/mine.glb';

interface PlayerInfo {
  scene: THREE.Scene;
  cannonWorld: World;
  gltfLoader: GLTFLoader;
  meshes: THREE.Mesh[];
  width: number;
  height: number;
  depth: number;
  x: number;
  y?: number;
  z: number;
}

export class Player {
  scene: THREE.Scene;
  cannonWorld: World;
  moving: boolean;
  width: number;
  height: number;
  depth: number;
  x: number;
  y: number;
  z: number;
  modelMesh?: THREE.Object3D;
  cannonBody?: Body;
  mixer?: THREE.AnimationMixer;
  actions: THREE.AnimationAction[];

  constructor(info: PlayerInfo) {
    this.scene = info.scene;
    this.cannonWorld = info.cannonWorld;
    this.moving = false;

    this.width = info.width;
    this.height = info.height;
    this.depth = info.depth;

    this.x = info.x;
    this.y = info.y || 0.3;
    this.z = info.z;

    this.actions = [];

    info.gltfLoader.load(PlayerObj, (glb) => {
      glb.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).castShadow = true;
        }
      });

      this.modelMesh = glb.scene.children[0];
      this.modelMesh.name = 'mine';
      info.scene.add(this.modelMesh);
      info.meshes.push(this.modelMesh as THREE.Mesh);

      this.mixer = new THREE.AnimationMixer(this.modelMesh);
      this.actions[0] = this.mixer.clipAction(glb.animations[0]);
      this.actions[1] = this.mixer.clipAction(glb.animations[6]);
      this.actions[0].play();

      this.setCannonBody();
    });
  }

  setCannonBody(): void {
    const shape = new Box(new Vec3(1, 1, 1));
    this.cannonBody = new Body({
      mass: 0,
      position: new Vec3(this.x, this.y, this.z),
      shape,
    });

    if (this.modelMesh) {
      (this.modelMesh as any).cannonBody = this.cannonBody;
    }

    this.cannonWorld.addBody(this.cannonBody);
  }
}
