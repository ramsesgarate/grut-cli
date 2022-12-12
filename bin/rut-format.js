#!/usr/bin/env node
import { format } from '@rsgarate/rut'
import { Command } from 'commander'
import chalk from 'chalk'
import clipboard from 'clipboardy'

const program = new Command()
const textCopy = chalk.green('It has been copied to the clipboard')

program
  .option('-s, --single', 'with single format')
  .argument('<rut>', 'rut to format')
  .parse(process.argv)

const [rut] = program.args
const options = program.opts()
const configFormat = { dashAlone: !!options.single }
const rutFormatted = format(rut, configFormat)
const output = `
Rut formatted: ${chalk.blue(rutFormatted)}

${textCopy}`

clipboard.writeSync(rutFormatted)
console.log(output)
