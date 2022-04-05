import { expect, test } from 'vitest'
import { makeRegex } from '../makeRegex'

test('handles undefined type (long implicitly)', () => {
  expect(makeRegex(2)(3)()).toEqual(/^(\d{2})(\d{3})(\d{2})(\d{2})$/)
})

test('handles type short', () => {
  expect(makeRegex(2)(3)('short')).toEqual(/^(\d{2})(\d{3})(\d{2})$/)
})

test('handles type tenDigit', () => {
  expect(makeRegex(3)(3)('tenDigit')).toEqual(/^(\d{3})(\d{3})(\d{3})(\d{2})$/)
})

test('handles type long explicitly', () => {
  expect(makeRegex(3)(3)('long')).toEqual(/^(\d{3})(\d{3})(\d{2})(\d{2})$/)
})
