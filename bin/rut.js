#!/usr/bin/env node
import { Command } from 'commander'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { version } = require('../package.json')

const program = new Command()

program
  .name('rut')
  .description('Generate ruts with format - cross platform')
  .version(version)
  .command('validate', 'Check if a rut is valid').alias('v')
  .command('get-digit', 'Get the check digit').alias('gd')
  .command('format', 'Format rut').alias('f')
  .command('clean', 'Returns a rut without format').alias('c')
  .command('generate', 'Returns a rut without format', { isDefault: true })

program.parse(process.argv)
