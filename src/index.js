import { generate, format } from '@rsgarate/rut'
import chalk from 'chalk'
import clipboard from 'clipboardy'

const textCopy = chalk.green('It has been copied to the clipboard')

function cli (flags) {
  const { withFormat } = flags

  const rut = withFormat ? format(generate()) : generate()

  clipboard.writeSync(rut)

  const output = `
  Rut generated: ${chalk.blue(rut)}

  ${textCopy}`
  console.log(output)
}

export default cli
