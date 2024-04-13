// 13: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o' nad 'u' as vowels (both lowercase nad uppercase)

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];

  let arr = str.split("");
  console.log(arr);

  let count = 0;
  for (const char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count
};

// Example
console.log(countVowels("Helloo Worls")); // Output: 4
console.log(countVowels("The quIck brOwn fOx")); //Output: 5
console.log(countVowels("Brrrp")); // Output: 0
