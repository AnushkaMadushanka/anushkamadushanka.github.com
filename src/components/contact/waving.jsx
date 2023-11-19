/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import WavingModel from "./waving-model";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Waving({ lookRight = false }) {
	return (
		<Canvas shadows>
			<PerspectiveCamera makeDefault position={[0, 1.5, 2.2]} />
			<OrbitControls
				target={[0, 0.9, 0]}
				minPolarAngle={Math.PI / 2}
				maxPolarAngle={Math.PI / 2}
				enablePan={false}
				enableZoom={false}
			/>
			<WavingModel rotation={[0, lookRight ? Math.PI / 8 : -Math.PI / 8, 0]} />
			<ambientLight intensity={2} color="#EFEFEF" />
		</Canvas>
	);
}

export default Waving;
