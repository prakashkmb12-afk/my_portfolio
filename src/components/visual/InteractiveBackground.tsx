"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the WebGL Canvas with SSR disabled to prevent compile/build errors
const NeuralNetworkCanvas = dynamic(
  () => import("./NeuralNetworkCanvas"),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-transparent" />
  }
);

export default function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Dynamic Glow Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      {/* Vercel-style Fading Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      {/* 3D Neural Particle Network Canvas */}
      {mounted && (
        <div className="absolute inset-0 opacity-70 dark:opacity-85 pointer-events-none [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_65%,transparent_100%)]">
          <NeuralNetworkCanvas />
        </div>
      )}
    </div>
  );
}
