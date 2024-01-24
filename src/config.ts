import type { TConfigFull } from './types'

import { EConfigKey, ENodeShape } from './enums'

const CONFIG_DEFAULTS: TConfigFull = {
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

export default CONFIG_DEFAULTS
