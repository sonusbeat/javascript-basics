const numbers = [1, 2, 3, 4];

console.log('Original:', numbers);

// array.push() >> End
// array.unshift() >> Beggining
// array.splice() >> Middle

// End
const last = numbers.pop();
console.log('End:', numbers);
console.log('Last:', last);

// Beggining
const first = numbers.shift();
console.log('End:', numbers);
console.log('First:', first);

// Middle
numbers.splice(2, 1);
console.log('splice:', numbers);