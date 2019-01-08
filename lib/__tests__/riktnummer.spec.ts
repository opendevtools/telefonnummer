import * as riktnummer from '../riktnummer'

describe('riktnummer', () => {
  describe('#findMatchingAreaCode', () => {
    it('should find an area code by number', () => {
      expect(riktnummer.findMatchingAreaCode('08')).toEqual('Stockholm')
      expect(riktnummer.findMatchingAreaCode('0977')).toEqual('Korpilombolo')
    })
  })

  describe('#findMatchingAreaName', () => {
    it('should find an area code by number', () => {
      expect(riktnummer.findMatchingAreaName('stockholm')).toEqual('08')
      expect(riktnummer.findMatchingAreaName('Stockholm')).toEqual('08')
      expect(riktnummer.findMatchingAreaName('korpilombolo')).toEqual('0977')
      expect(riktnummer.findMatchingAreaName('Korpilombolo')).toEqual('0977')
      expect(riktnummer.findMatchingAreaName('invalid_swedish_city')).toEqual(
        '',
      )
    })
  })
})
