const { expect } = require('chai')
const numberingArea = require('../lib/numberingArea')

describe('#numberingArea', () => {
  it('returns empty string if nothing is provided', () => {
    expect(numberingArea()).to.eql('')
  })

  it('returns empty string if nothing is found', () => {
    expect(numberingArea('1234')).to.eql('')
  })

  it('returns a numbering area for a given area code', () => {
    expect(numberingArea('08')).to.eql('Stockholm')
  })

  it('returns numbering area for a more complex area', () => {
    expect(numberingArea('0142')).to.eql('Mjölby-Skänninge-Boxholm')
  })

  it('returns correctly when provided a number', () => {
    expect(numberingArea(8)).to.eql('Stockholm')
    expect(numberingArea(142)).to.eql('Mjölby-Skänninge-Boxholm')
  })

  it('if provided a real phonenumber finds the area', () => {
    expect(numberingArea('081234567')).to.eql('Stockholm')
    expect(numberingArea('031124567')).to.eql('Göteborg')
    expect(numberingArea('0977-123 45')).to.eql('Korpilombolo')
  })

  it('does not use long number if not a parseable number', () => {
    expect(numberingArea('08123456712312')).to.eql('')
  })
})
