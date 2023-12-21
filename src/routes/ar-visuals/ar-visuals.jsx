import { useCallback, useEffect, useRef, useState } from "react";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
import * as THREE from "three";
import styles from "./ar-visuals.module.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AiFillHome } from "react-icons/ai";

const loader = new GLTFLoader();
const texureLoader = new THREE.TextureLoader()

const PUBLIC_URL = import.meta.env.PROD
	? "https://anushkamadushanka.github.io"
	: "https://127.0.0.1:5173/";

export default function ArVisuals() {
	const containerRef = useRef(null);
	const isUsed = useRef(false);
	const mindarThree = useRef(null);
	const mixer = useRef(null);
	const imgPlaneRef = useRef(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const imagePlaneInterval = useRef(null);
	const loaderTopRef = useRef(null);
	const [progress, setProgress] = useState(0);

	const openLink = useCallback((url) => {
		window.open(url, "_blank") || window.location.assign(url);
	}, []);

	const onPointerDown = useCallback((event) => {
		event.preventDefault();
		const { renderer, scene, camera } = mindarThree.current;
		const { x, y } = event;
		const mouse = new THREE.Vector2();
		mouse.x = (x / renderer.domElement.clientWidth) * 2 - 1;
		mouse.y = -(y / renderer.domElement.clientHeight) * 2 + 1;
		const raycaster = new THREE.Raycaster();
		raycaster.setFromCamera(mouse, camera);
		const intersects = raycaster.intersectObjects(scene.children, true);
		if (intersects.length > 0) {
			if (intersects[0].object.name.startsWith("button_linkedin"))
				openLink("https://www.linkedin.com/in/anushka-madushanka/");
			else if (intersects[0].object.name.startsWith("button_github"))
				openLink("https://github.com/AnushkaMadushanka/");
			else if (intersects[0].object.name.startsWith("button_pdf"))
				openLink("https://anushkamadushanka.github.io/cv.pdf");
			else if (intersects[0].object.name.startsWith("button_home"))
				openLink("https://anushkamadushanka.github.io");
			else if (intersects[0].object.name === "plane_ai_images") {
				setCurrentImageIndex((prev) => (prev + 1) % 11);
				clearInterval(imagePlaneInterval.current);
				setProgress(0);
				imagePlaneInterval.current = setInterval(() => {
					setProgress((prev) => (prev + 1) % 100);
				}, 30);
			}
		}
	}, [openLink]);

	useEffect(() => {
		if (isUsed.current) {
			return;
		}
		isUsed.current = true;
		mindarThree.current = new MindARThree({
			container: containerRef.current,
			imageTargetSrc: `${PUBLIC_URL}/targets.mind`,
		});
		const anchor = mindarThree.current.addAnchor(0);
		const group = new THREE.Group();
		anchor.group.add(group);
		group.add(new THREE.AmbientLight(0xefefef, 2));
		const geometry = new THREE.PlaneGeometry(1, 0.55);
		const material = new THREE.MeshBasicMaterial({
			color: 0x1f232e,
			transparent: true,
			opacity: 0.1,
		});
		const plane = new THREE.Mesh(geometry, material);
		group.add(plane);

		const imgGroup = new THREE.Group();
		group.add(imgGroup);

		const imgGeometry = new THREE.PlaneGeometry(0.3, 0.55);
		const imgMaterial = new THREE.MeshBasicMaterial({
			map: texureLoader.load(`/aiimages/1.webp`),
		});
		const imgPlane = new THREE.Mesh(imgGeometry, imgMaterial);
		imgPlane.name = "plane_ai_images";
		imgGroup.add(imgPlane);
		imgGroup.position.set(0.7, 0, 0);
		imgPlaneRef.current = imgPlane;

		imagePlaneInterval.current = setInterval(() => {
			setProgress((prev) => (prev + 1) % 100);
		}, 30);

		const loaderGeometry = new THREE.PlaneGeometry(0.3, 0.01);
		const loaderTopMaterial = new THREE.MeshBasicMaterial({
			color: 0xffffff,
		});
		const loaderBottomMaterial = new THREE.MeshBasicMaterial({
			color: 0x666666,
		});
		loaderTopRef.current = new THREE.Mesh(loaderGeometry, loaderTopMaterial);
		const loaderBottom = new THREE.Mesh(loaderGeometry, loaderBottomMaterial);
		imgGroup.add(loaderTopRef.current);
		imgGroup.add(loaderBottom);
		loaderTopRef.current.position.set(0, -0.3, 0.001);
		loaderBottom.position.set(0, -0.3, 0);
		loaderTopRef.current.scale.set(0, 1, 1);

		const { renderer, scene, camera } = mindarThree.current;

		const wavingPromise = new Promise((resolve, reject) => {
			loader.load(
				"/waving.glb",
				function (gltf) {
					gltf.scene.scale.set(0.3, 0.3, 0.3);
					gltf.scene.position.set(-0.7, -0.3, 0);
					group.add(gltf.scene);
					mixer.current = new THREE.AnimationMixer(gltf.scene);
					gltf.animations.forEach((clip) => {
						mixer.current.clipAction(clip).play();
					});
					resolve();
				},
				function (xhr) {
					console.log(`Waving model ${(xhr.loaded / xhr.total) * 100}% loaded`);
				},
				function (error) {
					console.log(error);
					reject();
				}
			);
		});
		const buttonsPromise = new Promise((resolve, reject) => {
			loader.load(
				"/buttons.glb",
				function (gltf) {
					gltf.scene.scale.set(0.075, 0.075, 0.075);
					gltf.scene.position.set(-0.35, -0.47, 0);
					gltf.scene.rotation.set(Math.PI / 2, 0, 0);
					gltf.scene.traverse((o) => {
						if (o.isMesh) {
							o.material = new THREE.MeshBasicMaterial({
								color: o.material.color,
								opacity: o.material.opacity,
								transparent: true,
							});
						}
					});
					group.add(gltf.scene);
					resolve();
				},
				function (xhr) {
					console.log(`Buttons model ${(xhr.loaded / xhr.total) * 100}% loaded`);
				},
				function (error) {
					console.log(error);
					reject();
				}
			);
		});

		Promise.all([wavingPromise, buttonsPromise])
			.then(() => {
				mindarThree.current.start().then(() => {
					console.log("MindAR started", mindarThree.current);
					renderer.setAnimationLoop(() => {
						mixer.current.update(0.01);
						renderer.render(scene, camera);
					});
					window.addEventListener("pointerdown", onPointerDown);
				});
			})
			.catch(() => {
				console.log("Error loading models");
			});
		return () => {
			window.removeEventListener("pointerdown", onPointerDown);
			if (mindarThree.current && mindarThree.current.controller) {
				mindarThree.current.stop();
			}
		};
	}, [onPointerDown]);

	useEffect(() => {
		if (imgPlaneRef.current) {
			imgPlaneRef.current.material.map = texureLoader.load(
				`/aiimages/${currentImageIndex + 1}.webp`
			);
		}
	}, [currentImageIndex]);

	useEffect(() => {
		if (loaderTopRef.current) 
			loaderTopRef.current.scale.set(progress / 100, 1, 1);
		if (progress === 99) 
			setCurrentImageIndex((prev) => (prev + 1) % 11);
	}, [progress]);

	return (
		<>
			<div className={styles.arContainer} ref={containerRef}></div>
			<div className={styles.navigation}>
				<a
					className={styles.btn}
					href="https://anushkamadushanka.github.io"
				>
					<AiFillHome />
				</a>
			</div>
		</>
	);
}
