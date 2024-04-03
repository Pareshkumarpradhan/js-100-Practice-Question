//Q:- write a function findMax that takes an array of Numbers as input and returns the maximum number in the array

const findMax = (arr) => {
    return Math.max(...arr)
}
// console.log(findMax());

// Example usage:
console.log(findMax([1,2,3,4,5,9])); // Output:9
console.log(findMax([-10, -5, -3, -9, -2])); // Output: -2
console.log(findMax([5])); // Output: 5