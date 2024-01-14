import {
  MARKER_REGEX_SPAN,
  MARKER_REGEX_START,
  MARKER_REGEX_STOP,
  MARKER_STRING_START,
  MARKER_STRING_STOP,
} from './consts'

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

// TODO: Add function to update a Markdown file in-place
