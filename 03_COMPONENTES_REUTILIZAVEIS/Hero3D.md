# Componente Hero3D

## Descricao
Hero 3D com shader custom + Bloom + ScrollControls.

## Props
- pages: number (default: 5)
- shaderType: 'torus' | 'sphere' | 'custom'
- bloomIntensity: number (default: 1.2)

## Uso
import Hero3D from '@/components/Hero3D'
<Hero3D pages={5} shaderType="torus" bloomIntensity={1.2} />

## Stack
R3F, Drei, Postprocessing, GSAP ScrollTrigger

## QA
- dpr={[1,2]}
- Bloom mipmapBlur
- ScrollControls + Overlay sincronizados
