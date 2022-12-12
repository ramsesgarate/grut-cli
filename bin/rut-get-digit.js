#!/usr/bin/env node
import { getCheckDigit } from '@rsgarate/rut'
import { Command } from 'commander'
import chalk from 'chalk'

const program = new Command()

program
  .argument('<rut>', 'rut to get digit')
  .parse(process.argv)

const [rutWithoutDigit] = program.args
const checkDigit = getCheckDigit(rutWithoutDigit)
const output = `
Check digit is ${chalk.green(checkDigit)} for ${chalk.blue(rutWithoutDigit)}
----
Rut ${chalk.blue(rutWithoutDigit)}-${chalk.green(checkDigit)}`

console.log(output)
