import telefonnummer, { areaCode, numberingArea, parse, validator } from '../index'

describe('exports', () => {
  it('should handle default export', () => {
    const parserResult = telefonnummer.parse('0701234567')
    const areaCodeResult = telefonnummer.areaCode('Göteborg')
    const numberingAreaResult = telefonnummer.numberingArea('08')
    const validatorResult = telefonnummer.validator('0701234567')

    expect(parserResult).toEqual('070-123 45 67')
    expect(areaCodeResult).toEqual('031')
    expect(numberingAreaResult).toEqual('Stockholm')
    expect(validatorResult).toBe(true)
  })

  it('should handle named exports', () => {
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
