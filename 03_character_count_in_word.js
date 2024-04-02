// Q:- Interview Question : Count Occurrences of Character


const countChar = (word,char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalCount = word.split("").reduce((acc,curChar) => {
     if(curChar === char){
        acc++
     }
     return acc
    }, 0)
    return totalCount

};
console.log(countChar("MissIssippi", "I"));