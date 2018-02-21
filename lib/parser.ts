import areaCodeDigitCount from './utils/areaCodeDigitCount'
import makeRegex from './utils/makeRegex'
import normalize from './utils/normalize'
import numberReplace from './utils/numberReplace'

const phoneNumberParser = (
  phoneNumber: string,
  separator: string = '-',
): string => {
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
