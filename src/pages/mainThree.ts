import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Player } from './Player';
import { Roket } from './Roket';
import { GoalSpot } from './GoalSpot';
import gsap from 'gsap';
import gridImg from '../assets/images/gradient.jpg';
import ballImg from '../assets/images/ball.png';
import * as CANNON from 'cannon-es';

export function MainThree(): void {
  // Texture
  const textureLoader = new THREE.TextureLoader();
  const floorTexture = textureLoader.load(gridImg);
  const ballTexture = textureLoader.load(ballImg);

  // Renderer
  const canvas = document.querySelector('#three-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.OrthographicCamera(
    -(window.innerWidth / window.innerHeight), // left
    window.innerWidth / window.innerHeight, // right,
    1, // top
    -1, // bottom
    -1000,
    1000
  );

  const cameraPosition = new THREE.Vector3(1, 3, 5);
  camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  camera.zoom = 0.22;
  camera.updateProjectionMatrix();
  scene.add(camera);

  // Light
  const ambientLight = new THREE.AmbientLight('white', 1.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight('white', 2);
  const directionalLightOriginPosition = new THREE.Vector3(1, 1, 1);
  directionalLight.position.x = directionalLightOriginPosition.x;
  directionalLight.position.y = directionalLightOriginPosition.y;
  directionalLight.position.z = directionalLightOriginPosition.z;
  directionalLight.castShadow = true;

  // mapSize 세팅으로 그림자 퀄리티 설정
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  // 그림자 범위
  directionalLight.shadow.camera.left = -100;
  directionalLight.shadow.camera.right = 100;
  directionalLight.shadow.camera.top = 100;
  directionalLight.shadow.camera.bottom = -100;
  directionalLight.shadow.camera.near = -100;
  directionalLight.shadow.camera.far = 100;
  scene.add(directionalLight);

  // Cannon (물리 엔진)
  const cannonWorld = new CANNON.World();
  cannonWorld.gravity.set(0, -9.8, 0);

  // 성능을 위한 세팅
  cannonWorld.broadphase = new CANNON.SAPBroadphase(cannonWorld);

  //Contact Material
  const defaultMaterial = new CANNON.Material('default'); //기본
  const rubberMaterial = new CANNON.Material('rubber'); //고무

  //기본-기본
  const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
      friction: 0.01, //마찰
      restitution: 0.01, //반발력
    }
  );
  cannonWorld.defaultContactMaterial = defaultContactMaterial;

  //고무-기본
  const rubberDefaultContactMaterial = new CANNON.ContactMaterial(
    rubberMaterial,
    defaultMaterial,
    {
      friction: 0.4, //마찰
      restitution: 0.02, //반발력
    }
  );
  cannonWorld.addContactMaterial(rubberDefaultContactMaterial);

  const floorShape = new CANNON.Plane();
  const floorBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 0, 0),
    shape: floorShape,
    material: defaultMaterial,
  });
  floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2);
  cannonWorld.addBody(floorBody);

  //ball
  const BallShape = new CANNON.Sphere(0.3);
  const BallBody = new CANNON.Body({
    mass: 3,
    position: new CANNON.Vec3(2, 10, 2),
    shape: BallShape,
    material: rubberMaterial,
    linearDamping: 0.4, // 선형 감속 (공이 굴러갈 때 점점 느려짐)
    angularDamping: 0.4, // 회전 감속 (공이 회전할 때 점점 느려짐)
  });
  BallBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 0, 0), Math.PI / 2);
  cannonWorld.addBody(BallBody);

  // Mesh
  const meshes: THREE.Mesh[] = [];
  const floorMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({
      map: floorTexture,
    })
  );
  floorMesh.name = 'floor';
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);
  meshes.push(floorMesh);

  // 바닥 반지름 상수
  const FLOOR_W = floorMesh.geometry.parameters.width; // 40
  const FLOOR_H = floorMesh.geometry.parameters.height; // 40
  const halfX = FLOOR_W / 2; // 20
  const halfZ = FLOOR_H / 2; // 20

  const BALL_R = 0.3; // 이미 쓰는 볼 반지름
  const SAFE_MARGIN = 0.1; // 경계 여유

  // 포인터
  const pointerMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(0.8, 0.8),
    new THREE.MeshBasicMaterial({
      color: 'crimson',
      transparent: true,
      opacity: 0.3,
    })
  );
  pointerMesh.rotation.x = -Math.PI / 2;
  pointerMesh.position.y = 0.01;
  pointerMesh.receiveShadow = true;
  scene.add(pointerMesh);

  const spotMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshStandardMaterial({
      color: 'yellow',
      transparent: true,
      opacity: 0,
    })
  );
  spotMesh.position.set(9.35, 0.005, 9.35);
  spotMesh.rotation.x = -Math.PI / 2;
  spotMesh.receiveShadow = true;
  scene.add(spotMesh);

  const gltfLoader = new GLTFLoader();

  const roket = new Roket({
    gltfLoader,
    scene,
    x: 9.35,
    y: -0.15,
    z: 8.5,
  });

  const player = new Player({
    scene,
    cannonWorld,
    meshes,
    gltfLoader,
    width: 1,
    height: 1,
    depth: 1,
    x: -0.05,
    z: -0.2,
  });

  const goalSpot = new GoalSpot({
    gltfLoader,
    scene,
    x: 6,
    y: 0,
    z: -4,
    scale: 0.3,
  });

  const BallGeometry = new THREE.SphereGeometry(0.3);
  const BallMaterial = new THREE.MeshStandardMaterial({
    map: ballTexture,
  });
  const BallMesh = new THREE.Mesh(BallGeometry, BallMaterial);
  BallMesh.rotation.x = -Math.PI / 2;
  BallMesh.castShadow = true;
  scene.add(BallMesh);

  // 영역 이탈 판정: 바닥 밖으로 나가면 true
  function ballOutOfBounds(p: CANNON.Vec3, r = BALL_R): boolean {
    return (
      p.x < -halfX - r ||
      p.x > halfX + r ||
      p.z < -halfZ - r ||
      p.z > halfZ + r
    );
  }

  // 플레이어 주변 리스폰 (재사용: 동일 BallBody/BallMesh 텔레포트)
  let lastRespawnAt = 0; // 연타 방지
  function respawnBallNearPlayer(
    dropHeight = 3,
    radiusAroundPlayer = 0.8
  ): void {
    const now = performance.now();
    if (now - lastRespawnAt < 400) return; // 0.4초 쿨다운
    lastRespawnAt = now;

    const base = player?.cannonBody?.position ?? new CANNON.Vec3(0, 0, 0);

    // 플레이어 주변 원형 랜덤 스폰
    const t = Math.random() * Math.PI * 2;
    let x = base.x + Math.cos(t) * radiusAroundPlayer;
    let z = base.z + Math.sin(t) * radiusAroundPlayer;

    // 안전하게 바닥 내부로 클램프
    const margin = BALL_R + SAFE_MARGIN;
    x = Math.min(Math.max(x, -halfX + margin), halfX - margin);
    z = Math.min(Math.max(z, -halfZ + margin), halfZ - margin);

    // 공 텔레포트 & 초기화
    BallBody.position.set(x, dropHeight, z);
    BallBody.velocity.set(0, 0, 0);
    BallBody.angularVelocity.set(0, 0, 0);
    BallBody.quaternion.set(0, 0, 0, 1);
    BallBody.wakeUp(); // 혹시 sleep 상태면 깨우기
  }

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const destinationPoint = new THREE.Vector3();
  let angle = 0;
  let isPressed = false; // 마우스를 누르고 있는 상태

  // 골 감지 변수
  let lastGoalTime = 0;
  const GOAL_COOLDOWN = 3000; // 3초 쿨다운

  // 골 이펙트 함수
  function showGoalEffect(): void {
    const effectElement = document.getElementById('goal-effect');
    if (effectElement) {
      effectElement.classList.add('show');

      gsap.fromTo(
        effectElement,
        { scale: 0, rotation: -10 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
        }
      );

      // 2초 후 사라지게
      setTimeout(() => {
        gsap.to(effectElement, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            effectElement.classList.remove('show');
            gsap.set(effectElement, { scale: 1, opacity: 1 });
          },
        });
      }, 2000);
    }
  }

  // 골 감지 함수
  function checkGoal(): void {
    const now = performance.now();
    if (now - lastGoalTime < GOAL_COOLDOWN) return;

    if (goalSpot.modelMesh) {
      const ballPos = BallBody.position;
      const goalPos = goalSpot.modelMesh.position;

      // 골대 영역 체크 (더 넓게 설정 - 0.3 스케일)
      const goalWidth = 2.2; // 골대 너비 (넓게)
      const goalHeight = 5; // 골대 높이 (넓게)
      const goalDepth = 0.8; // 골대 깊이 (넓게)

      const inGoalX = Math.abs(ballPos.x - goalPos.x) < goalWidth;
      const inGoalY = ballPos.y > goalPos.y && ballPos.y < goalPos.y + goalHeight;
      const inGoalZ = Math.abs(ballPos.z - goalPos.z) < goalDepth;

      // 공이 움직이고 있고 골대 영역에 들어갔을 때
      const ballSpeed = Math.sqrt(
        BallBody.velocity.x ** 2 +
          BallBody.velocity.y ** 2 +
          BallBody.velocity.z ** 2
      );

      if (inGoalX && inGoalY && inGoalZ && ballSpeed > 0.5) {
        lastGoalTime = now;
        showGoalEffect();

        // 공을 멈추고 약간 튕겨냄
        gsap.to(BallBody.velocity, {
          x: (ballPos.x - goalPos.x) * 2,
          y: 3,
          z: (ballPos.z - goalPos.z) * 2,
          duration: 0.1,
        });
      }
    }
  }

  // 그리기
  const clock = new THREE.Clock();

  function draw(): void {
    const delta = clock.getDelta();

    //화면 주사율에 따라 최적화 화면 제공
    let cannonStepTime = 1 / 60;
    if (delta < 0.01) cannonStepTime = 1 / 120;
    cannonWorld.step(cannonStepTime, delta, 3);
    floorMesh.position.copy(floorBody.position as any);
    BallMesh.position.copy(BallBody.position as any);
    BallMesh.quaternion.copy(BallBody.quaternion as any);

    // 공의 최대 속도 제한 (캐릭터가 따라잡을 수 있도록)
    const maxBallSpeed = 5; // 최대 속도
    const currentSpeed = Math.sqrt(
      BallBody.velocity.x ** 2 +
      BallBody.velocity.y ** 2 +
      BallBody.velocity.z ** 2
    );
    if (currentSpeed > maxBallSpeed) {
      const scale = maxBallSpeed / currentSpeed;
      BallBody.velocity.x *= scale;
      BallBody.velocity.y *= scale;
      BallBody.velocity.z *= scale;
    }

    // ★ 영역 이탈 시 리스폰
    if (ballOutOfBounds(BallBody.position)) {
      respawnBallNearPlayer(3 /*떨어질 높이*/, 0.8 /*플레이어 반경*/);
    }

    // 골 감지
    checkGoal();

    if (player.cannonBody && player.modelMesh) {
      player.modelMesh.position.copy(player.cannonBody.position as any);
    }

    if (goalSpot.modelMesh) {
      // GoalSpot doesn't have cannonBody in original code
    }

    if (player.mixer) player.mixer.update(delta);

    if (player.modelMesh) {
      camera.lookAt(player.modelMesh.position);
    }

    if (player.modelMesh && player.cannonBody) {
      if (isPressed) {
        raycasting();
      }

      if (player.moving) {
        // 걸어가는 상태
        angle = Math.atan2(
          destinationPoint.z - player.cannonBody.position.z,
          destinationPoint.x - player.cannonBody.position.x
        );
        player.cannonBody.position.x += Math.cos(angle) * 0.05;
        player.cannonBody.position.z += Math.sin(angle) * 0.05;

        camera.position.x = cameraPosition.x + player.cannonBody.position.x;
        camera.position.z = cameraPosition.z + player.cannonBody.position.z;

        player.actions[1].play();
        player.actions[0].stop();

        if (
          Math.abs(destinationPoint.x - player.cannonBody.position.x) < 0.03 &&
          Math.abs(destinationPoint.z - player.cannonBody.position.z) < 0.03
        ) {
          player.moving = false;
        }

        if (
          Math.abs(spotMesh.position.x - player.cannonBody.position.x) < 2 &&
          Math.abs(spotMesh.position.z - player.cannonBody.position.z) < 2
        ) {
          if (!roket.visible && roket.modelMesh) {
            roket.visible = true;
            gsap.to(roket.modelMesh.position, {
              duration: 1.5,
              y: 5,
              ease: 'expo.in',
            });
            gsap.to(camera.position, {
              duration: 1,
              y: 3,
            });

            const btnView = document.querySelector('.btn-view') as HTMLElement;
            if (btnView) {
              btnView.style.display = 'block';
              btnView.style.opacity = '0';
              gsap.to(btnView, { duration: 0.3, opacity: 1 });
            }
          }
        } else if (roket.visible && roket.modelMesh) {
          roket.visible = false;
          gsap.to(roket.modelMesh.position, {
            duration: 1.5,
            y: -0.15,
          });
          gsap.to(camera.position, {
            duration: 1,
            y: 3,
          });

          const btnView = document.querySelector('.btn-view') as HTMLElement;
          if (btnView) {
            gsap.to(btnView, {
              duration: 0.3,
              opacity: 0,
              onComplete: () => {
                btnView.style.display = 'none';
              },
            });
          }
        }
      } else {
        // 서 있는 상태
        player.actions[0].play();
        player.actions[1].stop();
      }

      //공 굴러가요
      if (Math.abs(BallBody.position.x) > 0 && Math.abs(BallBody.position.y) < 0.3) {
        if (
          //player position에서 x축 또는 y축 사이 거리가 2 이상일 때.
          Math.abs(BallBody.position.x - player.cannonBody.position.x) > 2 ||
          Math.abs(BallBody.position.z - player.cannonBody.position.z) > 2
        ) {
          gsap.to(BallBody.angularVelocity, {
            duration: 1,
            x: 0,
            y: 0,
            z: 0,
          });

          gsap.to(BallBody.velocity, {
            duration: 0.5,
            x: 0,
            y: 0,
            z: 0,
          });
        }
      }
    }

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(draw);

  function checkIntersects(): void {
    const intersects = raycaster.intersectObjects(meshes);
    for (const item of intersects) {
      if (item.object.name === 'floor' && player.modelMesh) {
        destinationPoint.x = item.point.x;
        destinationPoint.y = 0.3;
        destinationPoint.z = item.point.z;
        player.modelMesh.lookAt(destinationPoint);

        player.moving = true;

        pointerMesh.position.x = destinationPoint.x;
        pointerMesh.position.z = destinationPoint.z;
      }
      break;
    }
  }

  function setSize(): void {
    camera.left = -(window.innerWidth / window.innerHeight);
    camera.right = window.innerWidth / window.innerHeight;
    camera.top = 1;
    camera.bottom = -1;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // 이벤트
  window.addEventListener('resize', setSize);

  // 마우스 좌표를 three.js에 맞게 변환
  function calculateMousePosition(e: MouseEvent | Touch): void {
    mouse.x = (e.clientX / canvas.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY / canvas.clientHeight) * 2 - 1);
  }

  // 변환된 마우스 좌표를 이용해 래이캐스팅
  function raycasting(): void {
    raycaster.setFromCamera(mouse, camera);
    checkIntersects();
  }

  // 마우스 이벤트
  canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    calculateMousePosition(e);
  });
  canvas.addEventListener('mouseup', () => {
    isPressed = false;
  });
  canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
      calculateMousePosition(e);
    }
  });

  // 터치 이벤트
  canvas.addEventListener('touchstart', (e) => {
    isPressed = true;
    calculateMousePosition(e.touches[0]);
  });
  canvas.addEventListener('touchend', () => {
    isPressed = false;
  });
  canvas.addEventListener('touchmove', (e) => {
    if (isPressed) {
      calculateMousePosition(e.touches[0]);
    }
  });

  //초기화
  const btnReset = document.querySelector('.btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (player.cannonBody && player.modelMesh && roket.modelMesh) {
        player.cannonBody.position.set(-0.05, 0.3, -0.2);
        player.modelMesh.rotation.y = 0;
        destinationPoint.set(0, 0.3, 0);
        camera.position.set(1, 3, 5);
        pointerMesh.position.set(-0.05, 0.1, 0.2);

        BallBody.position.set(2, 2, 2);
        BallBody.angularVelocity.set(0, 0, 0);
        BallBody.velocity.set(0, 0, 0);

        roket.visible = false;
        (spotMesh.material as THREE.MeshStandardMaterial).color.set('yellow');
        gsap.to(roket.modelMesh.position, {
          duration: 0.5,
          y: -0.15,
        });

        const btnView = document.querySelector('.btn-view') as HTMLElement;
        if (btnView) btnView.style.display = 'none';
      }
    });
  }

  const btnMenu = document.getElementById('btn-menu');
  if (btnMenu) {
    btnMenu.addEventListener('click', () => {
      if (btnMenu.classList.contains('open')) {
        gsap.to(camera, {
          duration: 1,
          zoom: 0.44,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        });
      } else {
        gsap.to(camera, {
          duration: 1,
          zoom: 0.22,
          onUpdate: () => {
            camera.updateProjectionMatrix();
          },
        });
      }
    });
  }

  draw();

  // 가이드
  const btnGuide = document.querySelector('.btn-guide');
  if (btnGuide) {
    btnGuide.addEventListener('click', () => {
      const guide = document.getElementById('guide');
      if (guide) guide.style.display = 'none';

      //bgm
      const musicChk = document.getElementById('music_chk') as HTMLInputElement;
      const myAudio = document.getElementById('myAudio') as HTMLAudioElement;
      const btnMusic = document.querySelector('.btn-music');

      if (musicChk?.checked && myAudio) {
        myAudio.play();
        if (btnMusic) {
          btnMusic.textContent = '노래 멈춤';
          btnMusic.classList.remove('pause');
          btnMusic.classList.add('play');
        }
      } else if (btnMusic) {
        btnMusic.textContent = '노래 재생';
        btnMusic.classList.remove('play');
        btnMusic.classList.add('pause');
      }
    });
  }
}

export default MainThree;
