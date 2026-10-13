# moment-random

> Generates a new random moment.js object

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
