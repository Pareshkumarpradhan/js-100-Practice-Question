// 19: write a function to check if a given string starts with a specific substring.


const startsWith = (str, substr) => {
//    return str.toLowerCase().startsWith(substr.toLowerCase())

// 2nd method

return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase()
}

console.log(startsWith("Hello world", "hello")); //output: true
console.log(startsWith("Hello world", "world")); // output: false