const numberReplace = (phoneNumber: string) => (numberParse: string) => (
  regexReplace: RegExp,
): string => {
  return phoneNumber.replace(regexReplace, numberParse)
}

export default numberReplace
