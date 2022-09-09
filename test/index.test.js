import { describe, expect, it } from 'vitest'
import { execa } from 'execa'
import { stdoutFormat } from './helper.js'

describe('main', () => {
  it('Generate rut without format', async () => {
    const { stdout } = await execa('./grut-cli.js')
    const output = stdoutFormat(stdout)

    const rutLength = output.rut.length

    expect(output.rutText).toBe('Rut generated')
    expect(output.clipboardText).toBe('It has been copied to the clipboard')
    expect(rutLength).toBeGreaterThanOrEqual(7)
    expect(rutLength).toBeLessThanOrEqual(9)
  })

  it('Generate rut with format', async () => {
    const { stdout } = await execa('./grut-cli.js', ['--f'])
    const pattern = /^(\d{1,2})?.(\d{3}).(\d{3})-(\w{1})$/
    const output = stdoutFormat(stdout)

    const rutLength = output.rut.length

    expect(output.rutText).toBe('Rut generated')
    expect(output.clipboardText).toBe('It has been copied to the clipboard')
    expect(rutLength).toBeGreaterThanOrEqual(10)
    expect(rutLength).toBeLessThanOrEqual(12)
    expect(output.rut).toMatch(pattern)
  })
})
