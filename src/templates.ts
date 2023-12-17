import type { TConfigFull } from './types'

import { E_ConfigKeys } from './enums'

export const composeThemeSettingsLine = (
  fontSize: number,
  lineColor: string,
  filesFillColor: string,
  filesBorderColor: string,
  filesTextColor: string,
  extraThemeVariables: string = '',
) => {
  // If these are included, we need to append them correctly to the existing
  // list of other theme variables
  extraThemeVariables = extraThemeVariables ? `, ${extraThemeVariables}` : ''

  return `%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '${fontSize}px', 'lineColor': '${lineColor}', 'primaryColor': '${filesFillColor}', 'primaryTextColor': '${filesTextColor}', 'primaryBorderColor': '${filesBorderColor}${extraThemeVariables}'}}}%%`
}

export const composeThemeSettingsLineConfig = (
  config: TConfigFull,
  extraThemeVariables: string = '',
) => {
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

export const composeDirNodeDefLine = (
  dirNodeName: string,
  dirFillColor: string,
  dirBorderColor: string,
  dirTextColor: string,
) => {
  return `classDef ${dirNodeName} fill: ${dirFillColor}, stroke: ${dirBorderColor}, color: ${dirTextColor}`
}

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
