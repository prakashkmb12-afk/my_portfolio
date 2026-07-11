"use client";

import { Canvas } from "@react-three/fiber";
import NeuralNetwork from "./NeuralNetwork";

export default function NeuralNetworkCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 65 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
