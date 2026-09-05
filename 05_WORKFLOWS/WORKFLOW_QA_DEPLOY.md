# Workflow QA → Deploy

## 1. QA Performance
- Lighthouse score >90
- DevTools Performance (60fps)
- Bundle size (webpack-bundle-analyzer)
- WebPageTest em 3G

## 2. QA Acessibilidade
- axe DevTools (zero erros)
- WAVE (zero erros)
- Navegacao por teclado
- Leitor de tela (NVDA, VoiceOver)

## 3. QA Motion
- prefers-reduced-motion
- 60fps em mobile
- Easings consistentes
- Stagger distribuido

## 4. QA 3D/Shaders
- dpr={[1,2]}
- Shaders otimizados
- Postprocessing leve
- Fallback WebGL1

## 5. QA Cross-browser
- Chrome, Firefox, Safari, Edge
- iOS Safari, Chrome Android
- Tablet (iPad, Android)

## 6. Deploy
- npm run build, lint, test
- Vercel/Netlify/Cloudflare
- Domain, HTTPS, CDN
- Analytics, error tracking

## 7. Pos-deploy
- Monitoramento (uptime, errors)
- Analytics (conversoes, bounce)
- Heatmaps (hotjar, FullStory)
- Iteracoes (A/B testing)
