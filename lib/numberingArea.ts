import { phoneNumberParser } from './parser'
import { findMatchingAreaCode } from './riktnummer'

export const numberingArea = (phoneNumber: string | number): string => {
  let phoneNumberString = phoneNumber.toString()

  if (phoneNumberString.length > 4) {
    const parsed =
      phoneNumberParser(phoneNumberString).match(/^(?<areaCode>\d+)/)

    if (parsed?.groups?.areaCode) {
      phoneNumberString = parsed.groups.areaCode
    }
  }

  if (phoneNumberString.charAt(0) !== '0') {
    phoneNumberString = `0${phoneNumberString}`
  }

  return findMatchingAreaCode(phoneNumberString)
}
