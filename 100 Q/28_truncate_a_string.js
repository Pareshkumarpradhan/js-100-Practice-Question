// Writw a function called truncateString that takes two parameters:
// Truncate means reducr the string (means paresh kumar pradhan to paresh...)

const truncateString = (str, count) => {
    if(count <= 0){
        return str;
    }else{
        if(str.length > count){
            return str.slice(0, count).concat("...")
        }
    }

    // return count <= 0 ? str : str.slice(0, count).concat("...")
}

console.log(truncateString("A-tisket a-tasket A green and yellow tasket", 10));  // output: A-tisket...