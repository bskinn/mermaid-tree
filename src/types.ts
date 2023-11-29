export type TDirName = string
export type TFileName = string
export type TDirContents = { dirs: Array<TDirName>; files: Array<TFileName> }
export type TDirTreeNode = {
  dirName: TDirName
  nodeName: string
  parents: Array<TDirName>
  subdirs: Array<TDirTreeNode>
  files: Array<TFileName>
}
export type TNodeShapeDelims = { open: string; close: string }
