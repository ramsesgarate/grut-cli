#!/usr/bin/env node
import meow from 'meow'
import cli from './src/index.js'

const grut = meow(`
      Usage
        $ grut
      
      Options
        --with-format, -f         Format a rut with dots and dash
        --single-format, -s       Format a rut with dash only
        --validate=<input>, -v    Check if a rut is valid
        --digit=<input>, -d       Get the check digit
        --clean=<input>, -c       Returns a rut without format

      Examples
        Generate rut without format
        $ grut

        Generate rut with format
        $ grut --format

        Validate rut
        $ grut --is-valid=18.543.928-3
`, {
  importMeta: import.meta,
  flags: {
    withFormat: {
      type: 'boolean',
      alias: 'f',
      default: false
    }
  }
})

cli(grut.flags)
