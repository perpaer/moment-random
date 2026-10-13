# moment-random

> Generates a new random moment.js object

[![CI](https://github.com/perpaer/moment-random/actions/workflows/ci.yml/badge.svg)](https://github.com/perpaer/moment-random/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/moment-random)](https://www.npmjs.com/package/moment-random)

## Install

_make sure you have moment installed_

```
$ npm install moment-random
```

## Usage

```js
import momentRandom from 'moment-random'
// or: const momentRandom = require('moment-random')

momentRandom()
// > random date in the past
```

You can also specify an interval

```js
momentRandom(end)
// > random date between 0 unix time and {end} dates

momentRandom(end, start)
// > random date between {start} and {end} dates
```

**Arguments**

- `end, start` - anything a moment constructor accepts (see [moment.js docs](https://momentjs.com/docs/#/parsing/))
