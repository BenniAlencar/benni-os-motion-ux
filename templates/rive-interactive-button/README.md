# Template Rive Interactive Button

Stack: Next.js 14 + @rive-app/react-canvas

## Instalacao

```bash
npm install @rive-app/react-canvas
```

## Como criar no Rive

1. Acesse rive.app e crie um novo arquivo
2. Desenhe seu botao (retangulo, texto, icones)
3. Adicione animacoes: idle, hover, click
4. Crie State Machine com inputs: isHover (boolean), click (trigger)
5. Transicoes: idle -> hover (isHover=true), hover -> idle (isHover=false), idle -> click (trigger)
6. Exporte como .riv

## Uso

- Coloque button.riv em /public
- Use o componente RiveButton
- Personalize inputs conforme sua state machine

## Padroes

- Mascote que segue mouse: xAxis, yAxis inputs
- Scroll progress: progressInput.value = self.progress * 100
- Loading: autoplay loop
