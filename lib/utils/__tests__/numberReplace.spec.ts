import { numberReplace } from '../numberReplace'

describe('#numberReplace', () => {
  it('handles undefined type (long implicitly)', () => {
    expect(
      numberReplace('0701234567')(`$1-$2 $3 $4`)(
        /^(\d{3})(\d{3})(\d{2})(\d{2})$/,
      ),
    ).toEqual('070-123 45 67')
  })
})
