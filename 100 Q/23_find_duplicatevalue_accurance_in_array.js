// Find the Duplecate value occurance in an array?

// Input
const numbers = [1, 2, 2, 3, 1, 4, 2];
let counts = {};

for (const element of numbers) {
        counts[element] = (counts[element] || 0 ) + 1
}
console.log(counts);

//output
// {'1': 2, '2': 3, '3': 1, '4': 1 }