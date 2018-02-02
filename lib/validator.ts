import riktnummer from './riktnummer'
import areaCodeDigitCount from './utils/areaCodeDigitCount'
import normalize from './utils/normalize'

const findNumbersByLength = (digits: number, trailingDigits: number) => {
  const areaCodes = riktnummer
    .map(phoneNumber => parseInt(phoneNumber, 10))
    .map(phoneNumber => `0${phoneNumber.toString()}`)
    .filter(phoneNumber => phoneNumber.length === digits)
    .join('|')

  return new RegExp(`^(${areaCodes})\\d{5,${trailingDigits}}$`)
}

const validator = (phoneNumber: string): boolean => {
  const normalized = normalize(phoneNumber)
  const areaCodeDigits = areaCodeDigitCount(normalized)

  if (normalized.substr(0, 2) === '07') {
    return /^07(0|2|3|6|9)\d{7}$/.test(normalized)
  }

  switch (areaCodeDigits) {
    case 2:
      return /^08\d{6,7}$/.test(normalized)
    case 3:
      return findNumbersByLength(3, 7).test(normalized)
    default:
      return findNumbersByLength(4, 6).test(normalized)
  }
}

export default validator
