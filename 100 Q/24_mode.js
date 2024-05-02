// Write a function called findMode that takes an array of number as input and returns the mode of the array (the number that appears most frequently).

function findMode(arr){
  let counts = {}
  let maxNum = 0;
  let mode;

  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1;
      if(counts[element] > maxNum){
        maxNum = counts[element];
        mode = element;
      }
  }
  return mode
}


console.log(findMode([1,2,2,3,1,4,2]));  // output: 2