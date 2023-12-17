import type { TConfigFull, TDirTreeNode } from './types'

import { E_ConfigKeys, E_NodeShapes } from './enums'

import CONFIG_DEFAULTS from './config'
import { NODE_SHAPES, SRC_CLOSE_LINE, SRC_OPEN_LINE } from './consts'
import {
  composeDirNodeDefLineConfig,
  composeThemeSettingsLineConfig,
} from './templates'

export const assembleNodeSource = (
  node: TDirTreeNode,
  config: TConfigFull = CONFIG_DEFAULTS,
): Array<string> => {
  const fileNodeSuffix =
    config[E_ConfigKeys.Mermaid][E_ConfigKeys.Suffix][E_ConfigKeys.Files]
  const dirNodeName = config[E_ConfigKeys.Mermaid][E_ConfigKeys.DirNodeName]

  var sourceArray: Array<string> = []

  const parentString =
    node.parents.length > 0 ? `${node.parents.join('/')}/` : ''

  console.log(`Generating ${parentString}${node.dirName}...`)

  // Files node first, if there are any
  if (node.files.length > 0) {
    // In case there's a subdir that's using our suffix
    var suffix = fileNodeSuffix
    while (node.subdirs.map((sd) => sd.dirName).includes(suffix)) {
      suffix += 'x'
    }

    const filesList = node.files.join('<br>')

    sourceArray.push(
      `${node.nodeName} --> ${node.nodeName}${suffix}${
        NODE_SHAPES[E_NodeShapes.Square].open
      }${filesList}${NODE_SHAPES[E_NodeShapes.Square].close}`,
    )
  }

  // Then link to subdir nodes
  // We're not recursing into these here; just creating the links in the source
  node.subdirs.forEach((sd) => {
    sourceArray.push(
      `${node.nodeName} --> ${sd.nodeName}${
        NODE_SHAPES[E_NodeShapes.Rounded].open
      }${sd.dirName}/${NODE_SHAPES[E_NodeShapes.Rounded].close}`,
    )
  })

  // Then assign the directory-node class
  // If this is the _true_ root node, we have to name it here
  if (node.parents.length == 0) {
    sourceArray.push(
      `${node.nodeName}${NODE_SHAPES[E_NodeShapes.Rounded].open}${
        node.dirName
      }/${NODE_SHAPES[E_NodeShapes.Rounded].close}:::${dirNodeName}`,
    )
  } else {
    sourceArray.push(`${node.nodeName}:::${dirNodeName}`)
  }

  return sourceArray
}

export const assembleAllNodeSources = (
  root: TDirTreeNode,
  config: TConfigFull = CONFIG_DEFAULTS,
): Array<Array<string>> => {
  const sourcesArray: Array<Array<string>> = []

  sourcesArray.push(assembleNodeSource(root, config))

  root.subdirs.forEach((sd) => {
    sourcesArray.push(...assembleAllNodeSources(sd, config))
  })

  return sourcesArray
}

export const composeMermaidSource = (
  sourcesArray: Array<Array<string>>,
  config: TConfigFull = CONFIG_DEFAULTS,
  extraThemeVariables: string = '',
): string => {
  const themeSettingsLine = composeThemeSettingsLineConfig(
    config,
    extraThemeVariables,
  )
  const dirNodeDefLine = composeDirNodeDefLineConfig(config)
  const indentWidth = config[E_ConfigKeys.Mermaid][E_ConfigKeys.Indent]

  // Initialize the list of source lines
  const mermaidSourceLines = [
    SRC_OPEN_LINE,
    themeSettingsLine,
    'graph LR',
    ' '.repeat(indentWidth) + `${dirNodeDefLine}`,
    '',
  ]

  sourcesArray.forEach((arr, index) => {
    console.log(`Rendering block ${index}...`)

    arr.forEach((line) => {
      mermaidSourceLines.push(' '.repeat(indentWidth) + line)
    })
    mermaidSourceLines.push('')
  })

  mermaidSourceLines.push(SRC_CLOSE_LINE)

  return mermaidSourceLines.join('\n')
}
