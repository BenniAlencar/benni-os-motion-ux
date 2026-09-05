# Componente RiveButton

## Descricao
Botao interativo com Rive State Machine (hover, click).

## Props
- src: string (URL .riv)
- stateMachine: string (default: 'ButtonState')
- hoverInput: string (default: 'isHover')
- clickInput: string (default: 'click')
- width: number (default: 200)
- height: number (default: 60)

## Uso
import RiveButton from '@/components/RiveButton'
<RiveButton src="/button.riv" width={200} height={60} />

## Stack
@rive-app/react-canvas

## QA
- State machine no Rive editor
- Inputs: boolean (hover), trigger (click)
- 60fps, 10-100KB
