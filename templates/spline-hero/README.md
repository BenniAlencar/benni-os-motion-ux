# Template Spline Hero 3D

Stack: Next.js 14 + @splinetool/react-spline

## Instalacao

```bash
npm install @splinetool/react-spline
```

## Como usar

1. Crie sua cena 3D no editor spline.design
2. Exporte como .splinecode (URL hospedada)
3. Substitua a URL no componente Spline

## Recursos

- Interatividade nativa (mouse, click, hover)
- Eventos: onMouseEnter, onMouseLeave, onClick
- Loading state com fallback
- Responsivo automaticamente

## Padroes

- Hero full-screen: <Spline scene="..." className="h-screen w-full" />
- Eventos: <Spline scene="..." onMouseEnter={()=>{}} onClick={()=>{}} />
- Loading: use o prop loading={<div>Carregando 3D...</div>}

## Performance

- Otimize geometrias no Spline (low poly)
- Use LOD (Level of Detail) para objetos distantes
- Evite muitas luzes dinamicas
- Exporte com compressao ativada
