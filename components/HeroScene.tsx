"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.15;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.6, 3]} />
      <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function Particles({ count = 1800 }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    ref.current.rotation.y -= delta * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a5b4fc"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x +=
      (state.pointer.x * 0.6 - state.camera.position.x) * 0.05;
    state.camera.position.y +=
      (state.pointer.y * 0.4 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 60 }} dpr={[1, 1.5]}>
      <Globe />
      <Particles />
      <Rig />
    </Canvas>
  );
}