// challenge : Calculate the average

// Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

const calculateAverage = (arr) => {
    let total = arr.reduce((acc, curElem) => acc + curElem, 0)
    console.log(total);
    return total / arr.length;
}

console.log(calculateAverage([5,10,2,8]));  // Output: 6.25