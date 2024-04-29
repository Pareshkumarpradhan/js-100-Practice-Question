// Programming Question: Longest Word in a string

// First method using for of loop
/* function findLongestWord(str){
    let words = str.split(" ");
    let longestWord = "";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;

}

console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
);*/

// Second method using reduce method
/*function findLongestWord(str){
    let words = str.split(" ");
    return words.reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, "");
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); */


// Third method using sort method

const findLongestWord = (str) => {
   if(str.trim().length === 0){
    return false;
   }

 let words = str.split(" ")
 //  words = words.sort((a,b) => b.length - a.length)
 //  console.log(words);
 //  return words.at(-1);
 // return words[0]

return  words.reduce((accum,curWord) => (curWord.length> accum.length ? curWord : accum) , "");

}

console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
);