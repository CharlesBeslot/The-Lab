var requireArgs = require('minimist')(process.argv.slice(2))

let my_to_upper_case = require('./my_to_upper_case')
let my_to_lower_case = require('./my_to_lower_case')
let my_concat = require('./my_concat')

resEx1  = requireArgs._[0]
resEx2  = requireArgs._[1]
resEx3  = requireArgs._[2]

String.prototype.my_to_upper_case = my_to_upper_case
String.prototype.my_to_lower_case = my_to_lower_case
String.prototype.my_concat = my_concat

console.log(resEx1.my_to_upper_case())
console.log(resEx2.my_to_lower_case())
console.log(resEx3.my_concat("bonsoir","je","suis","nul"))