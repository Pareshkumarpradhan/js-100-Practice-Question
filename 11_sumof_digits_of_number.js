// Q:- Writw a function that takes a number as input and returns the sum of its digits.

const sumOfDigits = (num) => {
    let arr = Array.from(String(num), Number)
   let sum = arr.reduce((acc, cnum) => acc += cnum, 0)
  return sum
}


console.log(sumOfDigits(1234));  // outPut:10
console.log(sumOfDigits(4321));  // output: 10
console.log(sumOfDigits(123456)); // output: 21