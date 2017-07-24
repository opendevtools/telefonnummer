const validator = require('../lib/validator')

describe('#validator', () => {
  it('returns false when nothing is provided', () => {
    expect(validator()).toBe(false)
  })

  it('returns true for valid mobile numbers', () => {
    expect(validator('0701234567')).toBe(true)
    expect(validator('0721234567')).toBe(true)
    expect(validator('0731234567')).toBe(true)
    expect(validator('0761234567')).toBe(true)
    expect(validator('0791234567')).toBe(true)
    expect(validator('070-123 45 67')).toBe(true)
  })

  it('returns false for invalid mobile numbers', () => {
    expect(validator('0711234567')).toBe(false)
    expect(validator('070123456')).toBe(false)
    expect(validator('071-123 45 67')).toBe(false)
  })

  it('returns correct for 2 digit area codes', () => {
    expect(validator('081234567')).toBe(true)
    expect(validator('08123456')).toBe(true)
    expect(validator('08-123 45 67')).toBe(true)
    expect(validator('08-12 34 56')).toBe(true)

    expect(validator('0812345678')).toBe(false)
    expect(validator('0812345')).toBe(false)
    expect(validator('08-123 67')).toBe(false)
    expect(validator('08-12 34 5611')).toBe(false)
  })

  it('returns correct for 3 digit area codes', () => {
    expect(validator('03112345')).toBe(true)
    expect(validator('031446572')).toBe(true)
    expect(validator('4631626262')).toBe(true)
    expect(validator('031626262')).toBe(true)
    expect(validator('46311234567')).toBe(true)
    expect(validator('0311234567')).toBe(true)

    expect(validator('0104465721')).toBe(false)
  })

  it('returns correct for 4 digit area codes', () => {
    expect(validator('050012345')).toBe(true)
    expect(validator('46304123456')).toBe(true)
    expect(validator('0304123456')).toBe(true)
    expect(validator('46500123456')).toBe(true)
    expect(validator('0500123456')).toBe(true)
  })

  it('returns false for any other case', () => {
    expect(validator('050012123456')).toBe(false)
  })
})
