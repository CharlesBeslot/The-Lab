function my_compute_factorial_rec(inputNb){

    let nb = 1
 
    for (let i = 1; i<inputNb+1; i++) {
        nb *= i 
    }
    
    if (Number.isInteger(inputNb)){
        console.log(nb)
    }
    else if (inputNb == 0){
        nb = 1
        console.log(nb)
    }
    else if (!Number.isInteger(inputNb)){
        console.log('Seul les nombres entiers sont acceptés')
    }

    return nb * my_compute_factorial_rec(inputNb - 1)
}

var result = require('minimist')(process.argv.slice(2))
inputNb = result._[0]
my_compute_factorial_rec(inputNb)