// Q:- Write a function to determine whether a given string is a palindrome or not.

const isPalindrome = (str) => {
     str = str.toLowerCase().replace(/\W/g, "");
     let r_str = str.split("").reverse().join("")
     console.log(r_str);
     return str === r_str ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));  // output: true
console.log(isPalindrome("racecar")); // output: true
console.log(isPalindrome("hello"));