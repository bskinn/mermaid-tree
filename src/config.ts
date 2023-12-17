import type { TConfigFull } from './types'

import { E_ConfigKeys, E_NodeShapes } from './enums'

const CONFIG_DEFAULTS: TConfigFull = {
  [E_ConfigKeys.Color]: {
    [E_ConfigKeys.Line]: '#003812',
    [E_ConfigKeys.Files]: {
      [E_ConfigKeys.Border]: '#d3f1c8',
      [E_ConfigKeys.Fill]: '#e8ffe0',
      [E_ConfigKeys.Text]: '#000000',
    },
    [E_ConfigKeys.Dir]: {
      [E_ConfigKeys.Border]: '#d3f1c8',
      [E_ConfigKeys.Fill]: '#136f17',
      [E_ConfigKeys.Text]: '#ffffff',
    },
  },
  [E_ConfigKeys.Shape]: {
    [E_ConfigKeys.Files]: E_NodeShapes.Square,
    [E_ConfigKeys.Dir]: E_NodeShapes.Rounded,
  },
  [E_ConfigKeys.Text]: {
    [E_ConfigKeys.Size]: 10,
  },
  [E_ConfigKeys.Mermaid]: {
    [E_ConfigKeys.DirNodeName]: 'dirNode',
    [E_ConfigKeys.Indent]: 2,
    [E_ConfigKeys.Suffix]: { [E_ConfigKeys.Files]: 'Files' },
  },
}

export default CONFIG_DEFAULTS
