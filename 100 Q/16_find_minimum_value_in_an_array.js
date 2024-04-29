// Find the Minimum value in an array

// 16: write a function findMin that takes an array of numbers as input and returns the minimum value found in the array

const findMin = (arr) => {
    // first method
//   arr = arr.sort((a, b) => {
//     if (b > a) return -1;
//   });
//   return arr[0]

// second method
return Math.min(...arr)

};

console.log(findMin([5, 10, 2, 8])); // output: 2
console.log(findMin([5, -3, 0, 12, -7])); // output: -7




// todo in Javascript, the spread syntax (...) is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the array arr.
// example if arr is [5, 10, 2, 8], then ...arr expands to 5,10,2,8
