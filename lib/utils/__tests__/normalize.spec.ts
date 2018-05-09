import { normalize } from '../normalize'

describe('utils/normalize', () => {
  it('should handle numbers with +46', () => {
    expect(normalize('+46701234567')).toEqual('0701234567')
  })

  it('should handle numbers with optional zero (0)', () => {
    expect(normalize('+46(0)701234567')).toEqual('0701234567')
  })

  it('should handle unwanted characters', () => {
    expect(normalize('abcde070-123.45*67 fghi')).toEqual('0701234567')
  })

  it('should handle already formatted numbers', () => {
    expect(normalize('0701234567')).toEqual('0701234567')
    expect(normalize('0701234567')).toEqual('0701234567')
  })
})
