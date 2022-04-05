import { expect, test } from 'vitest'
import { numberingArea } from '../numberingArea'

test('returns empty string if nothing is found', () => {
  expect(numberingArea('1234')).toEqual('')
})

test('returns a numbering area for a given area code', () => {
  expect(numberingArea('08')).toEqual('Stockholm')
})

test('returns numbering area for a more complex area', () => {
  expect(numberingArea('0142')).toEqual('Mjölby-Skänninge-Boxholm')
})

test('returns correctly when provided a number', () => {
  expect(numberingArea(8)).toEqual('Stockholm')
  expect(numberingArea(142)).toEqual('Mjölby-Skänninge-Boxholm')
})

test('if provided a real phonenumber finds the area', () => {
  expect(numberingArea('081234567')).toEqual('Stockholm')
  expect(numberingArea('031124567')).toEqual('Göteborg')
  expect(numberingArea('0977-123 45')).toEqual('Korpilombolo')
})

test('does not use long number if not a parseable number', () => {
  expect(numberingArea('08123456712312')).toEqual('')
})
