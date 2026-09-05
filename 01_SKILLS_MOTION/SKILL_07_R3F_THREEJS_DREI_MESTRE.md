# SKILL 07: R3F + Three.js + Drei Mestre

## O que e
R3F = React Three Fiber (Three.js declarativo para React)
Drei = utilitarios para R3F (Environment, ContactShadows, Text, Html, Sparkles, etc.)

## Instalacao
npm install three @react-three/fiber @react-three/drei

## Padroes
- Canvas: <Canvas camera={{ position: [0,0,5], fov: 45 }} dpr={[1,2]}>
- useFrame: hook para loop de animacao
- Hooks: useThree, useLoader, useGLTF, useTexture
- Drei: Environment, ContactShadows, Text, Html, Sparkles, Float, MeshTransmissionMaterial

## QA
- dpr={[1,2]} para performance
- useGeometry, useMaterial para reutilizar
- Environment preset="city" ou HDR custom
- ContactShadows mais barato que shadows:true
