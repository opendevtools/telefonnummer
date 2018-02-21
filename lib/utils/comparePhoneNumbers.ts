import normalize from './normalize'

const phoneNumbersAreEqual = (first: string, second: string) => {
  return normalize(first) === normalize(second)
}

export default phoneNumbersAreEqual
