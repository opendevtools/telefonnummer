const normalize = (phoneNumber: string): string => {
  const normalizedNumber = phoneNumber
    .toString()
    .replace('(0)', '')
    .replace(/\D+/gi, '')

  return normalizedNumber.substr(0, 2) === '46'
    ? `0${normalizedNumber.substr(2)}`
    : normalizedNumber
}

export default normalize
