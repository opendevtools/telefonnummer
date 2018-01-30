const validator = require('../lib/validator')

function validateHelper(numbers, expected) {
  numbers.forEach(number => {
    expect(validator(number)).toBe(expected)
  })
}

describe('#validator', () => {
  it('returns false when nothing is provided', () => {
    expect(validator()).toBe(false)
  })

  it('returns false for non-numerical input', () => {
    const numbers = ['abcdefg', '070abcdefb', '070-abc de fg']

    validateHelper(numbers, false)
  })

  it('returns true for valid mobile numbers', () => {
    const numbers = [
      '0701234567',
      '0721234567',
      '0731234567',
      '0761234567',
      '0791234567',
      '070-123 45 67'
    ]

    validateHelper(numbers, true)
  })

  it('returns false for invalid mobile numbers', () => {
    const numbers = ['0711234567', '070123456', '071-123 45 67']

    validateHelper(numbers, false)
  })

  it('returns correct for 2 digit area codes', () => {
    const validNumbers = [
      '081234567',
      '08123456',
      '08-123 45 67',
      '08-12 34 56'
    ]

    const invalidNumbers = [
      '0812345678',
      '0812345',
      '08-123 67',
      '08-12 34 5611'
    ]

    validateHelper(validNumbers, true)
    validateHelper(invalidNumbers, false)
  })

  it('returns correct for 3 digit area codes', () => {
    const validNumbers = [
      '03112345',
      '031446572',
      '4631626262',
      '031626262',
      '46311234567',
      '0311234567'
    ]

    const invalidNumbers = ['0104465721']

    validateHelper(validNumbers, true)
    validateHelper(invalidNumbers, false)
  })

  it('returns correct for 4 digit area codes', () => {
    const numbers = [
      '050012345',
      '46304123456',
      '0304123456',
      '46500123456',
      '0500123456'
    ]

    validateHelper(numbers, true)
  })

  it('returns false for any other case', () => {
    expect(validator('050012123456')).toBe(false)
  })
})
