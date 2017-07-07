const { expect } = require('chai')
const areaCode = require('../lib/areaCode')

describe('#areaCode', () => {
  it('returns empty string if nothing is provided', () => {
    expect(areaCode()).to.eql('')
  })

  it('returns empty string if nothing is found', () => {
    expect(areaCode('nonExistant')).to.eql('')
  })

  it('returns area code for area', () => {
    expect(areaCode('Stockholm')).to.eql('08')
  })

  it('returns area code for a more complex area', () => {
    expect(areaCode('Mjölby')).to.eql('0142')
  })
})
