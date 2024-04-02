// Q:- Programming Question: Sort an Array


function sortAssending(arr){
   let array = arr.sort((a,b) => a-b)
   return array
}


console.log(sortAssending([5,3,10,8]));