import areaCode from '../areaCode'

describe('#areaCode', () => {
  it('returns empty string if nothing is provided', () => {
    expect(areaCode()).toEqual('')
  })

  it('returns empty string if nothing is found', () => {
    expect(areaCode('nonExistant')).toEqual('')
  })

  it('returns area code for area', () => {
    expect(areaCode('Stockholm')).toEqual('08')
  })

  it('returns area code for a more complex area', () => {
    expect(areaCode('Mjölby')).toEqual('0142')
  })
})
