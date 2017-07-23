const { expect } = require('chai')
const validator = require('../lib/validator')

describe('#validator', () => {
  it('returns false when nothing is provided', () => {
    expect(validator()).to.be.false
  })

  it('returns true for valid mobile numbers', () => {
    expect(validator('0701234567')).to.be.true
    expect(validator('0721234567')).to.be.true
    expect(validator('0731234567')).to.be.true
    expect(validator('0761234567')).to.be.true
    expect(validator('0791234567')).to.be.true
    expect(validator('070-123 45 67')).to.be.true
  })

  it('returns false for invalid mobile numbers', () => {
    expect(validator('0711234567')).to.be.false
    expect(validator('070123456')).to.be.false
    expect(validator('071-123 45 67')).to.be.false
  })

  it('returns correct for 2 digit area codes', () => {
    expect(validator('081234567')).to.be.true
    expect(validator('08123456')).to.be.true
    expect(validator('08-123 45 67')).to.be.true
    expect(validator('08-12 34 56')).to.be.true

    expect(validator('0812345678')).to.be.false
    expect(validator('0812345')).to.be.false
    expect(validator('08-123 67')).to.be.false
    expect(validator('08-12 34 5611')).to.be.false
  })

  it('returns correct for 3 digit area codes', () => {
    expect(validator('03112345')).to.be.true
    expect(validator('031446572')).to.be.true
    expect(validator('4631626262')).to.be.true
    expect(validator('031626262')).to.be.true
    expect(validator('46311234567')).to.be.true
    expect(validator('0311234567')).to.be.true

    expect(validator('0104465721')).to.be.false
  })

  it('returns correct for 4 digit area codes', () => {
    expect(validator('050012345')).to.be.true
    expect(validator('46304123456')).to.be.true
    expect(validator('0304123456')).to.be.true
    expect(validator('46500123456')).to.be.true
    expect(validator('0500123456')).to.be.true
  })

  it('returns false for any other case', () => {
    expect(validator('050012123456')).to.be.false
  })
})
