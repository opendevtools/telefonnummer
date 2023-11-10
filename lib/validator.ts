import { RIKTNUMMER } from './riktnummer'
import { areaCodeDigitCount } from './utils/areaCodeDigitCount'
import { normalize } from './utils/normalize'

export interface ValidatorOptions {
  onlyMobile?: boolean
}

const findNumbersByLength = (
  digits: number,
  trailingDigits: number,
): RegExp => {
  const areaCodes = RIKTNUMMER.map((phoneNumber) => parseInt(phoneNumber, 10))
    .map((phoneNumber) => `0${phoneNumber.toString()}`)
    .filter((phoneNumber) => phoneNumber.length === digits)
    .join('|')

  return new RegExp(`^(${areaCodes})\\d{5,${trailingDigits}}$`)
}

export const validator = (
  phoneNumber: string,
  options: ValidatorOptions = { onlyMobile: false },
): boolean => {
  if (/[a-z]/gi.test(phoneNumber)) {
    return false
  }

  const normalized = normalize(phoneNumber)
  const areaCodeDigits = areaCodeDigitCount(normalized)

  if (normalized.substr(0, 2) === '07') {
    return /^07(0|2|3|6|9)\d{7}$/.test(normalized)
  }

  if (options.onlyMobile) {
    return false
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
