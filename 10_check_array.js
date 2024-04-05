// Write a function arraysEqual that takes to arrays arr1 and arr2 as input and returns true if the array are equal (i.e, contain the same elements in the same order), and false otherwise.

const arraysAreEqual = (arr1, arr2) => {
  if(arr1.length !== arr2.length){
    return false;
  }

 return arr1.every((currVal, index) => currVal === arr2[index])
}


// Example usage:
console.log(arraysAreEqual([1,2,3], [1,2,3]));  // Output: true

console.log(arraysAreEqual([1,2,3], [1,2,4]));   // Output: false

console.log(arraysAreEqual([],[]));  // Output: true.