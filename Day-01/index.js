require('./my_to_upper_case')
require('./my_to_lower_case')
require('./my_concat')
require('./my_char_at')
require('./my_includes')
require('./is_empty')

console.log("hello".my_to_upper_case())
console.log("HELLO".my_to_lower_case())
console.log("Hello".my_concat("I'm","so","bad"))
console.log("I'm so bad".my_char_at(5))
console.log("I'm so bad".my_includes("bad",1))
console.log("".is_empty())