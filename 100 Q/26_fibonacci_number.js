// write a function to find the nth Fibonacci number?.

// calculate fibonacci number : F(n) = F(n-1) + F(n-2) , F(1) = F(2) = 1

const fibonacci = (num) => {
   if(num <= 1){
    return num;
   }else{
    return fibonacci(num-1) + fibonacci(num-2)
   }

}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));