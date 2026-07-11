"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const count = 60;
  const maxDistance = 2.2;
  
  // Set up particle velocities and random positions inside a 3D box
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return [pos, vel];
  }, []);

  // Pre-allocate array for drawing up to count * (count - 1) / 2 lines
  // Size = Max lines * 2 vertices * 3 coordinates
  const linePositions = useMemo(() => new Float32Array(1800 * 2 * 3), []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;
    
    // 1. Update node positions
    const nodePosAttr = pointsRef.current.geometry.attributes.position;
    const nodePositions = nodePosAttr.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      nodePositions[i * 3] += velocities[i * 3];
      nodePositions[i * 3 + 1] += velocities[i * 3 + 1];
      nodePositions[i * 3 + 2] += velocities[i * 3 + 2];
      
      // Bounding box bounce check
      if (Math.abs(nodePositions[i * 3]) > 3.5) velocities[i * 3] *= -1;
      if (Math.abs(nodePositions[i * 3 + 1]) > 3.5) velocities[i * 3 + 1] *= -1;
      if (Math.abs(nodePositions[i * 3 + 2]) > 3.5) velocities[i * 3 + 2] *= -1;
    }
    nodePosAttr.needsUpdate = true;
    
    // 2. Re-calculate nearest lines
    let lineIdx = 0;
    for (let i = 0; i < count; i++) {
      const x1 = nodePositions[i * 3];
      const y1 = nodePositions[i * 3 + 1];
      const z1 = nodePositions[i * 3 + 2];
      
      for (let j = i + 1; j < count; j++) {
        const x2 = nodePositions[j * 3];
        const y2 = nodePositions[j * 3 + 1];
        const z2 = nodePositions[j * 3 + 2];
        
        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < maxDistance && lineIdx < 1800) {
          linePositions[lineIdx * 6] = x1;
          linePositions[lineIdx * 6 + 1] = y1;
          linePositions[lineIdx * 6 + 2] = z1;
          
          linePositions[lineIdx * 6 + 3] = x2;
          linePositions[lineIdx * 6 + 4] = y2;
          linePositions[lineIdx * 6 + 5] = z2;
          lineIdx++;
        }
      }
    }
    
    const linePosAttr = linesRef.current.geometry.attributes.position;
    linePosAttr.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIdx * 2);

    // 3. Mouse hover parallax tilt effect
    const { x, y } = state.pointer;
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, x * 0.3, 0.05);
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, -y * 0.3, 0.05);
    
    linesRef.current.rotation.y = pointsRef.current.rotation.y;
    linesRef.current.rotation.x = pointsRef.current.rotation.x;
  });

  return (
    <group>
      {/* Nodes (Glowing points) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#818cf8"
          size={0.12}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
          depthWrite={false}
        />
      </points>
      
      {/* Connections (Fading line paths) */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4f46e5"
          transparent={true}
          opacity={0.25}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
