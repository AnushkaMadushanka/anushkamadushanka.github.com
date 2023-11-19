/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 head_only.glb 
*/

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { MathUtils } from 'three';

function getMousePos(e) {
	return {
		x: e.clientX || (e.touches && e.touches[0].clientX),
		y: e.clientY || (e.touches && e.touches[0].clientY),
	};
}

function getMouseDegrees(x, y, degreeLimit) {
	let dx = 0,
		dy = 0,
		xdiff,
		xPercentage,
		ydiff,
		yPercentage;

	let w = { x: window.innerWidth, y: window.innerHeight };

	// Left (Rotates neck left between 0 and -degreeLimit)

	// 1. If cursor is in the left half of screen
	if (x <= w.x / 2) {
		// 2. Get the difference between middle of screen and cursor position
		xdiff = w.x / 2 - x;
		// 3. Find the percentage of that difference (percentage toward edge of screen)
		xPercentage = (xdiff / (w.x / 2)) * 100;
		// 4. Convert that to a percentage of the maximum rotation we allow for the neck
		dx = ((degreeLimit * xPercentage) / 100) * -1;
	}
	// Right (Rotates neck right between 0 and degreeLimit)
	if (x >= w.x / 2) {
		xdiff = x - w.x / 2;
		xPercentage = (xdiff / (w.x / 2)) * 100;
		dx = (degreeLimit * xPercentage) / 100;
	}
	// Up (Rotates neck up between 0 and -degreeLimit)
	if (y <= w.y / 2) {
		ydiff = w.y / 2 - y;
		yPercentage = (ydiff / (w.y / 2)) * 100;
		// Note that I cut degreeLimit in half when she looks up
		dy = ((degreeLimit * 0.5 * yPercentage) / 100) * -1;
	}

	// Down (Rotates neck down between 0 and degreeLimit)
	if (y >= w.y / 2) {
		ydiff = y - w.y / 2;
		yPercentage = (ydiff / (w.y / 2)) * 100;
		dy = (degreeLimit * yPercentage) / 100;
	}
	return { x: dx, y: dy };
}

function moveJoint(mouse, joint, degreeLimit) {
	let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
	joint.rotation.y = MathUtils.degToRad(MathUtils.clamp(degrees.x, -26, 26));
	joint.rotation.x = MathUtils.degToRad(MathUtils.clamp(degrees.y, -20, 16));
}

export default function Model(props) {
	const { nodes, materials } = useGLTF("/head_only.glb");

	const neck = nodes.Head;
	useEffect(() => {
		const onMouseMove = (e) => {
			const mousecoords = getMousePos(e);
			if (neck) {
				moveJoint(mousecoords, neck, 50);
			}
		};
		document.addEventListener("mousemove", onMouseMove);
		return () => {
			document.removeEventListener("mousemove", onMouseMove);
		};
	}, [neck]);
	return (
		<group {...props} dispose={null}>
			<primitive object={nodes.Hips} />
			<mesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials.Wolf3D_Outfit_Top}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			{/* <skinnedMesh
				geometry={nodes.Wolf3D_Hair001.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Wolf3D_Hair001.skeleton}
			/> */}
			<skinnedMesh
				geometry={nodes.EyeLeft.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeLeft.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.EyeRight.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeRight.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials.Wolf3D_Skin}
				skeleton={nodes.Wolf3D_Head.skeleton}
			/>
		</group>
	);
}

useGLTF.preload("/head_only.glb");
