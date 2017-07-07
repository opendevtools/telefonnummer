const { expect } = require('chai')
const phoneNumberParser = require('../lib/parser')

describe('#phoneNumberParser', () => {
  it('handles null values', () => {
    expect(phoneNumberParser(null)).to.eql('')
    expect(phoneNumberParser(undefined)).to.eql('')
  })

  it('parses voicemail', () => {
    expect(phoneNumberParser('46888')).to.eql('Röstbrevlåda')
    expect(phoneNumberParser('46888')).to.eql('Röstbrevlåda')
    expect(phoneNumberParser('46333')).to.eql('Röstbrevlåda')
    expect(phoneNumberParser('46147')).to.eql('Röstbrevlåda')
    expect(phoneNumberParser('888')).to.eql('Röstbrevlåda')
    expect(phoneNumberParser('333')).to.eql('Röstbrevlåda')
    expect(phoneNumberParser('222')).to.eql('Röstbrevlåda')
    expect(phoneNumberParser('147')).to.eql('Röstbrevlåda')
  })

  it('handles non strings', () => {
    expect(phoneNumberParser(46721834008)).to.eql('072-183 40 08')
  })

  it('parses normal mobile numbers', () => {
    expect(phoneNumberParser('46721834008')).to.eql('072-183 40 08')
    expect(phoneNumberParser('0721834008')).to.eql('072-183 40 08')
    expect(phoneNumberParser('0701234567')).to.eql('070-123 45 67')
  })

  it('parses landline numbers with 2 number area codes', () => {
    expect(phoneNumberParser('4687391701')).to.eql('08-739 17 01')
    expect(phoneNumberParser('087391701')).to.eql('08-739 17 01')
    expect(phoneNumberParser('468123456')).to.eql('08-12 34 56')
    expect(phoneNumberParser('08123456')).to.eql('08-12 34 56')
  })

  it('parses landline numbers with 2 digits area codes and 8 number chars', () => {
    expect(phoneNumberParser('46812345678')).to.eql('08-123 456 78')
  })

  it('parses landline number with 3 number area codes', () => {
    expect(phoneNumberParser('03112345')).to.eql('031-123 45')
    expect(phoneNumberParser('031446572')).to.eql('031-44 65 72')
    expect(phoneNumberParser('4631626262')).to.eql('031-62 62 62')
    expect(phoneNumberParser('031626262')).to.eql('031-62 62 62')
    expect(phoneNumberParser('46311234567')).to.eql('031-123 45 67')
    expect(phoneNumberParser('0311234567')).to.eql('031-123 45 67')
  })

  it('parses landline number with 4 number area codes', () => {
    expect(phoneNumberParser('050012345')).to.eql('0500-123 45')
    expect(phoneNumberParser('46304123456')).to.eql('0304-12 34 56')
    expect(phoneNumberParser('0304123456')).to.eql('0304-12 34 56')
    expect(phoneNumberParser('46500123456')).to.eql('0500-12 34 56')
    expect(phoneNumberParser('0500123456')).to.eql('0500-12 34 56')
  })

  it('parses numbers with +46', () => {
    expect(phoneNumberParser('+46701234567')).to.eql('070-123 45 67')
  })

  it('parses numbers with complex internationalization', () => {
    expect(phoneNumberParser('+46 (0) 701234567')).to.eql('070-123 45 67')
  })

  it('can parse with custom separator', () => {
    expect(phoneNumberParser('031446572', ' <> ')).to.eql('031 <> 44 65 72')
    expect(phoneNumberParser('0701234567', ' ')).to.eql('070 123 45 67')
    expect(phoneNumberParser('0701234567', ':')).to.eql('070:123 45 67')
    expect(phoneNumberParser('050012345', ' ')).to.eql('0500 123 45')
  })
})
