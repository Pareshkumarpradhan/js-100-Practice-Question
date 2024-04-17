// 20. Write a function to reverse a string without using any built-in methods or library. the function should take a string and retirn the reversed string.


const reverseString = (str) => {
    let r_str = "";
    for(let i = str.length-1; i>=0; i--){
       r_str += str[i]
    }
    return r_str
}



console.log(reverseString("hello"));  //Output :olleh