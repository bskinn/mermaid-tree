import type { TConfigFull, TDirTreeNode } from './types'

import { E_ConfigKey, E_NodeShape } from './enums'

import CONFIG_DEFAULTS from './config'
import { NODE_SHAPES, SRC_CLOSE_LINE, SRC_OPEN_LINE } from './consts'
import {
  composeDirNodeDefLineConfig,
  composeThemeSettingsLineConfig,
} from './templates'

/**
 * Create an array of Mermaid source lines for a given node in the
 * directory tree.
 *
 * @param {TDirTreeNode} node - The directory tree node to process
 * @param {TConfigFull} config - Configuration object to use in creating the source
 * @returns {Array<string>} - Array of Mermaid source lines for the node
 */
export const assembleNodeSource = (
  node: TDirTreeNode,
  config: TConfigFull = CONFIG_DEFAULTS,
): Array<string> => {
  const fileNodeSuffix =
    config[E_ConfigKey.Mermaid][E_ConfigKey.Suffix][E_ConfigKey.Files]
  const dirNodeName = config[E_ConfigKey.Mermaid][E_ConfigKey.DirNodeName]

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
        NODE_SHAPES[E_NodeShape.Square].open
      }${filesList}${NODE_SHAPES[E_NodeShape.Square].close}`,
    )
  }

  // Then link to subdir nodes
  // We're not recursing into these here; just creating the links in the source
  node.subdirs.forEach((sd) => {
    sourceArray.push(
      `${node.nodeName} --> ${sd.nodeName}${
        NODE_SHAPES[E_NodeShape.Rounded].open
      }${sd.dirName}/${NODE_SHAPES[E_NodeShape.Rounded].close}`,
    )
  })

  // Then assign the directory-node class
  // If this is the _true_ root node, we have to name it here
  if (node.parents.length == 0) {
    sourceArray.push(
      `${node.nodeName}${NODE_SHAPES[E_NodeShape.Rounded].open}${
        node.dirName
      }/${NODE_SHAPES[E_NodeShape.Rounded].close}:::${dirNodeName}`,
    )
  } else {
    sourceArray.push(`${node.nodeName}:::${dirNodeName}`)
  }

  return sourceArray
}

/**
 * Recursively create Mermaid source lines for the entire directory tree
 * descending from the indicated root node.
 *
 * @param {TDirTreeNode} root - Root directory node of the tree to create Mermaid
 *    source for
 * @param {TConfigFull} config - Configuration object to use in creating the source
 * @returns {ArrayArray<<string>>} - Array of Arrays of Mermaid source lines for the
 *    node tree. Each inner Array contains the source lines from one directory node
 */
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

/**
 * Compose the complete source for a Mermaid diagram given an array of source strings
 * representing the contents of a directory tree.
 *
 * _Any_ valid set of Mermaid source lines for a flow diagram should likely work here,
 * but we're using it for the directory map.
 *
 * @param {Array<Array<string>>} sourcesArray - Array of Arrays of Mermaid flow chart
 *    source lines
 * @param {TConfigFull} config - Configuration object to use in creating the source
 * @param {string} extraThemeVariables - Any additional Mermaid theme variables to
 *    apply, in addition to those provided for via {@link config}
 * @returns {string} - Composited, complete source for the Mermaid flow diagram
 */
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
  const indentWidth = config[E_ConfigKey.Mermaid][E_ConfigKey.Indent]

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
