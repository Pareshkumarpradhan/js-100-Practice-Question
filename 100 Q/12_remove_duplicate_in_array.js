// Q:- Write a function that takes array of integers as input and removes any duplicate elements, returing a new array with onaly the unique element

const removeDuplicates = (arr) => {
   let newArr = [...new Set(arr)]
//    console.log(newArr);
return newArr
}

//example
console.log(removeDuplicates([1,2,3,4,2,4])); // Output:[1,2,3,4]
console.log(removeDuplicates([5,6,7,7,8,8,9]));  // output:[5,6,7,8,9]
console.log(removeDuplicates([1,2,3,4])); // output: [1,2,3,4]
console.log(removeDuplicates([]));  // output: []


// The new Set() method in JavaScript create a new object. A Set object is a collection of unique values. It can store any type of value, whether primitive value or object references.