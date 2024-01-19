import { E_ConfigKey } from './enums'

import * as fs from 'fs'

import {
  MARKER_REGEX_SPAN,
  MARKER_REGEX_START,
  MARKER_REGEX_STOP,
  MARKER_STRING_START,
  MARKER_STRING_STOP,
} from './consts'
import { TConfigFull } from './types'

/**
 * Perform the substitution of Mermaid diagram code block source into a
 * given overall Markdown source string.
 *
 * @param {string} inputSource - Markdown source string into which to inject
 *    the Mermaid source
 * @param {string} mermaidSource - Mermaid source string to inject
 * @returns {string} Input source with added/modified Mermaid diagram source
 */
export const injectMermaidSource = (
  inputSource: string,
  mermaidSource: string,
): string => {
  const startMarkerIndex = inputSource.search(MARKER_REGEX_START)
  const stopMarkerIndex = inputSource.search(MARKER_REGEX_STOP)

  if (startMarkerIndex < 0) {
    throw `Diagram start marker not found! (${MARKER_STRING_START})`
  }

  const injectedSource = `${MARKER_STRING_START}\n\n${mermaidSource}\n\n${MARKER_STRING_STOP}`

  if (stopMarkerIndex < 0) {
    // We replace the lone start marker with the start marker, the source,
    // and the stop marker
    return inputSource.replace(MARKER_REGEX_START, injectedSource)
  } else {
    // We replace the content between the start and stop markers with the
    // source
    return inputSource.replace(MARKER_REGEX_SPAN, injectedSource)
  }
}

/**
 * Update the Markdown diagram source in the file at the indicated path
 *
 * @param {string} outputFilePath - Path to the file to update
 * @param {string} mermaidSource - Source string for the new Mermaid graph
 * @param {TConfigFull} config - Whether to actually modify the file
 */
export const updateMarkdownFile = (
  outputFilePath: string,
  mermaidSource: string,
  config: TConfigFull,
): void => {
  const newFileContents = injectMermaidSource(
    fs.readFileSync(outputFilePath).toString(),
    mermaidSource,
  )

  if (config[E_ConfigKey.System][E_ConfigKey.DryRun]) {
    console.log(
      `Would update ${outputFilePath} to become:\n\n${newFileContents}`,
    )
  } else {
    fs.writeFileSync(outputFilePath, newFileContents)
  }
}
