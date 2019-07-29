var findArea = function(w,l) {
    var product = w*l
    return product
}

var testBoolean = false
var testArray = ['Jimmy', 387368, 36836]
var testString = 'string'
var testNumber = 3.14


var toExport = {
    testFunction: findArea,
    testBoolean: testBoolean,
    testArray: testArray,
    testString: testString,
    testNumber: testNumber
}

module.exports = testNumber