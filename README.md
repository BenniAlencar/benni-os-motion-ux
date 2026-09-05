# 🎬 Benni OS Motion/UX

> **Sistema Paralelo de Motion Design, Criaçª£o de Sites, Interfaces e UI/UX**

[![Status](https://img.shields.io/badge/status-proposed-blue)](https://github.com/benni-os/benni-os-motion-ux)
[![VersÌ£o](https://img.shields.io/badge/versÌ£o-10.0.0-orange)](https://github.com/benni-os/benni-os-motion-ux)
[![Stack](https://img.shields.io/badge/stack-GSAP%20%7C%20R3F%20%7C%20Shaders-green)](https://github.com/benni-os/benni-os-motion-ux)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](https://github.com/benni-os/benni-os-motion-ux)

---

## Ìndice

- [VisÌ£o Geral](#visÌ£o-geral)
- [Arquitetura](#arquitetura)
- [Stack Oficial](#stack-oficial)
- [Estrutura](#estrutura)
- [Quick Start](#quick-start)
- [Templates](#templates)
- [Componentes](#componentes)
- [QA](#qa)
- [ReferÍ¬ncias](#referÍ¬ncias)
- [Roadmap](#roadmap)

---

## VisÌ£o Geral

**Benni OS Motion/UX** e um sistema operacional de motion design focado em criar experiÍ¬ncias visuais premiadas (Awwwards, Site of the Day) atravÍ©s de **motion com propÍ³sito**.

### PrincÌªpios

1. **Motion com propÍ³sito** - Cada animaÍ§Ã£o guia, informa, emociona ou converte
2. **Performance e feature** - 60fps, bundle <200KB, LCP <2.5s, CLS <0.1
3. **Acessibilidade visual** - `prefers-reduced-motion`, contraste WCAG AA, foco visÌªvel
4. **Storytelling imersivo** - Scroll como narrativa, 3D como emoÍ§Ã£o, micro-interaÍ§Ãµes como feedback
5. **Stack moderno** - GSAP, R3F, Shaders, Spline, Rive, Lottie, Anime.js v4, Lenis

---

## Arquitetura

### 5 Camadas de Motion

```
LAYER 5: STORYTELLING (Scroll + 3D + DOM)
├── GSAP ScrollTrigger + R3F ScrollControls
├── Theatre.js timeline + Shaders custom
└── Spline 3D interativo + Fisica Rapier

LAYER 4: MICRO-INTERAÍ§ÍµES (UI/UX)
├── Rive (state machines, hover, click)
├── Lottie/dotLottie (loading, success)
└── Anime.js v4 (animaÍ§Ãµes rÍ¡pidas, 9KB)

LAYER 3: SCROLL & PARALLAX
├── Lenis (smooth scroll, 5KB)
├── GSAP ScrollSmoother (parallax data-speed)
└── Observer (wheel, touch, pointer)

LAYER 2: 3D & WEBGL
├── Three.js / R3F / Drei
├── Shaders custom (vertex, fragment, uniforms)
└── Postprocessing (Bloom, Vignette, DOF)

LAYER 1: CORE (DOM + CSS)
├── Motion One (layout animations, React)
├── CSS transforms, will-change, contain
└── FLIP (First Last Invert Play)
```

---

## Stack Oficial

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework** | Next.js 14+ (App Router) ou Vite |
| **Language** | TypeScript 5+ |
| **Styling** | Tailwind CSS 3+ |
| **Motion Core** | GSAP 3.13 (ScrollTrigger, ScrollSmoother, Observer, Flip) |
| **Smooth Scroll** | Lenis 1.0+ |
| **3D** | Three.js r160 / R3F 8.15 / Drei 9.100 |
| **Postprocessing** | @react-three/postprocessing 2.15 |
| **Micro** | Rive, dotLottie |
| **Animation Light** | Anime.js v4 (9KB) |
| **Timeline** | Theatre.js |
| **3D No-Code** | Spline |
| **Physics** | Rapier |
| **Audio** | Tone.js |
| **2D WebGL** | PixiJS v8 |
| **Future** | WebGPU (GPGPU, compute shaders) |

---

## Estrutura

```
benni-os-motion-ux/
├── 00_PERFIL_MESTRE/
│   └── BENNI_OS_MOTION_UX_MASTER_PROFILE.md
├── 01_SKILLS_MOTION/ (20 skills)
│   ├── SKILL_01_GSAP_SCROLLTRIGGER_MESTRE.md
│   ├── SKILL_02_GSAP_SCROLLSMOOTHER_OBSERVER_FLIP.md
│   └── ... (SKILL_03 a SKILL_20)
├── 02_TEMPLATES_PREMIADOS/ (5 templates)
│   ├── TEMPLATE_HALO_RESPIRACAO_SCROLL.md
│   ├── TEMPLATE_LETHE_MEMORIA_APAGA.md
│   └── ... (LUMEN, GSAP_R3F, SPLINE)
├── 03_COMPONENTES_REUTILIZAVEIS/ (6 componentes)
│   ├── Hero3D.md, ScrollLottie.md, RiveButton.md
│   └── GridStagger.md, SmoothSection.md, ParallaxImage.md
├── 04_CHECKLISTS/ (5 checklists)
│   ├── PERFORMANCE, ACESSIBILIDADE, MOTION_DESIGN
│   └── 3D_SHADERS, DEPLOY
├── 05_WORKFLOWS/ (3 workflows)
│   ├── BRIEFING_PRODUCAO, MOTION_PLAN, QA_DEPLOY
├── 06_REFERENCIAS/ (3 docs)
│   ├── STACK_OFICIAL_2026, DOCUMENTACAO_OFICIAL, INSPIRACAO_AWARDS
├── 07_ARTE_SUPREMA/ (2 artefatos)
│   ├── BENNI_OS_MOTION_UX_ARTE_SUPREMA_V10.md
│   └── 200_PADROES_ARTE_SUPREMA_SEM_MIC.md
└── 08_REFERENCIAS_AVANCADAS/ (artefatos locais)
    ├── BENNI_MASTER_OS_V10_ARTE_SUPREMA_SEM_DEPENDENCIAS.txt
    ├── CODIGOS_SECRETOS_DOMINAM_TUDO_V11.txt
    └── ... (demais artefatos em progresso)
```

---

## Quick Start

```bash
# Clone
git clone https://github.com/benni-os/benni-os-motion-ux.git
cd benni-os-motion-ux

# Install
npm install

# Dev
npm run dev

# Build
npm run build
```

---

## Templates

| Template | DescriÍ§Ã£o | Stack |
|----------|------------|-------|
| **HALO** | RespiraÍ§Ã£o via scroll + idle | Lenis, Theatre.js, Lygia |
| **LETHE** | MemÍ³ria que apaga com scroll | GPGPU, ScrollSmoother |
| **LUMEN** | Luz que segue pointer + focus | OGL, Shader, GSAP |
| **GSAP+R3F** | Hero 3D com shader + Bloom | GSAP, R3F, Postprocessing |
| **SPLINE** | Hero 3D no-code | Spline Runtime |

---

## Componentes

- **Hero3D**: Canvas R3F fixo, ScrollControls, shader custom
- **ScrollLottie**: DotLottie controlado por ScrollTrigger
- **RiveButton**: BotÍ£o com state machine (hover, click)
- **GridStagger**: Grid 4x4 com Anime.js stagger
- **SmoothSection**: SecÍ£o com Lenis + reveal GSAP
- **ParallaxImage**: Imagem com data-speed, data-lag

---

## QA

### Performance
- [ ] Bundle <200KB (gzipped)
- [ ] LCP <2.5s, FID <100ms, CLS <0.1
- [ ] 60fps em mobile
- [ ] Lighthouse >90

### Acessibilidade
- [ ] Contraste WCAG AA
- [ ] Foco visÌªvel (`:focus-visible`)
- [ ] `prefers-reduced-motion` respeitado
- [ ] ARIA labels em botoes, links, forms

### Motion
- [ ] Cada animaÍ§Ã£o tem propÍ³sito
- [ ] DuraÍ§Ãµes consistentes (200-600ms micro, 800-1500ms macro)
- [ ] Easings naturais (power2.out, power4.out, outBack)

---

## ReferÍ¬ncias

- **Docs**: [GSAP](https://gsap.com/docs/v3/), [R3F](https://docs.pmnd.rs/react-three-fiber/), [Spline](https://docs.spline.design/)
- **Inspirao**: [Awwwards](https://awwwards.com), [Site of the Day](https://siteoftheday.com), [Godly](https://godly.website)
- **Comunidade**: Discord R3F, GSAP, Spline, Rive

---

## Roadmap

### Q1 2026
- [ ] Biblioteca de componentes reutilizÌ¡veis
- [ ] 5 templates premiados em produÍ§Ã£o
- [ ] Documentao de shaders (GLSL + WGSL)

### Q2 2026
- [ ] WebGPU em produÍ§Ã£o (compute shaders)
- [ ] GPGPU para partÌªculas, fluidos
- [ ] Audio reativo com Tone.js

### Q3 2026
- [ ] IA generativa para motion
- [ ] A/B testing de motion (conversÌ£o)
- [ ] i18n (PT-BR, EN, ES)

### Q4 2026
- [ ] AR/VR motion (WebXR)
- [ ] Spatial computing (Vision Pro)
- [ ] Benchmark open-source

---

**Criado por Benni Alencar** - MaracanÌ£, ParÌ¡, BR - 2026
