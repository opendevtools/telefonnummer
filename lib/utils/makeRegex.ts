export const makeRegex =
  (areaCode: number) =>
  (firstDigits: number) =>
  (type = 'long'): RegExp => {
    switch (type) {
      case 'short':
        return new RegExp(`^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{2})$`)
      case 'tenDigit':
        return new RegExp(
          `^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{3})(\\d{2})$`,
        )
      default:
        return new RegExp(
          `^(\\d{${areaCode}})(\\d{${firstDigits}})(\\d{2})(\\d{2})$`,
        )
    }
  }
