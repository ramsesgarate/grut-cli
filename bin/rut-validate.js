#!/usr/bin/env node
import { isValid } from '@rsgarate/rut'
import { Command } from 'commander'
import chalk from 'chalk'

const program = new Command()

program
  .argument('<rut>', 'rut to validate')
  .parse(process.argv)

const [rut] = program.args
const isValidRut = isValid(rut)
const validationText = isValidRut ? chalk.green('valid') : chalk.red('invalid')
const output = `
Rut ${chalk.blue(rut)} is ${validationText}`

console.log(output)
