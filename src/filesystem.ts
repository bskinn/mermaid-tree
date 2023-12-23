import type { TDirContents, TDirName, TDirTreeNode, TFileName } from './types'

import * as fs from 'fs'

/**
 * Retrieve the file and subdirectory contents of a given directory.
 *
 * @param {TDirName} dirPath - String path to the directory to retrieve contents from
 * @returns {TDirContents} - Arrays of file and subdirectory names
 */
export const getDirContents = (dirPath: TDirName): TDirContents => {
  const files: Array<TFileName> = []
  const dirs: Array<TDirName> = []

  fs.readdirSync(dirPath).forEach((entry: string) => {
    const stat = fs.lstatSync(`${dirPath}/${entry}`)
    if (stat.isFile()) {
      files.push(entry)
    } else if (stat.isDirectory()) {
      dirs.push(entry)
    } // For now, ignore anything that's not a dir or a file
  })

  return { dirs: dirs, files: files }
}

/**
 * Recursively build the directory tree based at the given directory.
 *
 * @param {TDirName} dirName - String path to the directory to build a tree from
 * @param {Array<TDirName>} parents - Array of parent directory names
 * @returns {TDirTreeNode} - Tree node containing current directory and all children
 */
export const buildDirTree = (
  dirName: TDirName,
  parents: Array<TDirName> = [],
): TDirTreeNode => {
  // Recursive function to walk a directory tree and store directory and
  // file information
  const pathArray = [...parents, dirName]
  const fullPath = pathArray.join('/')

  const dirContents = getDirContents(fullPath)

  console.log(`Traversing ${fullPath}...`)

  /*
    It appears that node names in Mermaid are *case-sensitive*:
      https://www.reddit.com/r/Notion/comments/rybwkx/notion_mermaid_gotchas_potential_pitfalls_that_i/

    Thus, by choosing the all-lowercase name 'root' for the name
    for the root directory node, we shouldn't have to worry about
    node name collisions if there happens to be a top-level
    subdirectory named 'root'.

    Also, we .slice(1) the pathArray so that if we have a long path
    passed into the top-level function as the root, it doesn't give us
    annoyingly long node names.
  */
  return {
    parents: parents,
    dirName: dirName,
    nodeName:
      parents.length == 0
        ? 'root'
        : pathArray
            .slice(1)
            .map((dir) => dir.replace(/[^0-9a-z]/gi, ''))
            .map((dir) => dir[0].toUpperCase() + dir.slice(1))
            .join(''),
    files: dirContents.files,
    subdirs: dirContents.dirs.map((dir) => buildDirTree(dir, pathArray)),
  }
}

/**
 * Internal function for recursive traversal and printing of directory contents
 *
 * @param {TDirTreeNode} rootNode - Node at which to start/continue
 *  traversal/printing
 * @param {boolean} showFiles - If true, print each directory's file contents;
 *  if false, print only the directories.
 * @param {number} indentWidth - Number of spaces to indent each level of the
 *  directory tree
 * @param {number} indent - Current indentation width at this recursion depth
 */
const renderDirTreeInternal = (
  rootNode: TDirTreeNode,
  showFiles: boolean,
  indentWidth: number = 2,
  indent: number = 0,
): void => {
  const newIndent = indent + indentWidth

  console.log(
    ' '.repeat(indent) + rootNode.dirName + '/' + `  (${rootNode.nodeName})`,
  )

  if (showFiles) {
    rootNode.files.forEach((f) => console.log(' '.repeat(newIndent) + '- ' + f))
  }

  rootNode.subdirs.forEach((sd) => {
    renderDirTreeInternal(sd, showFiles, indentWidth, newIndent)
  })
}

/**
 * Print to console a formatted directory tree descending from the given root node
 *
 * @param {TDirTreeNode} rootNode - Node at which to start traversal/printing
 * @param {boolean} showFiles - If true, print each directory's file contents;
 *  if false, print only the directories.
 * @param {number} indentWidth - Number of spaces to indent each level of the
 *  directory tree
 */
export const renderDirTree = (
  rootNode: TDirTreeNode,
  showFiles: boolean = true,
  indentWidth: number = 2,
): void => {
  renderDirTreeInternal(rootNode, showFiles, indentWidth, 0)
}
