<!--
BENNI OS MOTION/UX â€” README VISUAL STANDARD

BANNER 3D:
1. Crie/exporte um banner 3D exclusivo para este repositÃ³rio.
2. DimensÃ£o recomendada: 1600 x 560 px (proporÃ§Ã£o aproximada de 20:7).
3. Formatos: AVIF ou WebP estÃ¡tico; GIF/WebP animado apenas se for leve.
4. Salve como: assets/benni-os-motion-ux-banner.webp
5. Substitua o caminho abaixo caso hospede o banner em outro local.

MOVIMENTO DE TEXTO:
README do GitHub nÃ£o executa JavaScript/CSS arbitrÃ¡rio. Portanto, o efeito de tipografia
surgindo/digitando deve ser entregue por um banner animado, GIF/WebP/APNG, SVG animado
compatÃ­vel com GitHub ou por uma pÃ¡gina de documentaÃ§Ã£o hospedada (GitHub Pages/Vercel).
-->

<p align="center">
  <img src="./assets/benni-os-motion-ux-banner.webp" alt="BENNI OS MOTION/UX â€” Motion Design, Sites, Interfaces e UI/UX" width="100%" />
</p>

<p align="center">
  <a href="#estado"><img src="https://img.shields.io/badge/STATUS-PROPOSED-00C853?style=for-the-badge&labelColor=161616" alt="Status proposed" /></a>
  <a href="#sistema-em-camadas"><img src="https://img.shields.io/badge/LAYERS-05-0066FF?style=for-the-badge&labelColor=161616" alt="5 layers" /></a>
  <a href="#stack"><img src="https://img.shields.io/badge/STACK-GSAP%20%7C%20R3F%20%7C%20SHADERS-FF6D00?style=for-the-badge&labelColor=161616" alt="Stack" /></a>
  <a href="#gates-de-qualidade"><img src="https://img.shields.io/badge/MOTION%20GATE-REQUIRED-FF007A?style=for-the-badge&labelColor=161616" alt="Motion gate required" /></a>
</p>

<p align="center">
  <code>MOTION â†’ INTERFACE â†’ SPATIAL â†’ EVIDENCE â†’ FALLBACK</code>
</p>

---

# BENNI OS MOTION/UX

> Sistema paralelo para motion design, criaÃ§Ã£o de sites, interfaces e UI/UX.

> **Motion tem intenÃ§Ã£o. 3D tem funÃ§Ã£o. Performance Ã© estÃ©tica.**

O Benni OS Motion/UX organiza experiÃªncias visuais em uma arquitetura progressiva: primeiro conteÃºdo e acessibilidade; depois movimento, profundidade e interaÃ§Ã£o; por Ãºltimo, efeitos GPU quando a capacidade do dispositivo permite. Nenhuma experiÃªncia pode depender exclusivamente de WebGL, Ã¡udio, cÃ¢mera, mouse ou hardware de alto desempenho.

## Sinal do sistema

```text
LOCAL-FIRST  Â·  PROGRESSIVE  Â·  ACCESSIBLE  Â·  MEASURABLE

SCROLL  â†’  MOTION  â†’  SPATIAL  â†’  RESPONSE  â†’  EVIDENCE
```

| Propriedade | Compromisso |
| --- | --- |
| **Motion** | Orientar, informar, emocionar ou converter â€” nunca decorar sem propÃ³sito |
| **Performance** | Meta de 60 fps; carga progressiva; orÃ§amento mensurÃ¡vel por efeito |
| **Acessibilidade** | Teclado, foco, contraste, texto equivalente e `prefers-reduced-motion` |
| **Spatial** | 3D como luz, profundidade e narrativa; nÃ£o como poluiÃ§Ã£o visual |
| **Fallback** | HTML/CSS â†’ Canvas 2D â†’ WebGL2 â†’ WebGPU, sempre com equivalente Ãºtil |

## Sistema em camadas

```text
â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
â•‘  05  RUNTIME                                                 â•‘
â•‘      Rive Â· dotLottie Â· Rapier Â· Tone.js Â· PixiJS Â· WebGPU  â•‘
â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
â•‘  04  SPATIAL                                                 â•‘
â•‘      Three.js Â· R3F Â· Drei Â· Spline Â· GLSL Â· WGSL           â•‘
â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
â•‘  03  MOTION                                                  â•‘
â•‘      GSAP Â· Anime.js Â· Motion One Â· FLIP Â· Theatre.js       â•‘
â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
â•‘  02  SCROLL                                                  â•‘
â•‘      Lenis Â· ScrollTrigger Â· ScrollSmoother Â· Observer      â•‘
â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
â•‘  01  CORE                                                    â•‘
â•‘      DOM Â· CSS Â· TypeScript Â· Layout Â· Acessibilidade       â•‘
â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
```

## PrincÃ­pios operacionais

1. **Motion com propÃ³sito** â€” cada animaÃ§Ã£o precisa justificar a atenÃ§Ã£o e o custo.
2. **Progressive enhancement** â€” o conteÃºdo funciona antes do efeito; o efeito melhora, nÃ£o bloqueia.
3. **Luz antes de objeto** â€” aura, perspectiva, sombra e composiÃ§Ã£o tÃªm precedÃªncia sobre meshes decorativos.
4. **Resposta humana** â€” velocity, idle, pointer e foco orientam a experiÃªncia sem exigir microfone, cÃ¢mera ou permissÃµes.
5. **EvidÃªncia antes de claim** â€” nÃ£o declarar 60 fps, compatibilidade, conversÃ£o ou produÃ§Ã£o sem teste datado.

## Stack

| Ãrea | Ferramentas |
| --- | --- |
| AplicaÃ§Ã£o | Next.js, React, TypeScript, Tailwind CSS |
| Scroll e motion | GSAP, ScrollTrigger, Lenis, Anime.js, Motion One |
| 3D e spatial | Three.js, React Three Fiber, Drei, Spline |
| GPU e shaders | GLSL, WGSL, WebGL2, WebGPU, Lygia |
| InteraÃ§Ãµes | Rive, dotLottie, FLIP, Observer |
| Runtime avanÃ§ado | Theatre.js, Rapier, Tone.js, PixiJS |

## Estrutura

```text
00_PERFIL_MESTRE/             Perfil, contrato e governanÃ§a do sistema
01_SKILLS_MOTION/             20 skills de motion, 3D e runtime
02_TEMPLATES_PREMIADOS/       HALO Â· LETHE Â· LUMEN Â· GSAP/R3F Â· SPLINE
03_COMPONENTES_REUTILIZAVEIS/ Hero3D Â· ScrollLottie Â· RiveButton Â· GridStagger
04_CHECKLISTS/                Performance Â· Acessibilidade Â· Motion Â· 3D Â· Deploy
05_WORKFLOWS/                 Briefing Â· Motion Plan Â· QA/Deploy
06_REFERENCIAS/               Stack Â· Docs oficiais Â· InspiraÃ§Ã£o
07_ARTE_SUPREMA/              Manifesto e 200 padrÃµes
08_REFERENCIAS_AVANCADAS/     Materiais extensos de estudo e engenharia reversa
assets/                       Banners, posters, GIFs e recursos visuais do README
```

## Templates principais

| Template | IntenÃ§Ã£o | Base |
| --- | --- | --- |
| **HALO** | Luz que respira com scroll, velocidade e idle | Lenis, shaders, Theatre.js |
| **LETHE** | MemÃ³ria que se transforma e apaga progressivamente | ScrollTrigger, partÃ­culas |
| **LUMEN** | Luz guiada pelo pointer e pelo foco do teclado | GLSL, pointer, acessibilidade |
| **GSAP + R3F** | Hero espacial com shader, luz e Bloom controlados | GSAP, R3F, Drei |
| **Spline Hero** | Cena 3D como enhancement progressivo | Spline Runtime |

## Gates de qualidade

```text
[ CORE ] conteÃºdo sem bloqueio
[ A11Y ] teclado Â· contraste Â· foco Â· reduced motion
[ GPU  ] probe de WebGL/WebGPU + fallback equivalente
[ PERF ] frame budget Â· memÃ³ria Â· bundle Â· mobile real
[ QA   ] build Â· lint Â· browser matrix Â· deploy evidence
```

- [ ] `prefers-reduced-motion` possui equivalente estÃ¡tico ou de respiraÃ§Ã£o sem escala.
- [ ] NavegaÃ§Ã£o por teclado, `:focus-visible` e semÃ¢ntica foram testadas.
- [ ] Todo WebGL/WebGPU tem fallback Ãºtil â€” nunca tela preta.
- [ ] Shaders, texturas e geometria obedecem ao orÃ§amento de memÃ³ria.
- [ ] Efeitos foram medidos em dispositivo mÃ³vel real.
- [ ] Build, lint e deploy foram verificados no ambiente-alvo.

## InÃ­cio rÃ¡pido

```bash
git clone https://github.com/BenniAlencar/benni-os-motion-ux.git
cd benni-os-motion-ux
npm install
npm run dev
```

Os templates sÃ£o referÃªncias independentes. Instale apenas as dependÃªncias necessÃ¡rias para o template escolhido e substitua URLs, `.riv`, `.lottie`, modelos, imagens e assets de exemplo antes de publicar.

## DocumentaÃ§Ã£o

- [Perfil mestre](./00_PERFIL_MESTRE/BENNI_OS_MOTION_UX_MASTER_PROFILE.md)
- [Skills de motion](./01_SKILLS_MOTION/)
- [Templates premiados](./02_TEMPLATES_PREMIADOS/)
- [Componentes reutilizÃ¡veis](./03_COMPONENTES_REUTILIZAVEIS/)
- [Checklists](./04_CHECKLISTS/)
- [Workflows](./05_WORKFLOWS/)
- [ReferÃªncias avanÃ§adas](./08_REFERENCIAS_AVANCADAS/)

## Estado

```yaml
status: proposed
owner: Benni Alencar
scope: motion-design-sites-interfaces-ui-ux
admission: draft
approval: review_required
runtime_evidence: unknown
production_evidence: unknown
rollback_ref: previous README commit
```

---

<p align="center">
  <strong>BENNI OS MOTION/UX</strong><br />
  Motion with intent. Spatial with restraint. Evidence before claim.<br />
  MaracanÃ£, ParÃ¡, Brasil.
</p>
