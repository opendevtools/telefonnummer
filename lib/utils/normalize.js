/**
 * Normalize phone number by removing everything
 * that is not a number
 * @param {string} number
 */
function normalize(number) {
  const normalizedNumber = number
    .toString()
    .replace('(0)', '')
    .replace(/\D+/gi, '')

  return normalizedNumber.substr(0, 2) === '46'
    ? `0${normalizedNumber.substr(2)}`
    : normalizedNumber
}

module.exports = normalize
