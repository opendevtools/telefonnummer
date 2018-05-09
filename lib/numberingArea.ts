import { phoneNumberParser } from './parser'
import { findMatchingAreaCode } from './riktnummer'

export const numberingArea = (phoneNumber: string | number): string => {
  let phoneNumberString = phoneNumber.toString()

  if (phoneNumberString.length > 4) {
    const parsed = phoneNumberParser(phoneNumberString).match(/^\d+/)

    if (parsed && parsed.length && parsed[0].length <= 4) {
      phoneNumberString = parsed[0]
    }
  }

  if (phoneNumberString.charAt(0) !== '0') {
    phoneNumberString = `0${phoneNumberString}`
  }

  return findMatchingAreaCode(phoneNumberString)
}
