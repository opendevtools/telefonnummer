const areaCode = require('./areaCode')
const numberingArea = require('./numberingArea')
const parse = require('./parser')
const riktnummer = require('./riktnummer')

module.exports = parse

module.exports.areaCode = areaCode
module.exports.areaCodes = riktnummer
module.exports.numberingArea = numberingArea
module.exports.parse = parse
