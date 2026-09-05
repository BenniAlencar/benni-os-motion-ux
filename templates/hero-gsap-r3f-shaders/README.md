# Template Hero GSAP + R3F + Shaders

Stack: Next.js 14 + GSAP 3.13 + Three.js r160 + R3F 8.15 + Drei 9.100 + Postprocessing 2.15

## Instalacao

```bash
npm install gsap @gsap/react three @react-three/fiber @react-three/drei @react-three/postprocessing
```

## Estrutura

- `src/app/page.tsx`: Canvas R3F fixo, ScrollControls 5 paginas, Overlay DOM
- `src/components/Scene.tsx`: ShaderTorus (uTime, uScroll), GlassSphere, Bloom, ChromaticAberration
- `src/components/Overlay.tsx`: Secoes reveal + pin-section com ScrollTrigger

## Como rodar

```bash
npm run dev
```

## Deploy Vercel

```bash
npm run build
vercel deploy --prod
```

## Customizacao

- Troque ShaderTorus por seu modelo GLB com useGLTF
- Substitua Environment preset por seu HDR
- Ajuste pages={5} no ScrollControls conforme conteudo
- Adicione Lenis para smooth scroll opcional
