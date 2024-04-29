// 15: write a function to calculte the sum of squares of all element in an array . For example , given the array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1+4+9 = 14

const sumOfSquares = (arr) => {
//    return arr.reduce((acc, cval) => (acc = acc + cval*cval), 0);

   let sum = 0
   for (const elem of arr) {
       sum = sum + (elem*elem)
   }
   return sum
};

console.log(sumOfSquares([1,2,3])); // output: 14