"use client";
import { Suspense, useState } from "react";
import models from "@/constants/models.json";
import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import Lights from "./Lights";
import Screen from "./Screen";

const Scene = () => {
  const [model, setModel] = useState<IModel>(models[0]);
  const handleModel = (model: IModel) => {
    setModel(model);
  };

  return (
    <main
      style={{
        background: `radial-gradient(circle, ${model.color}90 0%, rgba(224, 224, 224, 1) 100%)`,
      }}
      className="w-screen h-screen flex justify-center items-center"
    >
      <Canvas camera={{ fov: 55, position: [4, 1, 2.5] }} shadows>
        <Suspense
          fallback={
            <Html>
              <div
                style={{ borderColor: model.color }}
                className="border-[4px] w-[40px] h-[40px] animate-spin"
              ></div>
            </Html>
          }
        >
          <OrbitControls
            target={[0, 0, 0]}
            maxDistance={8}
            minDistance={2}
            enablePan={true}
          />

          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 0]}
          >
            <meshStandardMaterial color="#f0f0f0" transparent opacity={0.8} />
          </mesh>

          <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.5}>
            <Model url={model.url} />
            <Screen handleModel={handleModel}  />
          </Float>
          <Lights />
        </Suspense>
      </Canvas>
    </main>
  );
};

export default Scene;
