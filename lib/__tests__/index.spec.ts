import { areaCode, numberingArea, parse, validator } from '../index'

describe('exports', () => {
  it('should work as advertised', () => {
    const parserResult = parse('0701234567')
    const areaCodeResult = areaCode('Göteborg')
    const numberingAreaResult = numberingArea('08')
    const validatorResult = validator('0701234567')

    expect(parserResult).toEqual('070-123 45 67')
    expect(areaCodeResult).toEqual('031')
    expect(numberingAreaResult).toEqual('Stockholm')
    expect(validatorResult).toBe(true)
  })
})
