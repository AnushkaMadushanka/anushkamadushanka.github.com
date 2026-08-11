import { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { MathUtils } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL = "/head.glb";
const YAW_LIMIT = 26;
const PITCH_MIN = -20;
const PITCH_MAX = 16;

/* The model sits at head height in world space (y between about 1.5 and 1.86)
   rather than at the origin, so the camera has to be aimed at it explicitly.
   r3f points its default camera at [0,0,0], which aims this one at the floor. */
const EYE_LEVEL = 1.68;

/**
 * Maps a pointer position to head rotation. Pure function of pointer and
 * viewport, so it can be called straight from a rAF loop.
 */
function rotationFor(x, y, degreeLimit = 50) {
	const halfW = window.innerWidth / 2;
	const halfH = window.innerHeight / 2;

	const yaw = ((x - halfW) / halfW) * degreeLimit;
	/* Looking up reads as unnatural much sooner than looking down, so the
	   upward half of the range is damped. */
	const rawPitch = ((y - halfH) / halfH) * degreeLimit;
	const pitch = rawPitch < 0 ? rawPitch * 0.5 : rawPitch;

	return {
		yaw: MathUtils.degToRad(MathUtils.clamp(yaw, -YAW_LIMIT, YAW_LIMIT)),
		pitch: MathUtils.degToRad(MathUtils.clamp(pitch, PITCH_MIN, PITCH_MAX)),
	};
}

function Head({ onReady }) {
	const gltf = useLoader(GLTFLoader, MODEL);
	const target = useRef({ yaw: 0, pitch: 0 });
	const neck = gltf.scene.getObjectByName("Head");

	/* Tell the hero the model is actually on screen, so it can fade out the
	   static portrait underneath. Until this fires the photo stays put. If the
	   GLB never loads, the visitor still sees a portrait. */
	useEffect(() => {
		onReady?.();
	}, [onReady]);

	useEffect(() => {
		if (!neck) return;

		let frame = 0;
		const onMove = (e) => {
			target.current = rotationFor(e.clientX, e.clientY);
		};

		/* Ease toward the target in a rAF loop rather than writing rotation
		   straight from the pointer event, which is smoother and decouples the
		   update rate from how fast the pointer fires. */
		const tick = () => {
			neck.rotation.y += (target.current.yaw - neck.rotation.y) * 0.1;
			neck.rotation.x += (target.current.pitch - neck.rotation.x) * 0.1;
			frame = requestAnimationFrame(tick);
		};

		window.addEventListener("pointermove", onMove, { passive: true });
		frame = requestAnimationFrame(tick);

		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(frame);
		};
	}, [neck]);

	return <primitive object={gltf.scene} />;
}

export default function Avatar3D({ className, onReady }) {
	return (
		/*
		 * The canvas is transparent and sits directly over the static portrait,
		 * so if the browser drops the WebGL context the photo simply shows
		 * through. No error state to manage, and nothing for the visitor to see.
		 */
		<div className={className} aria-hidden="true">
			<Canvas
				dpr={[1, 1.75]}
				camera={{ position: [0, 1.7, 0.66], fov: 50 }}
				gl={{ antialias: true, powerPreference: "low-power", alpha: true }}
				onCreated={({ camera }) => camera.lookAt(0, EYE_LEVEL, 0)}
			>
				<ambientLight intensity={2} color="#EFEFEF" />
				<Suspense fallback={null}>
					<Head onReady={onReady} />
				</Suspense>
			</Canvas>
		</div>
	);
}
