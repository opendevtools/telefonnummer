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

module.exports = areaCodeDigitCount
