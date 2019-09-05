import { ParserOptions } from '../parser'
import { normalize } from './normalize'

export const numberReplace = (phoneNumber: string) => (numberParse: string) => (
  regexReplace: RegExp,
  options: ParserOptions = {}
): string => {
  const parsedNumber = phoneNumber.replace(regexReplace, numberParse)

  if (options.internationalized) {
    return `+46${normalize(parsedNumber).substr(1)}`
  }

  return parsedNumber
}
