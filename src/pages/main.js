import * as THREE from 'three';
import $ from 'jquery';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Player } from './Player';
import { Roket } from './Roket';
// import { Ball } from './Ball';
import gsap from 'gsap';
import gridImg from '../assets/images/gradient.jpg';
import ballImg from '../assets/images/ball.png';
import * as CANNON from 'cannon-es';


export function MainThree() {
	// useEffect(() => {

	// Texture
	const textureLoader = new THREE.TextureLoader();
	const floorTexture = textureLoader.load(gridImg);
	const ballTexture = textureLoader.load(ballImg);

	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas,
		alpha: true,
		antialias: true
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

	// 방향성 조명
	// const light1 = new THREE.DirectionalLight(0xffffff, 1);
	// light1.position.set(0, 0, 1);
	// scene.add(light1);


	// Controls
	// const controls = new OrbitControls(camera, renderer.domElement);


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
	// cannonWorld.allowSleep = true;
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
			friction: 0.02, //마찰
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
	floorBody.quaternion.setFromAxisAngle(
		new CANNON.Vec3(-1, 0, 0),
		Math.PI / 2
	)
	cannonWorld.addBody(floorBody);

	//ball
	const BallShape = new CANNON.Sphere(0.3);
	const BallBody = new CANNON.Body({
		mass: 3,
		position: new CANNON.Vec3(2, 10, 2),
		shape: BallShape,
		material: rubberMaterial,
	});
	BallBody.quaternion.setFromAxisAngle(
		new CANNON.Vec3(0, 0, 0),
		Math.PI / 2
	)
	cannonWorld.addBody(BallBody);


	// Mesh
	const meshes = [];
	const floorMesh = new THREE.Mesh(
		new THREE.PlaneGeometry(40, 40),
		new THREE.MeshStandardMaterial({
			map: floorTexture
		})
	);
	floorMesh.name = 'floor';
	floorMesh.rotation.x = -Math.PI/2;
	floorMesh.receiveShadow = true;
	scene.add(floorMesh);
	meshes.push(floorMesh);

	const pointerMesh = new THREE.Mesh(
		new THREE.PlaneGeometry(0.8, 0.8),
		new THREE.MeshBasicMaterial({
			color: 'crimson',
			transparent: true,
			opacity: 0.3
		})
	);
	pointerMesh.rotation.x = -Math.PI/2;
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
	spotMesh.rotation.x = -Math.PI/2;
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
		material: defaultMaterial,
		// y: 1,
	});


	const BallGeometry = new THREE.SphereGeometry(0.3);
	const BallMaterial = new THREE.MeshStandardMaterial({
		// color: 'pink',
		map: ballTexture,
	});
	const BallMesh = new THREE.Mesh(BallGeometry, BallMaterial);
	// BallMesh.position.y = 0.5;
	BallMesh.castShadow = true;
	scene.add(BallMesh);



	const raycaster = new THREE.Raycaster();
	let mouse = new THREE.Vector2();
	let destinationPoint = new THREE.Vector3();
	let angle = 0;
	let isPressed = false; // 마우스를 누르고 있는 상태

	// 그리기
	const clock = new THREE.Clock();

	function draw() {
		const delta = clock.getDelta();

		//화면 주사율에 따라 최적화 화면 제공
		let cannonStepTime = 1/60;
		if (delta < 0.01) cannonStepTime = 1/120;
		cannonWorld.step(cannonStepTime, delta, 3);
		floorMesh.position.copy(floorBody.position);
		BallMesh.position.copy(BallBody.position);
		BallMesh.quaternion.copy(BallBody.quaternion);

		if (player.cannonBody) {
			player.modelMesh.position.copy(player.cannonBody.position);
		}


		if (player.mixer) player.mixer.update(delta);

		if (player.modelMesh) {
			camera.lookAt(player.modelMesh.position);
		}

		if (player.modelMesh) {

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
					// console.log('멈춤');
				}


				if (
					Math.abs(spotMesh.position.x - player.cannonBody.position.x) < 2 &&
					Math.abs(spotMesh.position.z - player.cannonBody.position.z) < 2
				) {
					if (!roket.visible) {
						// console.log('나와');
						roket.visible = true;
						// spotMesh.material.color.set('seagreen');
						gsap.to(
							roket.modelMesh.position,
							{
								duration: 1.5,
								y: 5,
								ease: "expo.in",
							}
						);
						gsap.to(
							camera.position,
							{
								duration: 1,
								y: 3,
							}
						);

						$('.btn-view').fadeIn(300);
					}
				} else if (roket.visible) {
					// console.log('들어가');
					roket.visible = false;
					// spotMesh.material.color.set('yellow');
					gsap.to(
						roket.modelMesh.position,
						{
							duration: 1.5,
							y: -0.15
						}
					);
					gsap.to(
						camera.position,
						{
							duration: 1,
							y: 3
						}
					);

					$('.btn-view').fadeOut(300);
				}
			} else {
				// 서 있는 상태
				player.actions[0].play();
				player.actions[1].stop();
			}

			

			//공 굴러가요
			if(
				Math.abs(BallBody.position.x) > 0
			) {

				if (
					Math.abs(BallBody.position.x - player.cannonBody.position.x) > 2.5 ||
					Math.abs(BallBody.position.z - player.cannonBody.position.z) > 2.5
				) {
					gsap.to(
						BallBody.angularVelocity,
						{
							duration: 1,
							x: 0,
							y: 0,
							z: 0,
						}
					);
					// BallBody.angularVelocity.set(0, 0, 0);
		
					gsap.to(
						BallBody.velocity,
						{
							duration: 0.5,
							x: 0,
							y: 0,
							z: 0,
						}
					);
					// BallBody.velocity.set(0, 0, 0);
					// console.log('공 멈춰요');
				}

			}

		}



		

		renderer.render(scene, camera);
		renderer.setAnimationLoop(draw);



	}

	function checkIntersects() {
		// raycaster.setFromCamera(mouse, camera);

		const intersects = raycaster.intersectObjects(meshes);
		for (const item of intersects) {
			if (item.object.name === 'floor') {
				destinationPoint.x = item.point.x;
				destinationPoint.y = 0.3;
				destinationPoint.z = item.point.z;
				player.modelMesh.lookAt(destinationPoint);

				// console.log(item.point)

				player.moving = true;

				pointerMesh.position.x = destinationPoint.x;
				pointerMesh.position.z = destinationPoint.z;
			}
			break;
		}

	}

	function setSize() {
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
	function calculateMousePosition(e) {
		mouse.x = e.clientX / canvas.clientWidth * 2 - 1;
		mouse.y = -(e.clientY / canvas.clientHeight * 2 - 1);
	}

	// 변환된 마우스 좌표를 이용해 래이캐스팅
	function raycasting() {
		raycaster.setFromCamera(mouse, camera);
		checkIntersects();
	}

	// 마우스 이벤트
	canvas.addEventListener('mousedown', e => {
		isPressed = true;
		calculateMousePosition(e);
	});
	canvas.addEventListener('mouseup', () => {
		isPressed = false;
	});
	canvas.addEventListener('mousemove', e => {
		if (isPressed) {
			calculateMousePosition(e);
		}
	});

	// 터치 이벤트
	canvas.addEventListener('touchstart', e => {
		isPressed = true;
		calculateMousePosition(e.touches[0]);
	});
	canvas.addEventListener('touchend', () => {
		isPressed = false;
	});
	canvas.addEventListener('touchmove', e => {
		if (isPressed) {
			calculateMousePosition(e.touches[0]);
		}
	});





	//초기화
	$(document).on('click', '.btn-reset', function(){
		// window.location.reload();
		
		player.cannonBody.position.set(-0.05, 0.3, -0.2);
		player.modelMesh.rotation.y = 0;
		destinationPoint.set(0, 0.3, 0);
		camera.position.set(1, 3, 5);
		pointerMesh.position.set(-0.05, 0.1, 0.2);
		
		BallBody.position.set(2, 2, 2);
		BallBody.angularVelocity.set(0, 0, 0);
		BallBody.velocity.set(0, 0, 0);

		roket.visible = false;
		spotMesh.material.color.set('yellow');
		gsap.to(
			roket.modelMesh.position,
			{
				duration: 0.5,
				y: -0.15
			}
		);

		$('.btn-view').hide();
		

	})


	$(document).on('click', '#btn-menu', function(){
		
		if($(this).hasClass('open')) {
			gsap.to(
				camera,
				{
					duration: 1,
					zoom: 0.22,
					onUpdate: function () {
						$('#btn-menu').removeClass('open');
						camera.updateProjectionMatrix();
					}
				}
			);

		} else {

			gsap.to(
				camera,
				{
					duration: 1,
					zoom: 0.5,
					// x: 3,
					// y: 1.5,
					// z: 3,
					onUpdate: function () {
						$('#btn-menu').addClass('open');
						camera.updateProjectionMatrix();
					}
				}
			);

		}


		
	})



	draw();


	// 가이드
	if (!sessionStorage.getItem('guide')) {
		$('#guide').show();

		$(document).on('click', '.btn-guide', function(){
			$('#guide').hide();
		
				//bgm
				if ($('#music_chk').is(':checked')){
					document.getElementById('myAudio').play();
					$('.btn-music').text('노래 멈춤').removeClass('pause').addClass('play');
				} else {
					$('.btn-music').text('노래 재생').removeClass('play').addClass('pause');
				}

				sessionStorage.setItem('guide', 'Y');
				
		});
	} else {
		return;
	}


	// }, []);

}

export default MainThree;