# Workflow Motion Plan

## 1. Definir Camadas
- Layer 1: Core (DOM, CSS, FLIP)
- Layer 2: 3D (R3F, Shaders, Postprocessing)
- Layer 3: Scroll (Lenis, ScrollTrigger, parallax)
- Layer 4: Micro (Rive, Lottie, Anime.js)
- Layer 5: Storytelling (GSAP + R3F sincronizados)

## 2. Escolher Ferramentas
- Scroll: Lenis ou ScrollSmoother?
- 3D: R3F ou Spline?
- Micro: Rive ou Lottie?
- Shaders: GLSL ou WGSL?

## 3. Estimar Performance
- Bundle por camada
- FPS esperado (mobile, desktop)
- Fallbacks (reduced-motion, WebGL nao suportado)

## 4. Implementar
- Comecar pelo core (DOM, CSS)
- Adicionar scroll (Lenis)
- Adicionar 3D (R3F)
- Adicionar micro (Rive, Lottie)
- Sincronizar tudo (ScrollTrigger)

## 5. Testar
- 60fps constante?
- Reduced-motion funciona?
- Mobile suave?
- Bundle <200KB?

## 6. Iterar
- Otimizar (geometrias, shaders, bundle)
- Cortar o que nao agrega
- Medir impacto (analytics, heatmaps)
