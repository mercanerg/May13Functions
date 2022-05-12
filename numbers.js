const daily_word = "The greatest pleasure in life is dealing what" +
    "people say you can't do"
console.log(daily_word);
console.log('********************************************************************')

// function with default argument
const power = (number, power = 2) => {
    let pow = 1;
    for (i = 1; i < power + 1; i++) {
        pow = pow * number;
    }
    return pow;
}
console.log(`The value of 4 to the 2nd power => ${power(4)}`)
console.log(`The value of 2 to the 5th power => ${power(2, 5)}`)
console.log('***********************************************************')

const powerof = (base, p) => base ** p;

console.log('The value of 3 to the 4th power =>', powerof(3, 4))

console.log('*******************************************************')

function sum(first_num) {
    let func_length = arguments.length;
    result = 0;
    for (i = 0; i < func_length; i++) {
        result += arguments[i];
    }
    console.log(`The function has ${func_length} parameters`)
    return result;

}

console.log(`Result = ${sum(30,8)}`);

console.log(`Result = ${sum(30,8,5,7,10)}`);

let numbers = [12, 90, 25, 20, 7, 80];
console.log('numbers = ', numbers)
    // sort numbers in ascending order
numbers.sort((a, b) => a - b);

console.log('ascending sorted numbers = ', numbers);
console.log('************************************************************')

let price = [12, 90, 25, 20, 7, 80]
console.log('price = ', price)
    // sort numbers in ascending order
price.sort((a, b) => b - a);

console.log('desscending sorted price = ', price);