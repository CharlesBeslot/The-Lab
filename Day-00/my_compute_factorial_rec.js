function my_compute_factorial_rec(inputNb){

    if(inputNb == 0){
        return 1
    }
    else{
        return inputNb * my_compute_factorial_rec(inputNb - 1)
    }
}

var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
var res = my_compute_factorial_rec(inputNb)
console.log(res)