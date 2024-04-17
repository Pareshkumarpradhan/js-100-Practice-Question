// 18: write a function to check if a character is uppercase or lowercase


const isUpperCase = (char) => {
//    if(char.charCodeAt(0) >= 65 &&   char.charCodeAt(0) <= 90){
//     return true;
//    }
//    return false;


//second method
return char === char.toUpperCase();
}



console.log(isUpperCase("s"));  // output: true
// console.log(isLowerCase("b"));  // output: true