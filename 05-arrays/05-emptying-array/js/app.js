let numbers = [1, 2, 3, 4];
let another = numbers;

console.log('Initial:', numbers);

// Solution 1
// numbers = [];

// Solution 2
numbers.length = 0; // Initial and reference array is truncated

// Solution 3
// numbers.splice(0, numbers.length); // Empty both

// Solution 4 // Not recomended for large arrays
// while(numbers.length > 0) {
//     numbers.pop();
// }

console.log('Initial:', numbers);
console.log('Reference:', another);