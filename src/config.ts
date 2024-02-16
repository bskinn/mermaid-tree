import type { TConfigFull, TConfigPartial } from './types'

import { EConfigKey, ENodeShape } from './enums'

import deepmerge from 'deepmerge'

export const CONFIG_DEFAULTS: TConfigFull = {
  [EConfigKey.Color]: {
    [EConfigKey.Line]: '#003812',
    [EConfigKey.Files]: {
      [EConfigKey.Border]: '#d3f1c8',
      [EConfigKey.Fill]: '#e8ffe0',
      [EConfigKey.Text]: '#000000',
    },
    [EConfigKey.Dir]: {
      [EConfigKey.Border]: '#d3f1c8',
      [EConfigKey.Fill]: '#136f17',
      [EConfigKey.Text]: '#ffffff',
    },
  },
  [EConfigKey.Shape]: {
    [EConfigKey.Files]: ENodeShape.Square,
    [EConfigKey.Dir]: ENodeShape.Rounded,
  },
  [EConfigKey.Text]: {
    [EConfigKey.Size]: 10,
  },
  [EConfigKey.Mermaid]: {
    [EConfigKey.DirNodeName]: 'dirNode',
    [EConfigKey.Indent]: 2,
    [EConfigKey.Suffix]: { [EConfigKey.Files]: '____files' },
  },
  [EConfigKey.System]: {
    [EConfigKey.DryRun]: false,
  },
}

/**
 * Deep-merge the indicated config objects against the default config.
 *
 * @param {Array<TConfigPartial>} configs - List of the config fragments to
 *    merge. Higher-priority fragments should be placed _later_ in the list.
 * @returns {TConfigFull} Fully merged config object
 */
export const mergeConfig = (...configs: Array<TConfigPartial>): TConfigFull => {
  var newConfig: TConfigFull = JSON.parse(JSON.stringify(CONFIG_DEFAULTS))

  if (configs[0] !== undefined) {
    for (let conf of configs) {
      // Props in the 2nd argument stomp those in the first, so higher priority
      // goes *second*.
      // Annoying to have to use the 'as', since a TConfigPartial will never
      // add a new field to the TConfigFull type of newConfig. Oh well.
      newConfig = deepmerge(newConfig, conf) as TConfigFull
    }
  }

  return newConfig
}

export default CONFIG_DEFAULTS
