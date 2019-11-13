module.exports = function my_to_upper_case(){
    let inputStr = this
    var strResult = ""
    for(i = 0; i < inputStr.length; i++) {
     strResult += String.fromCharCode(inputStr.charCodeAt(i) & 223)
    }
    return strResult
 }