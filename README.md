## Telefonnummer

[![npm version](https://badge.fury.io/js/telefonnummer.svg)](https://badge.fury.io/js/telefonnummer)
[![Build Status](https://travis-ci.org/believer/telefonnummer.png?branch=master)](https://travis-ci.org/believer/telefonnummer)
[![Code Climate](https://codeclimate.com/github/believer/telefonnummer/badges/gpa.svg)](https://codeclimate.com/github/believer/telefonnummer)
[![Test Coverage](https://codeclimate.com/github/believer/telefonnummer/badges/coverage.svg)](https://codeclimate.com/github/believer/telefonnummer/coverage)

_Telefonnummer_ is phone number in Swedish. This package formats all Swedish phone numbers, both mobile and landline, to a standard format.

### Installation
```
yarn add telefonnummer
```

### Parse
```js
parse(number: string, separator?: string): string
```

Take a phone number string and return the parsed value. Parser is also default export of package, but might be removed as default in the future.

#### Example
```js
import { parse } from 'telefonnummer'
// OR import telefonnummer from 'telefonnummer'

parse('222') // Röstbrevlåda (Voicemail in Swedish)
parse('0701234567') // 070-123 45 67
parse('468123456') // 08-12 34 56
parse('031626262') // 031-62 62 62
parse('050012345') // 0500-123 45

// With custom separator
parse('0701234567', ':') // 070:123 45 67
```

### Area code
```js
areaCode(area: string): string
```

Returns the area code of the provided city

#### Example
```js
import { areaCode } from 'telefonnummer'

areaCode('Stockholm') // 08
areaCode('Korpilombolo') // 0977
```

### Numbering area
```js
numberingArea(areaCode: string | number): string
```

Returns the numbering area for a provided area code or phone number. Also handles numbers without leading zero.

#### Example
```js
import { numberingArea } from 'telefonnummer'

numberingArea('08') // Stockholm
numberingArea('031') // Göteborg
numberingArea('0977-123 45') // Korpilombolo
numberingArea(8) // Stockholm
```


### Tests
```
npm test
```
