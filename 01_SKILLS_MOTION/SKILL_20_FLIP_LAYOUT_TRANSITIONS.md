# SKILL 20: FLIP Layout Transitions Mestre

## O que e
FLIP = First Last Invert Play (GSAP) para animar mudancas de layout.

## Padrao
const state = Flip.getState('.box')
// muda layout (move box para outro container)
Flip.from(state, { duration: 0.8, ease: 'power2.inOut', absolute: true })

## Card expandindo para modal
function expandCard(card){
  const state = Flip.getState(card)
  card.classList.add('expanded')
  Flip.from(state, { duration: 0.6, ease: 'power2.inOut', absolute: true })
}

## QA
- Anima layout automaticamente
- Use para cards, listas, grids
- absolute: true usa position absolute durante animacao
