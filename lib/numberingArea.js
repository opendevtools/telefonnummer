const riktnummer = require('./riktnummer')
const parser = require('./parser')

function numberingArea(number) {
  if (!number) {
    return ''
  }

  number = number.toString()

  if (number.length > 4) {
    const parsed = parser(number).match(/^\d+/)

    if (parsed.length && parsed[0].length <= 4) {
      number = parsed[0]
    }
  }

  if (number.charAt(0) !== '0') {
    number = `0${number}`
  }

  const area = riktnummer.filter(r => {
    return r.indexOf(number) > -1
  })

  if (area.length) {
    return area[0].match(/\D+/g)[0].trim()
  }

  return ''
}

module.exports = numberingArea
