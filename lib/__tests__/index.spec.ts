import { expect, test } from 'bun:test'
import telefonnummer, {
  areaCode,
  areEqual,
  normalize,
  numberingArea,
  parse,
  validator,
} from '../index'

test('should handle default export', () => {
  const parserResult = telefonnummer.parse('0701234567')
  const areaCodeResult = telefonnummer.areaCode('Göteborg')
  const numberingAreaResult = telefonnummer.numberingArea('08')
  const validatorResult = telefonnummer.validator('0701234567')
  const normalizeResult = telefonnummer.normalize('070-fsd12sdfs3gsdgsdg4567')
  const areEqualResult = telefonnummer.areEqual('070-1234567', '0701234567')

  expect(parserResult).toEqual('070-123 45 67')
  expect(areaCodeResult).toEqual('031')
  expect(numberingAreaResult).toEqual('Stockholm')
  expect(validatorResult).toBe(true)
  expect(normalizeResult).toEqual('0701234567')
  expect(areEqualResult).toBe(true)
})

test('should handle named exports', () => {
  const parserResult = parse('0701234567')
  const areaCodeResult = areaCode('Göteborg')
  const numberingAreaResult = numberingArea('08')
  const validatorResult = validator('0701234567')
  const normalizeResult = normalize('070-fsd12sdfs3gsdgsdg4567')
  const areEqualResult = areEqual('070-1234567', '0701234567')

  expect(parserResult).toEqual('070-123 45 67')
  expect(areaCodeResult).toEqual('031')
  expect(numberingAreaResult).toEqual('Stockholm')
  expect(validatorResult).toBe(true)
  expect(normalizeResult).toEqual('0701234567')
  expect(areEqualResult).toBe(true)
})
