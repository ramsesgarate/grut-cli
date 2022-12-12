#!/usr/bin/env node
import { clean } from '@rsgarate/rut'
import { Command } from 'commander'
import chalk from 'chalk'
import clipboard from 'clipboardy'

const program = new Command()
const textCopy = chalk.green('It has been copied to the clipboard')

program
  .argument('<rut>', 'rut to clean')
  .parse(process.argv)

const [rut] = program.args
const rutCleaned = clean(rut)
const output = `
Rut ${chalk.blue(rut)} is cleaned ${chalk.green(rutCleaned)}

${textCopy}`

clipboard.writeSync(rutCleaned)
console.log(output)
