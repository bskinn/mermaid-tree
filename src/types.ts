import { EConfigKey, ENodeShape } from './enums'

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
  [EConfigKey.Color]: {
    [EConfigKey.Line]: string
    [EConfigKey.Files]: {
      [EConfigKey.Border]: string
      [EConfigKey.Fill]: string
      [EConfigKey.Text]: string
    }
    [EConfigKey.Dir]: {
      [EConfigKey.Border]: string
      [EConfigKey.Fill]: string
      [EConfigKey.Text]: string
    }
  }
  [EConfigKey.Shape]: {
    [EConfigKey.Files]: ENodeShape
    [EConfigKey.Dir]: ENodeShape
  }
  [EConfigKey.Text]: {
    [EConfigKey.Size]: number
  }
  [EConfigKey.Mermaid]: {
    [EConfigKey.DirNodeName]: string
    [EConfigKey.Indent]: number
    [EConfigKey.Suffix]: {
      [EConfigKey.Files]: string
    }
  }
  [EConfigKey.System]: {
    [EConfigKey.DryRun]: boolean
  }
}

export type TConfigPartial = DeepPartial<TConfigFull>
