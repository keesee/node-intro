var area = require('./calcArea')   // object
var volume = require('./calcVolume') // func

// console.log(area)
// console.log(volume)

// this is calc area amd calc volume combined

var toExport = {
    areaRectangle: area.rectangle,
    areaCircle: area.circle,
    areTriangle: area.triangle,
    volumeCube: volume
}

module.exports = toExport
