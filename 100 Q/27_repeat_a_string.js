// Repeat a string

// write a function called repeatstring that takes two parameters;

const repeatString = (str, num) => {
       return num>0? str.repeat(num):str;
}


console.log(repeatString('abc', 5));