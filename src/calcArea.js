var rect = function(width, length) {
    var area = width * length
    return area
}

var tri = function(width, length) {
    var area = rect(width, length) / 2
    return area
}

var circ = function(width, length) {
    var area = width * length
    return area
}

var toExport = {
    rectangle : rect,
    triangle : tri,
    circle: circ
}




module.exports = toExport