import { describe, expect, it } from 'vitest'
import { execa } from 'execa'

describe('main', () => {
  it('Generate rut without format', async () => {
    const { stdout: rut } = await execa('./grut-cli.js')

    const rutLength = rut.length

    expect(rutLength).toBeGreaterThanOrEqual(7)
    expect(rutLength).toBeLessThanOrEqual(9)
  })

  it('Generate rut with format', async () => {
    const { stdout: rut } = await execa('./grut-cli.js', ['--f'])

    const rutLength = rut.length
    const pattern = /^(\d{1,2})?.(\d{3}).(\d{3})-(\w{1})$/

    expect(rutLength).toBeGreaterThanOrEqual(10)
    expect(rutLength).toBeLessThanOrEqual(12)

    expect(rut).toMatch(pattern)
  })
})
