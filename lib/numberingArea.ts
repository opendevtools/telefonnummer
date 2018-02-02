import parser from './parser'
import { findMatchingAreaCode } from './riktnummer'

const numberingArea = (phoneNumber: string | number): string => {
  let phoneNumberString = phoneNumber.toString()

  if (phoneNumberString.length > 4) {
    const parsed = parser(phoneNumberString).match(/^\d+/)

    if (parsed.length && parsed[0].length <= 4) {
      phoneNumberString = parsed[0]
    }
  }

  if (phoneNumberString.charAt(0) !== '0') {
    phoneNumberString = `0${phoneNumberString}`
  }

  return findMatchingAreaCode(phoneNumberString)
}

export default numberingArea
