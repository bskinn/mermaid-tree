import { E_ConfigKeys, E_NodeShapes } from './enums'

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
  [E_ConfigKeys.Color]: {
    [E_ConfigKeys.Line]: string
    [E_ConfigKeys.Files]: {
      [E_ConfigKeys.Border]: string
      [E_ConfigKeys.Fill]: string
      [E_ConfigKeys.Text]: string
    }
    [E_ConfigKeys.Dir]: {
      [E_ConfigKeys.Border]: string
      [E_ConfigKeys.Fill]: string
      [E_ConfigKeys.Text]: string
    }
  }
  [E_ConfigKeys.Shape]: {
    [E_ConfigKeys.Files]: E_NodeShapes
    [E_ConfigKeys.Dir]: E_NodeShapes
  }
  [E_ConfigKeys.Text]: {
    [E_ConfigKeys.Size]: number
  }
  [E_ConfigKeys.Mermaid]: {
    [E_ConfigKeys.DirNodeName]: string
    [E_ConfigKeys.Indent]: number
    [E_ConfigKeys.Suffix]: {
      [E_ConfigKeys.Files]: string
    }
  }
}

export type TConfigPartial = DeepPartial<TConfigFull>
