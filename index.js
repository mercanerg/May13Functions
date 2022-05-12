text = 'The secret of your future is hidden in your daily routine.'
namee = 'Mike Murdock';
console.log(text, '==>', namee);
console.log('******************************************************************************');
const num = 50;
let k = 1;

const prime = (number) => {
    let prime_array = [2]; // define an array
    for (i = 3; i < number + 1; i++) { //set a loop from 3 to number
        let prime = true // initial of loop, set prime as true 
            //set nested loop to check whether iterations is prime
        for (j = 2; j < i; j++) {
            const remind = i % j; // check remind
            if (remind == 0) {
                prime = false;
                break;
            }
        }
        if (prime) { // in each loop if prime is true, add number i in prime_array
            prime_array[k] = i;
            k++; //increment 1 for element number of array
        }
    }
    return prime_array; // In conclusion return prime array
}

console.log(`Prime numbers to ${num} => ${prime(num)}`) // display prime numbers