# SKILL 11: Spline 3D No-Code Mestre

## O que e
Spline = editor 3D no-browser (spline.design) + runtime para web.

## Instalacao
npm install @splinetool/react-spline
import Spline from '@splinetool/react-spline'

## Uso
<Spline scene="https://prod.spline.design/xxx/scene.splinecode" />

## Padroes
- Hero full-screen: <Spline scene="..." className="h-screen w-full" />
- Eventos: onMouseEnter, onMouseLeave, onClick
- Loading: <Spline scene="..." loading={<div>Carregando...</div>} />

## QA
- Otimize geometrias no editor (low poly)
- Use LOD para objetos distantes
- Evite muitas luzes dinamicas
- Exporte com compressao ativada
