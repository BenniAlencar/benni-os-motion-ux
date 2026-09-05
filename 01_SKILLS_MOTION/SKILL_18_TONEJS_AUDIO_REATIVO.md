# SKILL 18: Tone.js Audio Reativo Mestre

## O que e
Tone.js = audio para web (sintetizadores, samples, efeitos) reativo a motion.

## Instalacao
npm install tone
import * as Tone from 'tone'

## Padrao
const synth = new Tone.Synth().toDestination()
Tone.start()
synth.triggerAttackRelease('C4', '8n')

## QA
- Audio reativo a scroll, mouse, click
- Use para experiencias imersivas
- Cuidado com autoplay (navegadores bloqueiam)
