import { areaCodeDigitCount } from './utils/areaCodeDigitCount'
import { makeRegex } from './utils/makeRegex'
import { normalize } from './utils/normalize'
import { numberReplace } from './utils/numberReplace'

export interface ParserOptions {
  internationalized?: boolean
  separator?: string
}

export const phoneNumberParser = (
  phoneNumber: string,
  options: ParserOptions = { internationalized: false, separator: '-' }
): string => {
  const { separator } = options

  if (!phoneNumber) {
    return ''
  }

  const normalized = normalize(phoneNumber)
  const areaCode = areaCodeDigitCount(normalized)
  const firstDigits = makeRegex(areaCode)
  const replaceNormalized = numberReplace(normalized)
  const replacer = replaceNormalized(`$1${separator}$2 $3 $4`)
  const standardFormat = replaceNormalized(`$1${separator}$2 $3`)
  const shortNumberParse = standardFormat(firstDigits(3)('short'), options)
  const numberLength = normalized.length

  const voicemail = ['147', '222', '333', '888'].reduce<string[]>(
    (acc, curr) => [...acc, curr, `0${curr}`],
    []
  )

  // Voicemail
  if (numberLength <= 4 && voicemail.includes(normalized)) {
    return 'Röstbrevlåda'
  }

  switch (areaCode) {
    case 2:
      // Stockholm
      const type = numberLength === 10 ? 'tenDigit' : 'long'

      return replacer(firstDigits(numberLength === 8 ? 2 : 3)(type), options)
    case 3:
      // Mobile and three digit area codes
      return numberLength === 8
        ? shortNumberParse
        : replacer(firstDigits(numberLength === 9 ? 2 : 3)('long'), options)
    case 4:
      // Four digit area codes
      return numberLength === 9
        ? shortNumberParse
        : replacer(firstDigits(2)('long'), options)
  }
}
