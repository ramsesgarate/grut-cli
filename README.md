# Grut CLI

Generate ruts with format - cross platform

## Badges
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

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
    
## Usage/Examples

```
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