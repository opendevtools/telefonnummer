import { areaCodeDigitCount } from '../areaCodeDigitCount'

const numberHelper = (numbers: string[], expected: number): void => {
  numbers.forEach((phoneNumber) => {
    expect(areaCodeDigitCount(phoneNumber)).toEqual(expected)
  })
}

describe('utils/areaCodeDigitCount', () => {
  it('should return two for 08', () => {
    expect(areaCodeDigitCount('081234567')).toEqual(2)
  })

  it('should return three for mobile numbers', () => {
    const numbers = [
      '0701234567',
      '0721234567',
      '0731234567',
      '0761234567',
      '0791234567',
    ]

    numberHelper(numbers, 3)
  })

  it('should return three digit landlines', () => {
    const numbers = [
      '0101234567',
      '031123456',
      '026123475',
      '044067689',
      '0901324687',
    ]

    numberHelper(numbers, 3)
  })

  it('should return four for anything else', () => {
    expect(areaCodeDigitCount('0500123456')).toEqual(4)
  })
})
