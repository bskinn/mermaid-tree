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
}

export const SRC_OPEN_LINE = '```mermaid'
export const SRC_CLOSE_LINE = '```'
