module.exports = function (list) {
    
    if (list.data == null || list.data == undefined) {
        list.data = 0
    }
    else {
        
        let current = list
        while (current != null) {
            console.log(current.data)
            current = current.next
        }
        return 
    }
}