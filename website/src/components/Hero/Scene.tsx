import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, Stars, Torus} from '@react-three/drei';
import * as THREE from 'three';

// Orbiting wireframe rings that surround the floating logo.
function Rings() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.z = t * 0.1;
      group.current.rotation.x = t * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Torus args={[2.0, 0.012, 16, 120]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.7} />
      </Torus>
      <Torus args={[2.5, 0.01, 16, 120]} rotation={[Math.PI / 1.7, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={0.6} />
      </Torus>
      <Torus args={[2.9, 0.008, 16, 120]} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.5} />
      </Torus>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{position: [0, 0, 6], fov: 50}}
      dpr={[1, 2]}
      gl={{antialias: true, alpha: true}}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={120} color="#22d3ee" />
      <pointLight position={[-5, -3, 2]} intensity={80} color="#a78bfa" />

      <Rings />
      <Stars radius={50} depth={50} count={2200} factor={4} saturation={0} fade speed={1} />

      {/* Decorative only — no interaction so it never traps mobile scroll/zoom */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}
