/**
 * Normalize phone number by removing everything
 * that is not a number
 * @param {string} number
 */
function normalize(number) {
  number = number.toString().replace('(0)', '').replace(/\D+/gi, '')
  return number.substr(0, 2) === '46' ? `0${number.substr(2)}` : number
}

module.exports = normalize
