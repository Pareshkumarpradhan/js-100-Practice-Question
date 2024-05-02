// find the Median

// for example find the median of 3, 3, 5, 9, 15  ||   if the number array is odd then the median is middle number here is 5
// the median of 3, 5, 7, 9 is (5+7)/2 = 6.


const findMedian = (arr) => {
    // step 1: Sort the array
    console.log(arr.sort((a, b) =>  a-b));
    // step 2: Check if the array is odd or even
    let length = arr.length
    let mid = Math.floor(length/2);
    console.log(mid);

    if(length % 2 === 0){
        // step 3: for even length array
        return (arr[mid] + arr[mid - 1]) / 2
    }else{
        // step 4: for odd length array
        return arr[mid]
    }


}



console.log(findMedian([5, 3, 9, 1, 7]));  // output: 5
console.log(findMedian([2,4,6,8]));  // output: 5
console.log(findMedian([1,3,5,7,9,11]));  // output: 6