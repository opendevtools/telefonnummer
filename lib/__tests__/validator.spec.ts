import cases from 'jest-in-case'
import { validator } from '../validator'

cases(
  'errors for non-numerical inputs',
  ({ phoneNumber }) => {
    expect(validator(phoneNumber)).toBe(false)
  },
  {
    '070-abc de fg': {
      phoneNumber: '070-abc de fg',
    },
    '0701ggas234asdf567d': {
      phoneNumber: '0701ggas234asdf567d',
    },
    '070abcdefb': {
      phoneNumber: '070abcdefb',
    },
    abcdefg: {
      phoneNumber: 'abcdefg',
    },
  }
)

cases(
  'checks validity of mobile phone numbers',
  ({ phoneNumber, valid }) => {
    expect(validator(phoneNumber)).toBe(valid)
  },
  {
    '+46791234567': {
      phoneNumber: '+46791234567',
      valid: true,
    },
    '070-123 45 67': {
      phoneNumber: '070-123 45 67',
      valid: true,
    },
    '070123456': {
      phoneNumber: '070123456',
      valid: false,
    },
    '0701234567': {
      phoneNumber: '0701234567',
      valid: true,
    },
    '071-123 45 67': {
      phoneNumber: '071-123 45 67',
      valid: false,
    },
    '0711234567': {
      phoneNumber: '0711234567',
      valid: false,
    },
    '0721234567': {
      phoneNumber: '0721234567',
      valid: true,
    },
    '0731234567': {
      phoneNumber: '0731234567',
      valid: true,
    },
    '0761234567': {
      phoneNumber: '0761234567',
      valid: true,
    },
    '0791234567': {
      phoneNumber: '0791234567',
      valid: true,
    },
    'Only allow Swedish numbers': {
      phoneNumber: '+44791234567',
      valid: false,
    },
  }
)

cases(
  'returns correct for 2 digit area codes',
  ({ phoneNumber, valid }) => {
    expect(validator(phoneNumber)).toBe(valid)
  },
  {
    '+4681234567': {
      phoneNumber: '+4681234567',
      valid: true,
    },
    '004681234567': {
      phoneNumber: '004681234567',
      valid: true,
    },
    '08-12 34 56': {
      phoneNumber: '08-12 34 56',
      valid: true,
    },
    '08-12 34 5611': {
      phoneNumber: '08-12 34 5611',
      valid: false,
    },
    '08-123 45 67': {
      phoneNumber: '08-123 45 67',
      valid: true,
    },
    '08-123 67': {
      phoneNumber: '08-123 67',
      valid: false,
    },
    '0812345': {
      phoneNumber: '0812345',
      valid: false,
    },
    '08123456': {
      phoneNumber: '08123456',
      valid: true,
    },
    '081234567': {
      phoneNumber: '081234567',
      valid: true,
    },
    '0812345678': {
      phoneNumber: '0812345678',
      valid: false,
    },
    'Only allow Swedish numbers': {
      phoneNumber: '+4481234567',
      valid: false,
    },
  }
)

cases(
  'returns correct for 3 digit area codes',
  ({ phoneNumber, valid }) => {
    expect(validator(phoneNumber)).toBe(valid)
  },
  {
    '+4631626262': {
      phoneNumber: '+4631626262',
      valid: true,
    },
    '0104465721': {
      phoneNumber: '0104465721',
      valid: false,
    },
    '03112345': {
      phoneNumber: '03112345',
      valid: true,
    },
    '0311234567': {
      phoneNumber: '0311234567',
      valid: true,
    },
    '031446572': {
      phoneNumber: '031446572',
      valid: true,
    },
    '031626262': {
      phoneNumber: '031626262',
      valid: true,
    },
    46311234567: {
      phoneNumber: '46311234567',
      valid: true,
    },
    4631626262: {
      phoneNumber: '4631626262',
      valid: true,
    },
    'Only allow Swedish numbers': {
      phoneNumber: '+443112345',
      valid: false,
    },
  }
)

cases(
  'returns correct for 4 digit area codes',
  ({ phoneNumber, valid }) => {
    expect(validator(phoneNumber)).toBe(valid)
  },
  {
    '+46500123456': {
      phoneNumber: '+46500123456',
      valid: true,
    },
    '0304123456': {
      phoneNumber: '0304123456',
      valid: true,
    },
    '050012123456': {
      phoneNumber: '050012123456',
      valid: false,
    },
    '050012345': {
      phoneNumber: '050012345',
      valid: true,
    },
    '0500123456': {
      phoneNumber: '0500123456',
      valid: true,
    },
    46304123456: {
      phoneNumber: '46304123456',
      valid: true,
    },
    46500123456: {
      phoneNumber: '46500123456',
      valid: true,
    },
    'Only allow Swedish numbers': {
      phoneNumber: '+4450012345',
      valid: false,
    },
  }
)

cases(
  'checks validity of phone numbers, but only allow mobile numbers',
  ({ valid, phoneNumber }) => {
    expect(validator(phoneNumber, { onlyMobile: true })).toBe(valid)
  },
  {
    '031626262': {
      phoneNumber: '031626262',
      valid: false,
    },
    '0500123456': {
      phoneNumber: '0500123456',
      valid: false,
    },
    '070-123 45 67': {
      phoneNumber: '070-123 45 67',
      valid: true,
    },
    '070123456': {
      phoneNumber: '070123456',
      valid: false,
    },
    '0701234567': {
      phoneNumber: '0701234567',
      valid: true,
    },
    '071-123 45 67': {
      phoneNumber: '071-123 45 67',
      valid: false,
    },
    '0711234567': {
      phoneNumber: '0711234567',
      valid: false,
    },
    '0721234567': {
      phoneNumber: '0721234567',
      valid: true,
    },
    '0731234567': {
      phoneNumber: '0731234567',
      valid: true,
    },
    '0751234567': {
      phoneNumber: '0751234567',
      valid: false,
    },
    '0761234567': {
      phoneNumber: '0761234567',
      valid: true,
    },
    '0791234567': {
      phoneNumber: '0791234567',
      valid: true,
    },
    '081234567': {
      phoneNumber: '081234567',
      valid: false,
    },
  }
)
