import type { TConfigFull } from './types'

import { E_ConfigKey, E_NodeShape } from './enums'

const CONFIG_DEFAULTS: TConfigFull = {
  [E_ConfigKey.Color]: {
    [E_ConfigKey.Line]: '#003812',
    [E_ConfigKey.Files]: {
      [E_ConfigKey.Border]: '#d3f1c8',
      [E_ConfigKey.Fill]: '#e8ffe0',
      [E_ConfigKey.Text]: '#000000',
    },
    [E_ConfigKey.Dir]: {
      [E_ConfigKey.Border]: '#d3f1c8',
      [E_ConfigKey.Fill]: '#136f17',
      [E_ConfigKey.Text]: '#ffffff',
    },
  },
  [E_ConfigKey.Shape]: {
    [E_ConfigKey.Files]: E_NodeShape.Square,
    [E_ConfigKey.Dir]: E_NodeShape.Rounded,
  },
  [E_ConfigKey.Text]: {
    [E_ConfigKey.Size]: 10,
  },
  [E_ConfigKey.Mermaid]: {
    [E_ConfigKey.DirNodeName]: 'dirNode',
    [E_ConfigKey.Indent]: 2,
    [E_ConfigKey.Suffix]: { [E_ConfigKey.Files]: '____files' },
  },
}

export default CONFIG_DEFAULTS
