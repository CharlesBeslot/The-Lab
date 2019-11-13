String.prototype.my_char_at = function(index){
    
    let myString = this.valueOf()
    var letterAt = ""
    for(var i=0; i < index+1 ; i++){
        letterAt = myString[i]
    }
    return letterAt
 }