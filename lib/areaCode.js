const riktnummer = require('./riktnummer')

function areaCode(area) {
  if (!area) {
    return ''
  }

  const areaCode = riktnummer.filter(r => {
    return r.indexOf(area) > -1
  })

  if (areaCode.length) {
    return areaCode[0].match(/\d+/g)[0].trim()
  }

  return ''
}

module.exports = areaCode
