<div align="center">

# BENNI OS MOTION/UX

### Local-First Motion Design Runtime — by Benni OS

<br />

```text
MOTION • SITES • INTERFACES • UI/UX — ONE VISUAL RUNTIME
```

<br />

![PHASE](https://img.shields.io/badge/PHASE-PROPOSED-00C853?style=flat-square&labelColor=555555)
![SKILLS](https://img.shields.io/badge/SKILLS-21%20CANONICAL-00C853?style=flat-square&labelColor=555555)

![STACK](https://img.shields.io/badge/STACK-GSAP%20%7C%20LENIS%20%7C%20R3F-0066FF?style=flat-square&labelColor=555555)
![RUNTIME](https://img.shields.io/badge/RUNTIME-PROGRESSIVE-FF6D00?style=flat-square&labelColor=555555)

![APPROVAL GATE](https://img.shields.io/badge/APPROVAL%20GATE-REQUIRED-FF007A?style=flat-square&labelColor=555555)
![BY](https://img.shields.io/badge/BY-BENNI%20OS-651FFF?style=flat-square&labelColor=555555)

<br />

> "Motion with intent. Light with restraint. Evidence before claim."

</div>

---

## What Is Benni OS Motion/UX?

**Benni OS Motion/UX** is the visual execution runtime of the Benni OS ecosystem.

It coordinates motion design, sites, product interfaces, UI/UX systems, spatial layers and reusable visual patterns through a production workflow that starts with content, layout, accessibility and performance. Motion and GPU effects are progressive enhancements: they are admitted only when they improve comprehension, atmosphere or task flow.

Where **Benni Master OS** defines strategy and governance, **Benni OS Motion/UX** defines the visual system users see, feel and operate.

```text
intent → visual system → motion plan → capability probe → build → approval gate → verify → evidence
```

---

## Core Doctrine

These are not settings. These are visual production laws.

| Principle | Implementation |
| --- | --- |
| **Motion has a job** | Every animation must guide, inform, signal state, create hierarchy or support conversion. |
| **Performance is visual quality** | An effect that causes jank, blocks content or drains mobile battery fails the system. |
| **Progressive by default** | HTML/CSS works first. Canvas, WebGL2 and WebGPU improve the experience when capability permits. |
| **Accessibility is equivalent experience** | Keyboard, focus, contrast, reduced motion and static fallback are part of the art direction. |
| **3D is depth, not clutter** | Prefer light, perspective, aura, shadow and composition over decorative meshes. |
| **Evidence before claim** | Do not claim 60 fps, accessibility, compatibility or production readiness without dated evidence. |

---

## Motion Runtime

```text
01  CORE
    DOM · CSS · TypeScript · layout · semantics · keyboard

02  SCROLL
    Lenis · ScrollTrigger · ScrollSmoother · Observer · parallax

03  MOTION
    GSAP · Anime.js · Motion One · FLIP · Theatre.js

04  SPATIAL
    Three.js · R3F · Drei · Spline · GLSL · WGSL · Lygia

05  RUNTIME
    Rive · dotLottie · Rapier · Tone.js · PixiJS · WebGPU
```

---

## Canonical Skills

The runtime loads canonical skill artifacts from `skills/<slug>/SKILL.md`. Each package starts with YAML frontmatter and is designed for progressive delivery.

```text
skills/
├── cerebro-orquestrador/          Intent, asset gate, plan, admission and snapshot
├── gsap-scrolltrigger/            Scroll narrative, pin and scrub
├── lenis-smooth-scroll/           Smooth scroll synchronization
├── r3f-threejs-drei/              React 3D and capability budgets
├── shaders-glsl-wgsl/             GPU shaders and fallback ladder
├── webgpu-gpgpu-tsl/              Compute and high-density enhancement
├── rive-state-machine/            Interactive vector states
├── lottie-dotlottie/              Playback and scroll feedback
└── ...                             21 canonical packages total
```

The legacy source notes remain in `01_SKILLS_MOTION/` and are preserved as reference material.

---

## Repository Map

```text
00_PERFIL_MESTRE/             System profile and project instructions
01_SKILLS_MOTION/             Legacy/reference skill documents
02_TEMPLATES_PREMIADOS/       HALO · LETHE · LUMEN · GSAP/R3F · SPLINE
03_COMPONENTES_REUTILIZAVEIS/ Production component specifications
04_CHECKLISTS/                Performance · A11y · Motion · 3D · Deploy
05_WORKFLOWS/                 Briefing · Motion plan · QA/Deploy
06_REFERENCIAS/               Stack · official docs · inspiration
07_ARTE_SUPREMA/              Visual doctrine and pattern library
08_REFERENCIAS_AVANCADAS/     Extended research and technical sources
skills/                       Canonical YAML-frontmatter skill packages
```

---

## Operating Modes

| Mode | Use when | Typical tools |
| --- | --- | --- |
| **Editorial** | Brand story, launch, manifesto, product narrative | Lenis, GSAP, typography, aura, layered depth |
| **Product UI** | SaaS, dashboard, app interface, conversion flow | Motion One, FLIP, Rive, accessible states |
| **Spatial** | Hero scene, immersive portfolio, campaign | R3F, shaders, Theatre.js, controlled postprocessing |
| **Lightweight** | Mobile-first site, fast launch, low-end device | CSS, SVG, Anime.js, dotLottie |
| **Experimental** | Generative art, particles, physics, audio | WebGPU, GPGPU, Rapier, Tone.js |

---

## Quality Gate

```text
[ CONTENT ] readable before animation
[ A11Y    ] keyboard · focus · contrast · reduced motion
[ MOTION  ] purpose · timing · easing · hierarchy
[ GPU     ] capability probe · memory budget · fallback ladder
[ PERF    ] mobile device test · frame budget · bundle control
[ DEPLOY  ] build · lint · browser matrix · evidence
```

- [ ] `prefers-reduced-motion` has an equivalent outcome.
- [ ] Focus states are visible and keyboard navigation was tested.
- [ ] WebGL/WebGPU failure never produces a blank surface.
- [ ] Assets, texture memory and shader cost are bounded.
- [ ] Motion was measured on a real mobile device.
- [ ] Build, lint and target deployment were verified.

---

## Quick Start

```bash
git clone https://github.com/BenniAlencar/benni-os-motion-ux.git
cd benni-os-motion-ux
npm install
npm run dev
```

Use templates as isolated references. Install only required dependencies, replace sample assets and run the quality gate before publishing.

---

## Documentation

| Area | Location |
| --- | --- |
| Master profile | [`00_PERFIL_MESTRE/`](./00_PERFIL_MESTRE/) |
| Canonical runtime skills | [`skills/`](./skills/) |
| Legacy skill references | [`01_SKILLS_MOTION/`](./01_SKILLS_MOTION/) |
| Templates | [`02_TEMPLATES_PREMIADOS/`](./02_TEMPLATES_PREMIADOS/) |
| Components | [`03_COMPONENTES_REUTILIZAVEIS/`](./03_COMPONENTES_REUTILIZAVEIS/) |
| Checklists | [`04_CHECKLISTS/`](./04_CHECKLISTS/) |
| Workflows | [`05_WORKFLOWS/`](./05_WORKFLOWS/) |
| Advanced sources | [`08_REFERENCIAS_AVANCADAS/`](./08_REFERENCIAS_AVANCADAS/) |

---

```yaml
status: proposed
owner: Benni Alencar
system: Benni OS Motion/UX
scope: motion-design | websites | interfaces | ui-ux
canonical_skills: 21
approval_gate: required_for_external_effect
runtime_evidence: unknown
production_evidence: unknown
rollback: git_history
```

<div align="center">

**BENNI OS MOTION/UX**

Local sovereignty. Visual execution. Full evidence.

</div>
