import type { TNodeShapeDelims } from './types'

import { E_NodeShape } from './enums'

export const MARKER_STRING_START = '<!-- mermaid-fs-diagram -->'
export const MARKER_STRING_STOP = '<!-- mermaid-fs-diagram-stop -->'
export const MARKER_REGEX_START = new RegExp(`^${MARKER_STRING_START}$`, 'm')
export const MARKER_REGEX_STOP = new RegExp(`^${MARKER_STRING_STOP}$`, 'm')
export const MARKER_REGEX_SPAN = new RegExp(
  `${MARKER_STRING_START}[\\w\\W]+?${MARKER_STRING_STOP}`,
)

export const NODE_SHAPES: { [key in E_NodeShape]: TNodeShapeDelims } = {
  [E_NodeShape.Square]: { open: '[', close: ']' },
  [E_NodeShape.Rounded]: { open: '(', close: ')' },
  [E_NodeShape.Stadium]: { open: '([', close: '])' },
  [E_NodeShape.Subroutine]: { open: '[[', close: ']]' },
  [E_NodeShape.Cylinder]: { open: '[(', close: ')]' },
  [E_NodeShape.Circle]: { open: '((', close: '))' },
  [E_NodeShape.Flag]: { open: '>', close: ']' },
  [E_NodeShape.Rhombus]: { open: '{', close: '}' },
  [E_NodeShape.Hexagon]: { open: '{{', close: '}}' },
  [E_NodeShape.ParallelogramR]: { open: '[/', close: '/]' },
  [E_NodeShape.ParallelogramL]: { open: '[\\', close: '\\]' }, // Escaped backslashes
  [E_NodeShape.TrapezoidWideBottom]: { open: '[/', close: '\\]' },
  [E_NodeShape.TrapezoidWideTop]: { open: '[\\', close: '/]' },
  [E_NodeShape.DoubleCircle]: { open: '(((', close: ')))' },
}

export const SRC_OPEN_LINE = '```mermaid'
export const SRC_CLOSE_LINE = '```'
