import areaCodeDigitCount from './utils/areaCodeDigitCount'
import normalize from './utils/normalize'

/**
 * Construct regex
 */
const makeRegex = areaCode => firstDigits => type => {
  const regexType = type || 'long'

  switch (regexType) {
    case 'short':
      return new RegExp(`^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{2})$`)
    case 'tenDigit':
      return new RegExp(
        `^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{3})(\\d{2})$`,
      )
    default:
      return new RegExp(
        `^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{2})(\\d{2})$`,
      )
  }
}

/**
 * Number replacer
 */
const numberReplace = phoneNumber => numberParse => regexReplace => {
  return phoneNumber.replace(regexReplace, numberParse)
}

/**
 * Parse phone numbers
 * @param {string} number - Phone number
 * @return {string} - Parsed phone number
 *
 * i.e. phoneNumberParser(0701234567) -> 070-123 45 67
 */
const phoneNumberParser = (phoneNumber, separator = '-') => {
  if (!phoneNumber) {
    return ''
  }

  const normalized = normalize(phoneNumber)
  const areaCode = areaCodeDigitCount(normalized)
  const firstDigits = makeRegex(areaCode)
  const replaceNormalized = numberReplace(normalized)
  const replacer = replaceNormalized(`$1${separator}$2 $3 $4`)
  const standardFormat = replaceNormalized(`$1${separator}$2 $3`)
  const shortNumberParse = standardFormat(firstDigits(3)('short'))
  const numberLength = normalized.length

  const voicemail: string[] = ['147', '222', '333', '888'].reduce(
    (p, c) => p.concat([c, '0' + c]),
    [],
  )

  // Voicemail
  if (numberLength <= 4 && voicemail.includes(normalized)) {
    return 'Röstbrevlåda'
  }

  switch (areaCode) {
    case 2:
      // Stockholm
      const type = numberLength === 10 ? 'tenDigit' : 'long'

      return replacer(firstDigits(numberLength === 8 ? 2 : 3)(type))
    case 3:
      // Mobile and three digit area codes
      return numberLength === 8
        ? shortNumberParse
        : replacer(firstDigits(numberLength === 9 ? 2 : 3)('long'))
    case 4:
      // Four digit area codes
      return numberLength === 9
        ? shortNumberParse
        : replacer(firstDigits(2)('long'))
  }
}

export default phoneNumberParser
