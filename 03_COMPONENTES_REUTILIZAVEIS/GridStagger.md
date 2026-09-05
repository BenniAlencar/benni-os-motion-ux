# Componente GridStagger

## Descricao
Grid animado com Anime.js v4 stagger (from center, grid, axis).

## Props
- columns: number (default: 4)
- rows: number (default: 4)
- itemClassName: string (classes Tailwind do item)
- staggerFrom: 'first' | 'last' | 'center' | 'random' (default: 'center')
- axis: 'x' | 'y' (default: 'y')

## Uso
import GridStagger from '@/components/GridStagger'
<GridStagger columns={4} rows={4} itemClassName="w-20 h-20 bg-pink-500" />

## Stack
Anime.js v4

## QA
- Stagger 50ms por item
- Ease outBack para bounce
- Escala [0,1] + opacity [0,1]
