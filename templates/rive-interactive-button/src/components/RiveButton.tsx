'use client'
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas'

export default function RiveButton(){
  const { rive, RiveComponent } = useRive({
    src: '/button.riv',
    stateMachines: 'ButtonState',
    autoplay: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center })
  })

  const hoverInput = useStateMachineInput(rive, 'ButtonState', 'isHover')
  const clickInput = useStateMachineInput(rive, 'ButtonState', 'click')

  return (
    <div
      className="w-[200px] h-[60px] cursor-pointer"
      onMouseEnter={() => hoverInput && (hoverInput.value = true)}
      onMouseLeave={() => hoverInput && (hoverInput.value = false)}
      onClick={() => clickInput && clickInput.fire()}
    >
      <RiveComponent />
    </div>
  )
}
