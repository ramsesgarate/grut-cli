# Grut CLI

Generate ruts with format - cross platform

## Badges
[![js-standard-style][lint-standard-src]][lint-standard-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]


[lint-standard-src]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[lint-standard-href]: http://standardjs.com

[npm-version-src]: https://img.shields.io/npm/v/@rsgarate/grut-cli?style=flat-square
[npm-version-href]: https://npmjs.com/package/@rsgarate/grut-cli

[npm-downloads-src]: https://img.shields.io/npm/dm/@rsgarate/grut-cli?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@rsgarate/grut-cli

[github-actions-src]: https://img.shields.io/github/workflow/status/ramsesgarate/grut-cli/ci/main?style=flat-square
[github-actions-href]: https://github.com/ramsesgarate/grut-cli/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/ramsesgarate/grut-cli/main?style=flat-square
[codecov-href]: https://codecov.io/gh/ramsesgarate/grut-cli

## Installation

Install package:

```bash
# npm
npm install @rsgarate/grut-cli

# yarn
yarn install @rsgarate/grut-cli

# pnpm
pnpm install @rsgarate/grut-cli
```
    
## Usage

```
$ rut --help

  Commands

    validate, v      Check if a rut is valid
    get-digit, gd    Get the check digit
    format, f        Format rut
    clean, c         Returns a rut without format
    generate        Returns a rut without format
    help  display help for command
```

### Commands

**Generate Rut**

```
  Usage
    $ rut
      
    Options
        -f         Generate rut with format
        -s         Generate rut with single format, dash only

  Examples
        
    Generate rut without format
    $ rut

    Generate rut with format
    $ rut -f

    Generate rut with single format
    $ rut -s
```

**Format Rut**

```
  Usage
    $ rut format <rut>
      
    Options
        -s         Generate rut with single format, dash only

  Examples

    Generate rut with format
    $ rut format <rut>

    Generate rut with single format
    $ rut format -s <rut>
```

**Validate Rut**

```
  Usage
    $ rut validate <rut>

  Examples

    Validate rut
    $ rut validate <rut>
```

**Clean Rut**

```
  Usage
    $ rut clean <rut>

  Examples

    Clean rut
    $ rut clean <rut>
```

**Get check digit**

```
  Usage
    $ rut get-digit <rut>

  Examples

    Get check digit for
    $ rut get-digit <rut>
```

## Related

Here are some related projects

- [@rsgarate/rut](https://github.com/ramsesgarate/rutjs) - API for this module


## Authors

- [@ramsesgarate](https://www.github.com/ramsesgarate)


## License

Made with 💛

Published under [MIT License](./LICENSE).