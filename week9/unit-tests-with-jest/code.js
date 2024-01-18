const add = function(a, b){
    return a + b
}

const calculateHyp = function(num1,num2){
    return Math.sqrt(num1 * num1 + num2 * num2)
}

module.exports = {add,calculateHyp}