function curry(fn) {
  var arity = fn.length
  return (function resolver() {
    var memory = Array.prototype.slice.call(arguments)
    return function() {
      var local = memory.slice(), next
      Array.prototype.push.apply(local, arguments)
      next = local.length >= arity ? fn : resolver
      return next.apply(null, local)
    }
  })()
}

/**
 * Construct regex 
 */
const makeRegex = curry((areaCode, firstDigits, type = 'long') => {
  switch (type) {
    case 'short':
      return new RegExp(`^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{2})$`)
    case 'tenDigit':
      return new RegExp(
        `^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{3})(\\d{2})$`
      )
    default:
      return new RegExp(
        `^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{2})(\\d{2})$`
      )
  }
})

/**
 * Number replacer
 */
const numberReplace = curry((number, numberParse, regexReplace) =>
  number.replace(regexReplace, numberParse)
)

/**
 * Normalize phone number by removing everything
 * that is not a number
 * @param {string} number
 */
const normalize = number => {
  number = number.toString().replace('(0)', '').replace(/\D+/gi, '')
  return number.substr(0, 2) === '46' ? `0${number.substr(2)}` : number
}

/**
 * Retrieve number of digits in area code
 * @param {string} number
 */
function areaCodeDigitCount(number) {
  if (/^08/.test(number)) {
    return 2
  } else if (
    /^0(1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|7[0235-9]|9[09])/.test(
      number
    )
  ) {
    return 3
  }

  return 4
}

/**
 * Parse phone numbers
 * @param {string} number - Phone number
 * @return {string} - Parsed phone number
 *
 * i.e. phoneNumberParser(0701234567) -> 070-123 45 67
 */
function phoneNumberParser(number, separator = '-') {
  if (!number) {
    return ''
  }

  const normalized = normalize(number)
  const areaCode = areaCodeDigitCount(normalized)
  const firstDigits = makeRegex(areaCode)
  const replaceNormalized = numberReplace(normalized)
  const replacer = replaceNormalized(`$1${separator}$2 $3 $4`)
  const shortNumberParse = replaceNormalized(
    `$1${separator}$2 $3`,
    firstDigits(3, 'short')
  )
  const numberLength = normalized.length

  const voicemail = ['222', '333', '888', '0222', '0333', '0888']

  // Voicemail
  if (normalized.length <= 4 && voicemail.includes(normalized)) {
    return 'Röstbrevlåda'
  }

  switch (areaCode) {
    case 2:
      // Mobile phone numbers and Stockholm
      const type = numberLength === 10 ? 'tenDigit' : 'long'
      return replacer(firstDigits(numberLength === 8 ? 2 : 3, type))
    case 3:
      // Three digit area codes
      return numberLength === 8
        ? shortNumberParse
        : replacer(firstDigits(numberLength === 9 ? 2 : 3))
    case 4:
      // Four digit area codes
      return numberLength === 9 ? shortNumberParse : replacer(firstDigits(2))
  }
}
module.exports = phoneNumberParser
