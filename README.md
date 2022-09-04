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
npm install grut-cli

# yarn
yarn install grut-cli

# pnpm
pnpm install grut-cli
```
    
## Usage

```
$ grut --help
  Usage
    $ grut
      
    Options
        --with-format, -f         Format a rut with dots and dash
        --single-format, -s       Format a rut with dash only
        --validate=<rut>, -v    Check if a rut is valid
        --digit=<rut>, -d       Get the check digit
        --clean=<rut>, -c       Returns a rut without format

    Examples
        
    Generate rut without format
    $ grut

    Generate rut with format
    $ grut --format

    Validate rut
    $ grut --is-valid=18.543.928-3

```


## Tip

Run it with `$ r` instead by adding `alias r=grut` to your `.zshrc`/`.bashrc`.





## Related

Here are some related projects

- [@rsgarate/rut](https://github.com/ramsesgarate/rutjs) - API for this module


## Authors

- [@ramsesgarate](https://www.github.com/ramsesgarate)


## License

Made with 💛

Published under [MIT License](./LICENSE).