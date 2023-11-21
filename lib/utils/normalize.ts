export const normalize = (phoneNumber: string): string => {
  const normalizedNumber = phoneNumber
    .toString()
    .replace('(0)', '')
    .replace(/\D+/gi, '')

  if (normalizedNumber.substring(0, 4) === '0046') {
    return `0${normalizedNumber.substring(4)}`
  } else if (normalizedNumber.substring(0, 3) === '460') {
    return `0${normalizedNumber.substring(3)}`
  } else if (normalizedNumber.substring(0, 2) === '46') {
    return `0${normalizedNumber.substring(2)}`
  }

  return normalizedNumber
}
