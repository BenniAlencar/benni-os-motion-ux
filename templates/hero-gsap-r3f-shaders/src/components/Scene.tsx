'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Float, Environment, ContactShadows, MeshTransmissionMaterial, Text, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

function ShaderTorus(){
  const meshRef = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const scroll = useScroll()

  const uniforms = useMemo(()=>({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#ff00ff') },
    uScroll: { value: 0 }
  }),[])

  useFrame((state, delta)=>{
    const offset = scroll.offset
    if(matRef.current){
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime
      matRef.current.uniforms.uScroll.value = offset
    }
    if(meshRef.current){
      meshRef.current.rotation.y = offset * Math.PI * 4
      meshRef.current.rotation.x = offset * Math.PI * 2
      meshRef.current.position.y = Math.sin(offset * 10) * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 256, 32]} />
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={`
            uniform float uTime;
            uniform float uScroll;
            varying vec2 vUv;
            varying vec3 vNormal;
            void main(){
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              vec3 pos = position;
              pos += normal * sin(pos.x * 5.0 + uTime * 2.0 + uScroll * 10.0) * 0.1;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 uColor;
            uniform float uTime;
            uniform float uScroll;
            varying vec2 vUv;
            varying vec3 vNormal;
            void main(){
              float fresnel = pow(1.0 - dot(vNormal, vec3(0.0,0.0,1.0)), 3.0);
              vec3 color1 = vec3(1.0, 0.0, 1.0);
              vec3 color2 = vec3(0.0, 1.0, 1.0);
              vec3 mixed = mix(color1, color2, uScroll + sin(uTime)*0.2);
              vec3 finalColor = mixed + fresnel * 0.8;
              gl_FragColor = vec4(finalColor, 1.0);
            }
          `}
        />
      </mesh>
    </Float>
  )
}

function GlassSphere(){
  const scroll = useScroll()
  const ref = useRef<THREE.Mesh>(null)
  useFrame(()=>{ if(ref.current) ref.current.rotation.y = scroll.offset * Math.PI * 2 })
  return (
    <mesh ref={ref} position={[2,0,0]}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <MeshTransmissionMaterial transmission={1} thickness={0.5} roughness={0.1} chromaticAberration={0.06} distortion={0.1} color="#ffffff" />
    </mesh>
  )
}

export default function Scene(){
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5,5,5]} intensity={1} castShadow shadow-mapSize={2048} />
      <ShaderTorus />
      <GlassSphere />
      <Text position={[0,2,0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">SCROLL</Text>
      <Sparkles count={100} scale={10} size={0.1} speed={0.3} />
      <Environment preset="city" />
      <ContactShadows position={[0,-2,0]} opacity={0.5} scale={10} blur={2} far={4} />
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.15} luminanceSmoothing={0.9} mipmapBlur />
        <ChromaticAberration offset={[0.0005,0.0005]} />
        <Vignette eskil={false} offset={0.1} darkness={0.4} />
      </EffectComposer>
    </>
  )
}
