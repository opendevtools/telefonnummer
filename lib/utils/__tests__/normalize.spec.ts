import { expect, test } from 'bun:test'
import { normalize } from '../normalize'

test('should handle numbers with +46', () => {
  expect(normalize('+46701234567')).toEqual('0701234567')
})

test('should handle numbers with 0046', () => {
  expect(normalize('0046701234567')).toEqual('0701234567')
})

test('should handle numbers with 460', () => {
  expect(normalize('460701234567')).toEqual('0701234567')
})

test('should handle numbers with optional zero (0)', () => {
  expect(normalize('+46(0)701234567')).toEqual('0701234567')
})

test('should handle unwanted characters', () => {
  expect(normalize('abcde070-123.45*67 fghi')).toEqual('0701234567')
})

test('should handle already formatted numbers', () => {
  expect(normalize('0701234567')).toEqual('0701234567')
  expect(normalize('0701234567')).toEqual('0701234567')
})
