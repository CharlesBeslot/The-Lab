const simple_list = require('./simple_list')

module.exports = function (list, newData) {
    
    if (list.data == null || list.data == undefined) {
        list.data = 0
    }
    else { 
        let newList = new simple_list(newData)
        newList.next = list 
        return newList
    }

}
    