# SKILL 06: Motion One / React Motion Mestre

## O que e
Motion One = biblioteca leve de animacao para React (layout animations, gestures).

## Instalacao
npm install motion
import { motion, AnimatePresence } from 'motion'

## Padroes
- Layout animations: <motion.div layout />
- Gestures: <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} />
- Variants: const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
- AnimatePresence: para animacoes de entrada/saida

## QA
- Use para micro-interacoes em React
- Para scroll storytelling, use GSAP
- layout e poderoso: anima automaticamente ao mudar DOM
