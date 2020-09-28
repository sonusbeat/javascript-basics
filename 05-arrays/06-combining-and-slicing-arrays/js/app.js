const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [{ id: 1 }];

let combined = first.concat(second);
const slice = combined.slice(2, 4); // From 2 to 4 index
// const slice = combined.slice(3); // Start from 3 to the end
// const slice = combined.slice(); // Gives a copy of original array

console.log('First:', first);
console.log('Second:', second);
console.log('Combined:', combined);
console.log('Slice:', slice);

combined = third.concat(second);
third[0].id = 10;
console.log('Reference:', combined);