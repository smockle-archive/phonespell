# phonespell

[![npm](https://img.shields.io/npm/v/@smockle/phonespell.svg)](https://www.npmjs.com/package/@smockle/phonespell)
[![Publish Workflow](https://github.com/smockle/phonespell/workflows/Publish/badge.svg)](https://github.com/smockle/phonespell/actions)
[![codecov](https://codecov.io/gh/smockle/phonespell/branch/master/graph/badge.svg)](https://codecov.io/gh/smockle/phonespell)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=smockle/phonespell)](https://dependabot.com)

Convert a word to its dialpad number equivalent (e.g. "SPELL" to 77355).

## Installation

Run `yarn add @smockle/phonespell` to add `phonespell` to your project.

## Usage

### Shell

```sh
$ phonespell "SPELL"
```

### JavaScript & TypeScript

```TypeScript
import { phonespell } from "@smockle/phonespell";
console.log(phonespell("SPELL"));
```

## Testing

`phonespell` includes several unit tests. After cloning the `phonespell` repo locally, run `yarn install` in the project folder to install dependencies. Run `yarn test` to execute the tests.