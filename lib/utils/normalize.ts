export const normalize = (phoneNumber: string): string => {
  const normalizedNumber = phoneNumber
    .toString()
    .replace('(0)', '')
    .replace(/\D+/gi, '')

  if (normalizedNumber.substr(0, 4) === '0046') {
    return `0${normalizedNumber.substr(4)}`
  } else if (normalizedNumber.substr(0, 3) === '460') {
    return `0${normalizedNumber.substr(3)}`
  } else if (normalizedNumber.substr(0, 2) === '46') {
    return `0${normalizedNumber.substr(2)}`
  }

  return normalizedNumber
}
