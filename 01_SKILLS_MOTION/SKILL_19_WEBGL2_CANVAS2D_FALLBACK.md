# SKILL 19: WebGL2 + Canvas2D Fallback Mestre

## O que e
WebGL2 = GPU acelerado. Canvas2D = fallback para browsers antigos.

## Padrao
- Detecte suporte WebGL2
- Fallback para Canvas2D ou PixiJS (modo Canvas)

## QA
- Teste em mobile (WebGL2 pode nao suportar)
- PixiJS tem fallback Canvas automatico
- Three.js detecta WebGL2 automaticamente
