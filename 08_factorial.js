// Q: Factorial Finder

// factorial(5) => 120  1*2*3*4*5

const factorial = (num) => {
    let fact = 1;
    for(let i=1; i<=num; i++){
        // console.log(i);
        fact = fact*i;
    }
    return fact
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(3)); // Output: 6