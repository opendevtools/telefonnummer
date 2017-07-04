## Telefonnummer

_Telefonnummer_ is phone number in Swedish. This package formats all Swedish phone numbers, both mobile and landline, to a standard format.

### Installation
```
yarn add telefonnummer
```

### Usage
```js
telefonnummer(number: string, separator?: string): string
```

Take a phone number string and return the parsed value.

#### Example
```js
import telefonnummer from 'telefonnummer'

telefonnummer('222') // Röstbrevlåda
telefonnummer('0701234567') // 070-123 45 67
telefonnummer('468123456') // 08-12 34 56
telefonnummer('031626262') // 031-62 62 62
telefonnummer('050012345') // 0500-123 45
```

#### With a custom separtor
```js
telefonnummer('0701234567', ':') // 070:123 45 67
```

### Tests
```
npm test
```
