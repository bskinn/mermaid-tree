import { mergeConfig } from './config'
import { buildDirTree } from './filesystem'
import { assembleAllNodeSources, composeMermaidSource } from './source-gen'
import { TConfigPartial } from './types'

// Generate string
export const makeDiagramString = (
  dirPath: string,
  config: TConfigPartial,
  extraThemeVariables: string = '',
) => {
  const mergedConfig = mergeConfig(config)

  const nodeSources = assembleAllNodeSources(
    buildDirTree(dirPath),
    mergedConfig,
  )
  return composeMermaidSource(nodeSources, mergedConfig, extraThemeVariables)
}

// Generate file

// Insert/update in file
