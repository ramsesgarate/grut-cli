#!/usr/bin/env node
import { generate, format } from '@rsgarate/rut'
import { Command } from 'commander'
import chalk from 'chalk'
import clipboard from 'clipboardy'

const program = new Command()
const textCopy = chalk.green('It has been copied to the clipboard')

program
  .option('-f, --format', 'with format')
  .option('-s, --single ', 'with single format')
  .parse(process.argv)

const options = program.opts()
const configFormat = { dashAlone: !!options.single }
const rut = options.format || options.single ? format(generate(), configFormat) : generate()

const output = `
Rut generated: ${chalk.blue(rut)}

${textCopy}`

clipboard.writeSync(rut)
console.log(output)
