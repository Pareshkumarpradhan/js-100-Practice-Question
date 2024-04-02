// Q> Programming Question: Hash tag generator

const generaterHash = (str) => {
     if(str.length > 280 || str.trim().length === 0){
        return false;
     }

     str = str.split(" ")
     str = str.map((curElement) => 
   //   curElement.replace(curElement[0], curElement[0].toUpperCase())
       curElement.charAt(0).toUpperCase() + curElement.slice(1)
     );
     str = `#${str.join("")}`
     console.log(str);
     return str

};

console.log(generaterHash("paresh kumar pradhan"));