import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import { canvas } from "react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "react-three/drei";
import canvasLoader from '../canvasLoader';

const Computers = () => {
  const computer = useGLTF('/Users/algohussle/Documents/builds/3D-portfolio/public/desktop_pc/scene.gltf')


  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black'
      />
    </mesh>
  )
}

export default Computers