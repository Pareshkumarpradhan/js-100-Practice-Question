// write a function to calculate the factorial of a number(using recursion)

const factorial = (num) => {
    if(num === 1){
        return 1;
    }else{
        return num * factorial(num-1)
    }
};




console.log(factorial(5));  // output: 120