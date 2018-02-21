import phoneNumbersAreEqual from '../comparePhoneNumbers'

describe('#phoneNumbersAreEqual', () => {
  it('returns true if phone numbers are equal', () => {
    expect(phoneNumbersAreEqual('0701234567', '0701234567')).toBe(true)
    expect(phoneNumbersAreEqual('070fasdf1234567', '070fasdf1234567')).toBe(
      true,
    )
    expect(phoneNumbersAreEqual('0701234567', '070-123 45 67')).toBe(true)
    expect(phoneNumbersAreEqual('070-123 45 67', '0701234567')).toBe(true)
  })

  it('returns false if phone numbers are not equal', () => {
    expect(phoneNumbersAreEqual('', '0701234568')).toBe(false)
    expect(phoneNumbersAreEqual('0701234567', '0701234568')).toBe(false)
    expect(phoneNumbersAreEqual('0701234567', '070-123 45 68')).toBe(false)
    expect(phoneNumbersAreEqual('070-123 45 67', '0701234568')).toBe(false)
    expect(phoneNumbersAreEqual('070.12x34esa567', '0701234568')).toBe(false)
  })
})
