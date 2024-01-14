import type { TNodeShapeDelims } from './types'

import { E_NodeShapes } from './enums'

export const MARKER_STRING_START = '<!-- mermaid-fs-diagram -->'
export const MARKER_STRING_STOP = '<!-- mermaid-fs-diagram-stop -->'
export const MARKER_REGEX_START = new RegExp(`^${MARKER_STRING_START}$`, 'm')
export const MARKER_REGEX_STOP = new RegExp(`^${MARKER_STRING_STOP}$`, 'm')
export const MARKER_REGEX_SPAN = new RegExp(
  `${MARKER_STRING_START}[\\w\\W]+?${MARKER_STRING_STOP}`,
)

export const NODE_SHAPES: { [key in E_NodeShapes]: TNodeShapeDelims } = {
  [E_NodeShapes.Square]: { open: '[', close: ']' },
  [E_NodeShapes.Rounded]: { open: '(', close: ')' },
  [E_NodeShapes.Stadium]: { open: '([', close: '])' },
  [E_NodeShapes.Subroutine]: { open: '[[', close: ']]' },
  [E_NodeShapes.Cylinder]: { open: '[(', close: ')]' },
  [E_NodeShapes.Circle]: { open: '((', close: '))' },
  [E_NodeShapes.Flag]: { open: '>', close: ']' },
  [E_NodeShapes.Rhombus]: { open: '{', close: '}' },
  [E_NodeShapes.Hexagon]: { open: '{{', close: '}}' },
  [E_NodeShapes.ParallelogramR]: { open: '[/', close: '/]' },
  [E_NodeShapes.ParallelogramL]: { open: '[\\', close: '\\]' }, // Escaped backslashes
  [E_NodeShapes.TrapezoidWideBottom]: { open: '[/', close: '\\]' },
  [E_NodeShapes.TrapezoidWideTop]: { open: '[\\', close: '/]' },
  [E_NodeShapes.DoubleCircle]: { open: '(((', close: ')))' },
}

export const SRC_OPEN_LINE = '```mermaid'
export const SRC_CLOSE_LINE = '```'
