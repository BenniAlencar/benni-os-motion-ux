# SKILL 17: Rapier Fisica 2D/3D Mestre

## O que e
Rapier = engine de fisica 3D (e 2D) leve e rapida.

## Instalacao R3F
npm install @react-three/rapier
import { Physics, RigidBody } from '@react-three/rapier'

## Padrao
<Physics>
  <RigidBody>
    <mesh><boxGeometry /><meshStandardMaterial /></mesh>
  </RigidBody>
</Physics>

## QA
- Fisica em tempo real (colisoes, gravidade, forcas)
- Use para galerias 3D interativas, jogos
- Leve, 60fps em mobile
