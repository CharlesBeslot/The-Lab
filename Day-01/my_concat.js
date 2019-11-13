module.exports = function my_concat() {
    let inputStr = this
    var strResult = inputStr + " "
    for (var i = 0; i < arguments.length; i++) {
        strResult += arguments[i] + " "
    }
    return strResult
}