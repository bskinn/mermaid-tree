import type { TConfigFull } from './types'

import { E_ConfigKeys } from './enums'

/**
 * Compose the theme settings line for a Mermaid diagram source block from
 *     individual settings values.
 *
 * @param {number} fontSize - Font size in pixels
 * @param {string} lineColor - RGB hex color for the connecting arrows
 * @param {string} filesFillColor - RGB hex color for the files-node fill
 * @param {string} filesBorderColor - RGB hex color f the files-node border
 * @param {string} filesTextColor - RGB hex color for the files-node text
 * @param {string} extraThemeVariables - Additional comma-separated mappings of
 *    theme parameter names to values ('<param>': <value>)
 * @returns {string} - Composited theme settings source line
 */
export const composeThemeSettingsLine = (
  fontSize: number,
  lineColor: string,
  filesFillColor: string,
  filesBorderColor: string,
  filesTextColor: string,
  extraThemeVariables: string = '',
): string => {
  // If these are included, we need to append them correctly to the existing
  // list of other theme variables
  extraThemeVariables = extraThemeVariables ? `, ${extraThemeVariables}` : ''

  return `%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '${fontSize}px', 'lineColor': '${lineColor}', 'primaryColor': '${filesFillColor}', 'primaryTextColor': '${filesTextColor}', 'primaryBorderColor': '${filesBorderColor}${extraThemeVariables}'}}}%%`
}

/**
 * Compose the theme settings line for a Mermaid diagram source block from
 *     a config object.
 *
 * @param {TConfigFull} config - Config object from which to define the theme
 *     settings string
 * @param {string} extraThemeVariables - Additional comma-separated mappings of
 *    theme parameter names to values ('<param>': <value>)
 * @returns {string} - Composited theme settings source line
 */
export const composeThemeSettingsLineConfig = (
  config: TConfigFull,
  extraThemeVariables: string = '',
): string => {
  const fontSize: number = config[E_ConfigKeys.Text][E_ConfigKeys.Size]
  const lineColor: string = config[E_ConfigKeys.Color][E_ConfigKeys.Line]
  const filesFillColor: string =
    config[E_ConfigKeys.Color][E_ConfigKeys.Files][E_ConfigKeys.Fill]
  const filesBorderColor: string =
    config[E_ConfigKeys.Color][E_ConfigKeys.Files][E_ConfigKeys.Border]
  const filesTextColor: string =
    config[E_ConfigKeys.Color][E_ConfigKeys.Files][E_ConfigKeys.Text]

  return composeThemeSettingsLine(
    fontSize,
    lineColor,
    filesFillColor,
    filesBorderColor,
    filesTextColor,
    extraThemeVariables,
  )
}

/**
 * Compose the directory-node configuration line for a Mermaid diagram source
 *     block from individual parameters.
 *
 * @param {string} dirNodeName - Name to use for the directory-node Mermaid class
 * @param {string} dirFillColor - RGB hex color for the directory-node fill
 * @param {string} dirBorderColor - RGB hex color for the directory-node border
 * @param {string} dirTextColor - RGB hex color for the directory-node text
 * @returns {string} - Composited directory-node class definition source line
 */
export const composeDirNodeDefLine = (
  dirNodeName: string,
  dirFillColor: string,
  dirBorderColor: string,
  dirTextColor: string,
) => {
  return `classDef ${dirNodeName} fill: ${dirFillColor}, stroke: ${dirBorderColor}, color: ${dirTextColor}`
}

/**
 * Compose the directory-node configuration line for a Mermaid diagram source
 *     block from a config object.
 *
 * @param {TConfigFull} config - Config object from which to define the theme
 *     settings string
 * @returns {string} - Composited directory-node class definition source line
 */
export const composeDirNodeDefLineConfig = (config: TConfigFull) => {
  const dirNodeName: string =
    config[E_ConfigKeys.Mermaid][E_ConfigKeys.DirNodeName]
  const dirFillColor: string =
    config[E_ConfigKeys.Color][E_ConfigKeys.Dir][E_ConfigKeys.Fill]
  const dirBorderColor: string =
    config[E_ConfigKeys.Color][E_ConfigKeys.Dir][E_ConfigKeys.Border]
  const dirTextColor: string =
    config[E_ConfigKeys.Color][E_ConfigKeys.Dir][E_ConfigKeys.Text]

  return composeDirNodeDefLine(
    dirNodeName,
    dirFillColor,
    dirBorderColor,
    dirTextColor,
  )
}
