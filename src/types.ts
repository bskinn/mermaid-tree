import { E_ConfigKey, E_NodeShape } from './enums'

import { DeepPartial } from 'tsdef'

export type TDirName = string
export type TFileName = string
export type TDirContents = { dirs: Array<TDirName>; files: Array<TFileName> }
export type TDirTreeNode = {
  dirName: TDirName
  nodeName: string // Name to use for the node in the Mermaid source
  parents: Array<TDirName>
  subdirs: Array<TDirTreeNode>
  files: Array<TFileName>
}
export type TNodeShapeDelims = { open: string; close: string }

export type TConfigFull = {
  [E_ConfigKey.Color]: {
    [E_ConfigKey.Line]: string
    [E_ConfigKey.Files]: {
      [E_ConfigKey.Border]: string
      [E_ConfigKey.Fill]: string
      [E_ConfigKey.Text]: string
    }
    [E_ConfigKey.Dir]: {
      [E_ConfigKey.Border]: string
      [E_ConfigKey.Fill]: string
      [E_ConfigKey.Text]: string
    }
  }
  [E_ConfigKey.Shape]: {
    [E_ConfigKey.Files]: E_NodeShape
    [E_ConfigKey.Dir]: E_NodeShape
  }
  [E_ConfigKey.Text]: {
    [E_ConfigKey.Size]: number
  }
  [E_ConfigKey.Mermaid]: {
    [E_ConfigKey.DirNodeName]: string
    [E_ConfigKey.Indent]: number
    [E_ConfigKey.Suffix]: {
      [E_ConfigKey.Files]: string
    }
  }
  [E_ConfigKey.System]: {
    [E_ConfigKey.DryRun]: boolean
  }
}

export type TConfigPartial = DeepPartial<TConfigFull>
