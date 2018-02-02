import makeRegex from '../makeRegex'

describe('#makeRegex', () => {
  it('handles undefined type (long implicitly)', () => {
    expect(makeRegex(2)(3)()).toEqual(/^(\d{2})(\d{3})(\d{2})(\d{2})$/)
  })

  it('handles type short', () => {
    expect(makeRegex(2)(3)('short')).toEqual(/^(\d{2})(\d{3})(\d{2})$/)
  })

  it('handles type tenDigit', () => {
    expect(makeRegex(3)(3)('tenDigit')).toEqual(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    )
  })

  it('handles type long explicitly', () => {
    expect(makeRegex(3)(3)('long')).toEqual(/^(\d{3})(\d{3})(\d{2})(\d{2})$/)
  })
})
