import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';


const Computers = () => {
  const computer = useGLTF('./desktop_')


  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black'
      />
      <pointLight intensity={1} />
      <primitive 
      object={computer.scene} 
      scale={0.75}
      position={[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
    frameLoop='demand'
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false} 
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Computers;