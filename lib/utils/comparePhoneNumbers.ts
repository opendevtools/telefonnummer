import { normalize } from './normalize'

export const phoneNumbersAreEqual = (first: string, second: string) => {
  return normalize(first) === normalize(second)
}
