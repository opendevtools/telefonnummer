import * as NumberingArea from './numberingArea'
import * as Parser from './parser'
import * as Riktnummer from './riktnummer'
import * as Compare from './utils/comparePhoneNumbers'
import * as Normalize from './utils/normalize'
import * as Validator from './validator'

export const areEqual = Compare.phoneNumbersAreEqual
export const areaCode = Riktnummer.findMatchingAreaName
export const normalize = Normalize.normalize
export const numberingArea = NumberingArea.numberingArea
export const riktnummer = Riktnummer.RIKTNUMMER
export const validator = Validator.validator
export const parse = Parser.phoneNumberParser

export default {
  areEqual: Compare.phoneNumbersAreEqual,
  areaCode: Riktnummer.findMatchingAreaName,
  normalize: Normalize.normalize,
  numberingArea: NumberingArea.numberingArea,
  parse: Parser.phoneNumberParser,
  riktnummer: Riktnummer.RIKTNUMMER,
  validator: Validator.validator,
}
