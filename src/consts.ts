import type { TNodeShapeDelims } from './types'

import { ENodeShape } from './enums'

export const MARKER_STRING_START = '<!-- mermaid-fs-diagram -->'
export const MARKER_STRING_STOP = '<!-- mermaid-fs-diagram-stop -->'
export const MARKER_REGEX_START = new RegExp(`^${MARKER_STRING_START}$`, 'm')
export const MARKER_REGEX_STOP = new RegExp(`^${MARKER_STRING_STOP}$`, 'm')
export const MARKER_REGEX_SPAN = new RegExp(
  `${MARKER_STRING_START}[\\w\\W]+?${MARKER_STRING_STOP}`,
)

export const NODE_SHAPES: { [key in ENodeShape]: TNodeShapeDelims } = {
  [ENodeShape.Square]: { open: '[', close: ']' },
  [ENodeShape.Rounded]: { open: '(', close: ')' },
  [ENodeShape.Stadium]: { open: '([', close: '])' },
  [ENodeShape.Subroutine]: { open: '[[', close: ']]' },
  [ENodeShape.Cylinder]: { open: '[(', close: ')]' },
  [ENodeShape.Circle]: { open: '((', close: '))' },
  [ENodeShape.Flag]: { open: '>', close: ']' },
  [ENodeShape.Rhombus]: { open: '{', close: '}' },
  [ENodeShape.Hexagon]: { open: '{{', close: '}}' },
  [ENodeShape.ParallelogramR]: { open: '[/', close: '/]' },
  [ENodeShape.ParallelogramL]: { open: '[\\', close: '\\]' }, // Escaped backslashes
  [ENodeShape.TrapezoidWideBottom]: { open: '[/', close: '\\]' },
  [ENodeShape.TrapezoidWideTop]: { open: '[\\', close: '/]' },
  [ENodeShape.DoubleCircle]: { open: '(((', close: ')))' },
}

export const SRC_OPEN_LINE = '```mermaid'
export const SRC_CLOSE_LINE = '```'
