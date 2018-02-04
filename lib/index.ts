import numberingAreaOriginal from './numberingArea'
import parseOriginal from './parser'
import riktnummerOriginal, { findMatchingAreaName } from './riktnummer'
import validatorOriginal from './validator'

export const areaCode = findMatchingAreaName
export const riktnummer = riktnummerOriginal
export const numberingArea = numberingAreaOriginal
export const parse = parseOriginal
export const validator = validatorOriginal

export default {
  areaCode: findMatchingAreaName,
  numberingArea: numberingAreaOriginal,
  parse: parseOriginal,
  riktnummer: riktnummerOriginal,
  validator: validatorOriginal,
}
