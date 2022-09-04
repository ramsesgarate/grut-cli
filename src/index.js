import { generate, format } from '@rsgarate/rut'
import clipboard from 'clipboardy'

function cli (flags) {
  const { withFormat } = flags

  const output = withFormat ? format(generate()) : generate()

  clipboard.writeSync(output)
  console.log(output)
}
export default cli
