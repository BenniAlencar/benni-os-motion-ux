# Template Scroll Lottie

Stack: Next.js 14 + GSAP ScrollTrigger + @lottiefiles/dotlottie-react

## Instalacao

```bash
npm install gsap @lottiefiles/dotlottie-react
```

## Uso

- Substitua `src` pela URL do seu .lottie ou .json do lottiefiles.com
- O ScrollTrigger scrub controla o frame da animacao
- Otimizacao: use .lottie (dotLottie) ao inves de .json (50% menor)

## Padroes

- Loading: <DotLottieReact src="/loading.lottie" autoplay loop />
- Click para tocar: dotRef.current?.play() no onClick
- Segmento: dotRef.current?.setSegment(0, 50) para tocar frames 0-50
