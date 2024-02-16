import { ENodeShape } from './enums'

import { mergeConfig } from './config'
import { NODE_SHAPES } from './consts'
import { buildDirTree, renderDirTree } from './filesystem'
import {
  assembleAllNodeSources,
  assembleNodeSource,
  composeMermaidSource,
} from './source-gen'
import { injectMermaidSource, updateMarkdownFile } from './source-inject'

export const internal = {
  assembleAllNodeSources,
  assembleNodeSource,
  buildDirTree,
  composeMermaidSource,
  ENodeShape,
  injectMermaidSource,
  mergeConfig,
  NODE_SHAPES,
  renderDirTree,
  updateMarkdownFile,
}

export { makeDiagramString } from './user-api'
