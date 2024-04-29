// Q:- Interview Question: Check Triangle Type

const checkTriangleType = (a,b,c) => {
    if(a===b && b===c) return "equilateral";
    if(a===b || b===c || a===c) return "isosceles"
    return "scalene";
};


console.log(checkTriangleType(3,3,3)); // Output: "equilateral"
console.log(checkTriangleType(3,4,3)); // Output: "isosceles"
console.log(checkTriangleType(5,8,6));  // Output: "scalene"