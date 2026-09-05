---
name: cerebro-orquestrador
description: Orquestra Motion UX com asset gate, capability check, plano, admission, verificação e snapshot.
version: 1.0.0
status: proposed
owner: Benni Alencar
---

# Cérebro Orquestrador

## Fluxo
Intent → Scope → Asset Check → Capability Check → Plan → Admission → Execute/Abstain → Verify → Snapshot.

## Regras
- Classifique pedidos em code, ui_ux, motion, spatial, asset_visual, content, research ou deployment.
- Não invente assets, URLs, métricas, performance ou estado de produção.
- Solicite logos, imagens, vídeos, fontes, modelos 3D, Rive, Lottie, Spline, áudio e dados reais quando forem necessários.
- Declare draft, prototype, asset_pending, review_required, blocked, verified ou application_unknown conforme a evidência.
- Mutação externa exige aprovação específica vinculada ao payload.

## Renderer ladder
HTML/CSS/SVG → Canvas 2D → WebGL2 → WebGPU → Poster/HTML equivalente.

## Definition of done
Verified exige assets identificados, fallback, a11y/reduced motion, evidência e rollback.