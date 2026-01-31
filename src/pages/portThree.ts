import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import PlayerObj from '../models/mine.glb';

export function PortThree(): (() => void) | void {
  // Renderer
  const canvas = document.querySelector('#three-canvas2') as HTMLCanvasElement;
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: window.devicePixelRatio <= 1, // 고해상도에서는 antialias 비활성화
    alpha: true,
    powerPreference: 'high-performance', // GPU 성능 우선
  });
  renderer.setSize(200, 300);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 최대 2배까지만

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
  let isAnimating = true;

  gltfLoader.load(PlayerObj, (gltf) => {
    mineMesh = gltf.scene.children[0];
    mineMesh.position.x = 0;
    mineMesh.position.y = -5;
    mineMesh.position.z = 0;
    mineMesh.rotation.x = 0;

    // Frustum culling 최적화
    mineMesh.frustumCulled = true;

    scene.add(mineMesh);

    mixer = new THREE.AnimationMixer(mineMesh);
    actions[0] = mixer.clipAction(gltf.animations[0]);
    actions[1] = mixer.clipAction(gltf.animations[2]);
    actions[2] = mixer.clipAction(gltf.animations[4]);

    actions[1].repetitions = 3;
    actions[1].clampWhenFinished = true;
    actions[1].play();

    let finishedCount = 0;
    mixer.addEventListener('finished', () => {
      finishedCount++;

      if (finishedCount === 1) {
        actions[2].repetitions = 1;
        actions[2].clampWhenFinished = true;
        actions[2].play();

        const messageWrap = document.querySelector('.message-wrap') as HTMLElement;
        if (messageWrap) {
          messageWrap.style.display = 'block';
          messageWrap.style.opacity = '0';
          gsap.to(messageWrap, { duration: 0.3, opacity: 1 });
        }
      } else if (finishedCount === 2) {
        // 모든 애니메이션 완료 후 렌더링 중지
        isAnimating = false;
        renderer.setAnimationLoop(null);
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
    if (!isAnimating) return;

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

  const handleClick = (e: MouseEvent) => {
    calculateMousePosition(e);
    clickObj();
  };

  //클릭
  canvas.addEventListener('click', handleClick);

  const header = document.getElementById('header');
  if (header) {
    header.classList.add('white');
  }

  draw2();

  // Cleanup 함수 반환
  return () => {
    // 애니메이션 루프 중지
    renderer.setAnimationLoop(null);

    // 이벤트 리스너 제거
    window.removeEventListener('resize', setSize);
    canvas.removeEventListener('click', handleClick);

    // Three.js 리소스 정리
    if (mixer) {
      mixer.stopAllAction();
    }

    scene.clear();
    renderer.dispose();

    // 헤더 클래스 제거
    if (header) {
      header.classList.remove('white');
    }
  };
}

export default PortThree;
