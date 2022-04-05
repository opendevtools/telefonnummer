import { expect, test } from 'vitest'
import { phoneNumberParser } from '../parser'

const parserHelper = (numbers: string[], expected: string): void => {
  numbers.forEach((phoneNumber) => {
    expect(phoneNumberParser(phoneNumber)).toEqual(expected)
  })
}

test('handles null values', () => {
  parserHelper([null, undefined], '')
})

test('parses voicemail', () => {
  const numbers = [
    '46888',
    '46888',
    '46333',
    '46147',
    '888',
    '333',
    '222',
    '147',
  ]

  parserHelper(numbers, 'Röstbrevlåda')
})

test('handles non strings', () => {
  expect(phoneNumberParser(46721834008)).toEqual('072-183 40 08')
})

test('parses normal mobile numbers', () => {
  expect(phoneNumberParser('46721834008')).toEqual('072-183 40 08')
  expect(phoneNumberParser('0721834008')).toEqual('072-183 40 08')
  expect(phoneNumberParser('0701234567')).toEqual('070-123 45 67')
})

test('parses landline numbers with 2 number area codes', () => {
  expect(phoneNumberParser('4681234567')).toEqual('08-123 45 67')
  expect(phoneNumberParser('081234567')).toEqual('08-123 45 67')
  expect(phoneNumberParser('468123456')).toEqual('08-12 34 56')
  expect(phoneNumberParser('08123456')).toEqual('08-12 34 56')
})

test('parses landline numbers with 2 digits area codes and 8 number chars', () => {
  expect(phoneNumberParser('46812345678')).toEqual('08-123 456 78')
})

test('parses landline number with 3 number area codes', () => {
  expect(phoneNumberParser('03112345')).toEqual('031-123 45')
  expect(phoneNumberParser('031446572')).toEqual('031-44 65 72')
  expect(phoneNumberParser('4631626262')).toEqual('031-62 62 62')
  expect(phoneNumberParser('031626262')).toEqual('031-62 62 62')
  expect(phoneNumberParser('46311234567')).toEqual('031-123 45 67')
  expect(phoneNumberParser('0311234567')).toEqual('031-123 45 67')
})

test('parses landline number with 4 number area codes', () => {
  expect(phoneNumberParser('050012345')).toEqual('0500-123 45')
  expect(phoneNumberParser('46304123456')).toEqual('0304-12 34 56')
  expect(phoneNumberParser('0304123456')).toEqual('0304-12 34 56')
  expect(phoneNumberParser('46500123456')).toEqual('0500-12 34 56')
  expect(phoneNumberParser('0500123456')).toEqual('0500-12 34 56')
})

test('parses numbers with +46', () => {
  expect(phoneNumberParser('+46 0700123456')).toEqual('070-012 34 56')
  expect(phoneNumberParser('+46701234567')).toEqual('070-123 45 67')
})

test('parses numbers with 0046', () => {
  expect(phoneNumberParser('0046701234567')).toEqual('070-123 45 67')
})

test('parses numbers with complex internationalization', () => {
  expect(phoneNumberParser('+46 (0) 701234567')).toEqual('070-123 45 67')
})

test('can parse with custom separator', () => {
  expect(phoneNumberParser('031446572', { separator: ' <> ' })).toEqual(
    '031 <> 44 65 72'
  )
  expect(phoneNumberParser('0701234567', { separator: ' ' })).toEqual(
    '070 123 45 67'
  )
  expect(phoneNumberParser('0701234567', { separator: ':' })).toEqual(
    '070:123 45 67'
  )
  expect(phoneNumberParser('050012345', { separator: ' ' })).toEqual(
    '0500 123 45'
  )
})

test('can parse as international number', () => {
  expect(phoneNumberParser('0701234567', { internationalized: true })).toEqual(
    '+46701234567'
  )
})
