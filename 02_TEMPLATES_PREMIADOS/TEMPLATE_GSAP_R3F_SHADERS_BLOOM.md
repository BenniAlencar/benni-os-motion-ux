# TEMPLATE GSAP + R3F + SHADERS + BLOOM

## Conceito
Hero 3D com shader custom animado pelo scroll + Bloom cinematico + Overlay DOM com ScrollTrigger.

## Stack
Next.js 14 + GSAP 3.13 + R3F 8.15 + Drei 9.100 + Postprocessing 2.15

## Estrutura
- page.tsx: Canvas R3F fixo, ScrollControls 5 paginas, Overlay DOM
- Scene.tsx: ShaderTorus (uTime, uScroll), GlassSphere, Bloom, ChromaticAberration
- Overlay.tsx: Secoes reveal + pin-section

## Implementacao
Ver templates/hero-gsap-r3f-shaders/

## QA
- dpr={[1,2]} para performance
- Bloom mipmapBlur
- ScrollControls sincroniza com ScrollTrigger
