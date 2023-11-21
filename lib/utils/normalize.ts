export const normalize = (phoneNumber: string): string => {
  const normalizedNumber = phoneNumber
    .toString()
    .replace('(0)', '')
    .replace(/\D+/gi, '')

  switch (true) {
    case normalizedNumber.startsWith('0046'):
      return `0${normalizedNumber.substring(4)}`
    case normalizedNumber.startsWith('460'):
      return `0${normalizedNumber.substring(3)}`
    case normalizedNumber.startsWith('46'):
      return `0${normalizedNumber.substring(2)}`
    default:
      return normalizedNumber
  }
}
