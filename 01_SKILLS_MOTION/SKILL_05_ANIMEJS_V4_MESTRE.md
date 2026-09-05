# SKILL 05: Anime.js v4 Mestre

## O que e
Anime.js v4 = animacoes leves (9KB gzipped), modular, tree-shakeable.

## Instalacao
npm install animejs
import { animate, stagger, createTimeline } from 'animejs'

## Sintaxe v4
animate('.box', { x: 100, duration: 1000, ease: 'outQuad' })

Stagger grid:
animate('.grid-item', { scale: [0,1], delay: stagger(50, { grid:[4,4], from:'center' }), duration: 600, ease: 'outBack' })

Timeline:
const tl = createTimeline({ defaults: { duration: 800 } })
tl.add('.box1', { x: 100 }).add('.box2', { x: 100 }, '-=400')

## Padroes
- Contador: animate(obj, { score: 100, onUpdate: ()=>{} })
- Parallax scroll: onScroll({ target: '.box', sync: true })
- Scope React: createScope({ root: ref.current }).add()

## QA
- Duracao em ms (nao segundos como GSAP)
- v4 e modular: importe so o que usa
