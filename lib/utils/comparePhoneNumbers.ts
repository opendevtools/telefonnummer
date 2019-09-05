import { normalize } from './normalize'

export const phoneNumbersAreEqual = (
  first: string,
  second: string
): boolean => {
  return normalize(first) === normalize(second)
}
