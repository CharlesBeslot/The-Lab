const simple_list = require('./simple_list')

module.exports = function (list, newData) {

    let newList = new simple_list(newData)

    if (list.data == null || list.data == undefined) {
        list.data = 0
    }
    else { 
        let current = list
        while (current.next) { 
          current = current.next
        } 
        current.next = newList
        return newList
    }

}
    