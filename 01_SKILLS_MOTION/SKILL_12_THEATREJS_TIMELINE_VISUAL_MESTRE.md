# SKILL 12: Theatre.js Timeline Visual Mestre

## O que e
Theatre.js = editor visual de animacao (timeline igual After Effects) para Three.js/R3F.

## Instalacao
npm install @theatre/core @theatre/studio @theatre/r3f

## Uso R3F
import { SheetProvider, useCurrentSheet } from '@theatre/r3f'
import { getProject } from '@theatre/core'

function App(){
  const sheet = getProject('Project').sheet('Scene')
  return <Canvas><SheetProvider sheet={sheet}><Scene /></SheetProvider></Canvas>
}

function Scene(){
  const sheet = useCurrentSheet()
  const obj = sheet.object('Cube', { x: 0, y: 0 })
  return <editable.mesh theatreKey="Cube"><boxGeometry /><meshStandardMaterial /></editable.mesh>
}

## Scroll sync
ScrollTrigger.create({ trigger: '.section', scrub: true, onUpdate: self => { sheet.sequence.position = self.progress * sheet.sequence.duration } })

## QA
- studio.initialize() so em dev
- Em prod, remova studio, deixe so core
- JSON da animacao e embutido
