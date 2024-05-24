import PlayerObj from '../models/mine.glb';
import { Body, Box, Vec3 } from 'cannon-es';

import {
	AnimationMixer
} from 'three';

export class Player {
	constructor(info) {
		this.scene = info.scene;
		this.cannonWorld = info.cannonWorld;
		this.moving = false;

		this.width = info.width;
		this.height = info.height;
		this.depth = info.depth;

		this.x = info.x;
		this.y = info.y || 0.3;
		this.z = info.z;


		info.gltfLoader.load(
			PlayerObj,
			glb => {
				glb.scene.traverse(child => {
					if (child.isMesh) {
						child.castShadow = true;
					}
				});
		
				this.modelMesh = glb.scene.children[0];
				this.modelMesh.name = 'mine';
				info.scene.add(this.modelMesh);
				info.meshes.push(this.modelMesh);

				this.actions = [];
		
				this.mixer = new AnimationMixer(this.modelMesh);
				this.actions[0] = this.mixer.clipAction(glb.animations[0]);
				this.actions[1] = this.mixer.clipAction(glb.animations[6]);
				this.actions[0].play();

				this.setCannonBody();
			}
		);
	}


	setCannonBody() {
		const shape = new Box(new Vec3(1, 1, 1));
		this.cannonBody = new Body({
			mass: 0,
			position: new Vec3(this.x, this.y, this.z),
			shape
		});

		this.modelMesh.cannonBody = this.cannonBody;

		this.cannonWorld.addBody(this.cannonBody);
	}

}
