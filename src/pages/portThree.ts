import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import PlayerObj from '../models/mine.glb';

export function PortThree(): void {
  // Renderer
  const canvas = document.querySelector('#three-canvas2') as HTMLCanvasElement;
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(200, 300);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(60, 200 / 300, 0.1, 1000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;
  scene.add(camera);

  // Light
  const ambientLight = new THREE.AmbientLight('white', 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight('white', 1);
  directionalLight.position.x = 1;
  directionalLight.position.z = 2;
  scene.add(directionalLight);

  // gltf loader
  const gltfLoader = new GLTFLoader();
  let mixer: THREE.AnimationMixer | undefined;
  let mineMesh: THREE.Object3D | undefined;
  const actions: THREE.AnimationAction[] = [];

  gltfLoader.load(PlayerObj, (gltf) => {
    mineMesh = gltf.scene.children[0];
    mineMesh.position.x = 0;
    mineMesh.position.y = -5;
    mineMesh.position.z = 0;
    mineMesh.rotation.x = 0;

    scene.add(mineMesh);

    mixer = new THREE.AnimationMixer(mineMesh);
    actions[0] = mixer.clipAction(gltf.animations[0]);
    actions[1] = mixer.clipAction(gltf.animations[2]);
    actions[2] = mixer.clipAction(gltf.animations[4]);

    actions[1].repetitions = 3;
    actions[1].clampWhenFinished = true;
    actions[1].play();

    mixer.addEventListener('finished', () => {
      actions[2].repetitions = 1;
      actions[2].clampWhenFinished = true;
      actions[2].play();

      const messageWrap = document.querySelector('.message-wrap') as HTMLElement;
      if (messageWrap) {
        messageWrap.style.display = 'block';
        messageWrap.style.opacity = '0';
        gsap.to(messageWrap, { duration: 0.3, opacity: 1 });
      }
    });

    actions[0].play();

    gsap.to(mineMesh.position, {
      duration: 2,
      y: -0.3,
      ease: 'circ.out',
    });
  });

  const mouse = new THREE.Vector2();

  // 그리기
  const clock = new THREE.Clock();

  function draw2(): void {
    const delta = clock.getDelta();
    if (mixer) {
      mixer.update(delta);
    }
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(draw2);

  function setSize(): void {
    camera.aspect = 200 / 300;
    camera.updateProjectionMatrix();
    renderer.setSize(200, 300);
    renderer.render(scene, camera);
  }

  function clickObj(): void {
    // Placeholder for click functionality
  }

  // 이벤트
  window.addEventListener('resize', setSize);

  // 마우스 좌표를 three.js에 맞게 변환
  function calculateMousePosition(e: MouseEvent): void {
    mouse.x = (e.clientX / canvas.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY / canvas.clientHeight) * 2 - 1);
  }

  //클릭
  canvas.addEventListener('click', (e) => {
    calculateMousePosition(e);
    clickObj();
  });

  const header = document.getElementById('header');
  if (header) {
    header.classList.add('white');
  }

  draw2();
}

export default PortThree;
