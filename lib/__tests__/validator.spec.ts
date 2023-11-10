import { expect, test } from 'bun:test'
import { validator } from '../validator'

test.each([
  ['070-abc de fg'],
  ['0701ggas234asdf567d'],
  ['070abcdefb'],
  ['abcdefg'],
])('errors for non-numerical input %s', (phoneNumber) => {
  expect(validator(phoneNumber)).toBe(false)
})

test.each([
  Object.entries({
    '+46791234567': true,
    '070-123 45 67': true,
    '070123456': false,
    '0701234567': true,
    '071-123 45 67': false,
    '0711234567': false,
    '0721234567': true,
    '0731234567': true,
    '0761234567': true,
    '0791234567': true,
    '+44791234567': false,
  }),
])('checks validity of mobile phone numbers', ([phoneNumber, valid]) => {
  expect(validator(phoneNumber)).toBe(valid)
})

test.each([
  Object.entries({
    '+4681234567': true,
    '004681234567': true,
    '08-12 34 56': true,
    '08-12 34 5611': false,
    '08-123 45 67': true,
    '08-123 67': false,
    '0812345': false,
    '08123456': true,
    '081234567': true,
    '0812345678': false,
    '+4481234567': false,
  }),
])('returns correct for 2 digit area codes', ([phoneNumber, valid]) => {
  expect(validator(phoneNumber)).toBe(valid)
})

test.each([
  Object.entries({
    '+4631626262': true,
    '0104465721': false,
    '03112345': true,
    '0311234567': true,
    '031446572': true,
    '031626262': true,
    46311234567: true,
    4631626262: true,
    '+443112345': false,
  }),
])('returns correct for 3 digit area codes', ([phoneNumber, valid]) => {
  expect(validator(phoneNumber)).toBe(valid)
})

test.each([
  Object.entries({
    '+46500123456': true,
    '0304123456': true,
    '050012123456': false,
    '050012345': true,
    '0500123456': true,
    46304123456: true,
    46500123456: true,
    '+4450012345': false,
  }),
])('returns correct for 4 digit area codes', ([phoneNumber, valid]) => {
  expect(validator(phoneNumber)).toBe(valid)
})

test.each([
  Object.entries({
    '031626262': false,
    '0500123456': false,
    '070-123 45 67': true,
    '070123456': false,
    '0701234567': true,
    '071-123 45 67': false,
    '0711234567': false,
    '0721234567': true,
    '0731234567': true,
    '0751234567': false,
    '0761234567': true,
    '0791234567': true,
    '081234567': false,
  }),
])(
  'checks validity of phone numbers, but only allow mobile numbers',
  ([phoneNumber, valid]) => {
    expect(validator(phoneNumber, { onlyMobile: true })).toBe(valid)
  },
)
