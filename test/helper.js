export const stdoutFormat = (stdout) => {
  const [firstLine, clipboardText] = stdout
    .split('\n')
    .filter((item) => item)
    .map((item) => item.trim())

  const [rutText, rut] = firstLine.split(': ')

  return {
    rutText,
    rut,
    clipboardText
  }
}
