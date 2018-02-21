import numberingAreaOriginal from './numberingArea'
import parseOriginal from './parser'
import riktnummerOriginal, { findMatchingAreaName } from './riktnummer'
import phoneNumbersAreEqual from './utils/comparePhoneNumbers'
import normalizeOriginal from './utils/normalize'
import validatorOriginal from './validator'

export const areEqual = phoneNumbersAreEqual
export const areaCode = findMatchingAreaName
export const normalize = normalizeOriginal
export const numberingArea = numberingAreaOriginal
export const parse = parseOriginal
export const riktnummer = riktnummerOriginal
export const validator = validatorOriginal

export default {
  areEqual: phoneNumbersAreEqual,
  areaCode: findMatchingAreaName,
  normalize: normalizeOriginal,
  numberingArea: numberingAreaOriginal,
  parse: parseOriginal,
  riktnummer: riktnummerOriginal,
  validator: validatorOriginal,
}
