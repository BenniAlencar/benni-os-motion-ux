# SKILL 13: Rive Interativo State Machine Mestre

## O que e
Rive = animacoes vetoriais interativas com State Machine (substituto do Lottie).

## Instalacao
npm install @rive-app/react-canvas
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

## Padrao Botao
function RiveButton(){
  const { rive, RiveComponent } = useRive({ src: '/button.riv', stateMachines: 'ButtonState', autoplay: true })
  const hoverInput = useStateMachineInput(rive, 'ButtonState', 'isHover')
  const clickInput = useStateMachineInput(rive, 'ButtonState', 'click')
  return (
    <div onMouseEnter={()=> hoverInput && (hoverInput.value=true)} onMouseLeave={()=> hoverInput && (hoverInput.value=false)} onClick={()=> clickInput && clickInput.fire()}>
      <RiveComponent />
    </div>
  )
}

## QA
- .riv e menor que .json Lottie (10-100KB)
- State machine = interativo (hover, click, drag)
- 60fps mesmo em mobile
