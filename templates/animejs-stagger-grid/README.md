# Template Anime.js v4 Stagger Grid

Stack: Next.js 14 + Anime.js v4.2

## Instalacao

```bash
npm install animejs
```

## Sintaxe v4

```ts
import { animate, stagger } from 'animejs'

animate('.grid-item', {
  scale: [0, 1],
  opacity: [0, 1],
  delay: stagger(50, { grid: [4,4], from: 'center', axis: 'y' }),
  duration: 600,
  ease: 'outBack'
})
```

## Padroes

- Timeline: createTimeline().add().add()
- Contador: animate(obj, { score: 100, onUpdate: ()=>{} })
- Parallax scroll: onScroll({ target: '.box', sync: true })
- Scope React: createScope({ root: ref.current }).add()

## Vantagens v4

- Modular, tree-shakeable (~9KB gzipped)
- Named exports: animate, createTimeline, stagger, utils, createScope, onScroll, svg
- Duracao em ms (nao segundos como GSAP)
