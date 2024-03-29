export const areaCodeDigitCount = (phoneNumber: string): 2 | 3 | 4 => {
  const validTwo = /^08/
  const validThree =
    /^0(1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|7[0235-9]|9[09])/

  if (validTwo.test(phoneNumber)) {
    return 2
  }

  if (validThree.test(phoneNumber)) {
    return 3
  }

  return 4
}
