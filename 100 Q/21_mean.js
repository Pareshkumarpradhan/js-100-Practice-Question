// write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

// todo In math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of numbers.

const calculateMean = (arr) => {
  if(arr.length === 0){
    return 0;
  }

  let sum = arr.reduce((acc, cval) => acc + cval, 0 )
  
  return sum/arr.length
}


console.log(calculateMean([1,2,3,4,5]));  // output: 3
console.log(calculateMean([10, 20, 30])); // output: 20