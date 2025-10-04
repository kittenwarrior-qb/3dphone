import { ContactShadows } from '@react-three/drei'

const Lights = () => {
	return (
		<>
			<hemisphereLight intensity={1.5} groundColor="#fff" />
			<directionalLight 
				intensity={3} 
				position={[1, 4, 3]} 
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
			/>
			<directionalLight intensity={2} position={[-3, 2, -3]} />
			<ContactShadows
				position={[0, -1.99, 0]}
				blur={2}
				opacity={0.6}
				scale={15}
				color="#333"
			/>
		</>
	)
}

export default Lights
