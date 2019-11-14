module.exports = function (list) {

    if (list.data == null || list.data == undefined) {
        list.data = 0
    }
    else {
        let i = 0
        let current = list
        while (current != null) {
            current = current.next
            i++
        }
        return i
    }

}