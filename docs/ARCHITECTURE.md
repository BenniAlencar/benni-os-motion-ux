# Arquitetura Benni OS Motion/UX

## 5 Camadas

### Layer 1: Core (DOM + CSS)
- Motion One para layout animations em React
- CSS transforms com will-change e contain
- FLIP para transicoes de layout

### Layer 2: 3D & WebGL
- Three.js / R3F / Drei
- Shaders custom (vertex, fragment, uniforms)
- Postprocessing (Bloom, Vignette, ChromaticAberration)

### Layer 3: Scroll & Parallax
- Lenis (smooth scroll leve)
- GSAP ScrollSmoother (parallax data-speed/data-lag)
- Observer (detect wheel, touch, pointer)

### Layer 4: Micro-interacoes
- Rive (state machines interativas)
- Lottie/dotLottie (animacoes lineares)
- Anime.js v4 (animacoes leves, 9KB)

### Layer 5: Storytelling
- GSAP ScrollTrigger + R3F ScrollControls sincronizados
- Theatre.js timeline visual
- Spline 3D interativo
- Fisica Rapier

## Exemplo de Integracao

Canvas R3F fixo no background + Overlay DOM scrollavel
ScrollControls sincroniza progresso do scroll com animacoes 3D
ScrollTrigger anima elementos DOM (reveal, pin, parallax)
