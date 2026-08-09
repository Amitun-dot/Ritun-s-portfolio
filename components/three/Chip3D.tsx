'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Sparkles,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';

/* =========================================================
   RASPBERRY PI 3D MODEL
   ========================================================= */

function RaspberryPi() {
  const { scene } = useGLTF('/raspberry-pi.glb');

  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();

    // Target rotation based on mouse position
    const targetY =
      t * 0.08 + mouse.x * 0.35;

    const targetX =
      -0.18 + mouse.y * 0.18;

    // Smooth movement
    groupRef.current.rotation.y +=
      (targetY - groupRef.current.rotation.y) * 0.05;

    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={0.60}
        position={[0, -0.15, 0]}
        rotation={[0.15, 0.15, 0]}
      />
    </group>
  );
}

useGLTF.preload('/raspberry-pi.glb');


/* =========================================================
   FLOATING ELECTRONIC NODES
   ========================================================= */

function FloatingNodes() {
  const nodesRef = useRef<THREE.Group>(null);

  const nodes = useMemo(
    () =>
      Array.from({ length: 14 }).map(() => ({
        position: [
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2.5,
        ] as [number, number, number],

        scale:
          0.018 + Math.random() * 0.045,

        speed:
          0.4 + Math.random() * 0.8,

        phase:
          Math.random() * Math.PI * 2,
      })),
    []
  );

  useFrame(({ clock }) => {
    if (!nodesRef.current) return;

    const t = clock.getElapsedTime();

    nodesRef.current.children.forEach(
      (child, i) => {
        const node = nodes[i];

        child.position.y =
          node.position[1] +
          Math.sin(
            t * node.speed + node.phase
          ) *
            0.08;
      }
    );
  });

  return (
    <group ref={nodesRef}>
      {nodes.map((node, i) => (
        <mesh
          key={`node-${i}`}
          position={node.position}
          scale={node.scale}
        >
          <sphereGeometry
            args={[1, 12, 12]}
          />

          <meshBasicMaterial
            color={
              i % 2 === 0
                ? '#22d3ee'
                : '#8b5cf6'
            }
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}


/* =========================================================
   MAIN 3D HERO
   ========================================================= */

export default function Chip3D() {
  return (
    <div className="absolute inset-0">

      <Canvas
        camera={{
  position: [0, 1.6, 5],
  fov: 45,
}}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{
          background: 'transparent',
        }}
      >

        {/* =================================================
            MAIN LIGHTING
           ================================================= */}

        {/* General scene illumination */}
        <ambientLight
          intensity={1.2}
        />

        {/* Main white light */}
        <directionalLight
          position={[4, 5, 4]}
          intensity={2.5}
          color="#ffffff"
        />

        {/* Cyan rim light */}
        <pointLight
          position={[-3, 2, 2]}
          intensity={1.5}
          color="#22d3ee"
        />

        {/* Purple rim light */}
        <pointLight
          position={[3, 1, -2]}
          intensity={1.2}
          color="#8b5cf6"
        />

        {/* Additional top light */}
        <pointLight
          position={[0, 4, 1]}
          intensity={0.8}
          color="#ffffff"
        />


        {/* =================================================
            RASPBERRY PI
           ================================================= */}

        <Suspense fallback={null}>

          <Float
            speed={1.2}
            rotationIntensity={0.08}
            floatIntensity={0.2}
          >
            <RaspberryPi />
          </Float>

        </Suspense>


        {/* =================================================
            FLOATING NODES
           ================================================= */}

        <FloatingNodes />


        {/* =================================================
            BACKGROUND PARTICLES
           ================================================= */}

        <Sparkles
          count={45}
          scale={5}
          size={2}
          speed={0.3}
          color="#22d3ee"
          opacity={0.4}
        />

      </Canvas>

    </div>
  );
}