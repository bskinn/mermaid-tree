export const themeSettingsLine = (
  fontSize: number,
  lineColor: string,
  filesFillColor: string,
  filesBorderColor: string,
  filesTextColor: string,
  extraThemeVariables: string = '',
) => {
  extraThemeVariables = extraThemeVariables ? `, ${extraThemeVariables}` : ''

  return `%%{init: {'theme': 'base', 'themeVariables': {'fontSize': '${fontSize}px', 'lineColor': '${lineColor}', 'primaryColor': '${filesFillColor}', 'primaryTextColor': '${filesTextColor}', 'primaryBorderColor': '${filesBorderColor}${extraThemeVariables}'}}}%%`
}

export const dirNodeDefLine = (
  dirNodeName: string,
  dirFillColor: string,
  dirBorderColor: string,
  dirTextColor: string,
) => {
  return `classDef ${dirNodeName} fill: ${dirFillColor}, stroke: ${dirBorderColor}, color: ${dirTextColor}`
}
