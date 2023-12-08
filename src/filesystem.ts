import * as fs from 'fs'
import type { TDirContents, TDirName, TDirTreeNode, TFileName } from './types'

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
const buildDirTree = (
  dirName: TDirName,
  parents: Array<TDirName> = [],
): TDirTreeNode => {
  // Recursive function to walk a directory tree and store directory and
  // file information
  const pathArray = [...parents, dirName]
  const fullPath = pathArray.join('/')

  const dirContents = getDirContents(fullPath)

  console.log(`Traversing ${fullPath}...`)

  return {
    parents: parents,
    dirName: dirName,
    nodeName:
      parents.length == 0
        ? 'root'
        : pathArray
            .map((dir) => dir.replace(/[^0-9a-z]/gi, ''))
            .map((dir) => dir[0].toUpperCase() + dir.slice(1))
            .join(''),
    files: dirContents.files,
    subdirs: dirContents.dirs.map((dir) => buildDirTree(dir, pathArray)),
  }
}
