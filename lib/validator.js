const areaCodeDigitCount = require('./utils/areaCodeDigitCount')
const normalize = require('./utils/normalize')
const riktnummer = require('./riktnummer')

function findNumbersByLength(digits, trailingDigits) {
  const areaCodes = riktnummer
    .map(number => parseInt(number, 10))
    .map(number => `0${number.toString()}`)
    .filter(number => number.length === digits)
    .join('|')

  return new RegExp(`^(${areaCodes})\\d{5,${trailingDigits}}$`)
}

function validator(phoneNumber) {
  if (!phoneNumber) {
    return false
  }

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

module.exports = validator
