# TSLint Config for Wise Kingdom

[![NPM version](https://img.shields.io/npm/v/@wisekingdom/tslint-config.svg?style=flat)](https://www.npmjs.com/package/@wisekingdom/tslint-config)
[![License](https://img.shields.io/npm/l/@wisekingdom/tslint-config.svg?style=flat)](https://www.npmjs.com/package/@wisekingdom/tslint-config)
[![CircleCI](https://circleci.com/gh/isman-usoh/wisekingdom-tslint-config.svg?style=svg)](https://circleci.com/gh/isman-usoh/wisekingdom-tslint-config)

> A [TSLint config](https://palantir.github.io/tslint/usage/configuration/) for Wise Kingdom

## Installation

```bash
yarn add @wisekingdom/tslint-config -D
```

## Usage

In `tslint.json`:

```json
{
  "extends": "@wisekingdom/tslint-config"
}
```

### Rules

* [tslint](https://www.npmjs.com/package/tslint)
* [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)
* [tslint-plugin-prettier](https://www.npmjs.com/package/tslint-plugin-prettier)

## Versioning

```
+----- Major version is synchronize with tslint's major version.
| +--- Minor version has BREAKING CHANGE and feat.
| | +- Patch version has patch.
| | |
x.x.x
```

## License

MIT