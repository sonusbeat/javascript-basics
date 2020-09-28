let name = "Daniel";
let age = 20;
let isAprove = true;
let color = undefined;
let selectedColor = null;

console.log('name', typeof name);

// We can re-assing type to variables
name = 1;

console.log('name', typeof name);

console.log('age', typeof age);

age = 24.50;

// NOTE: in Javascript we don't have floating points numbers
// and integers like other programming languages
console.log('age', typeof age);

// This is a boolean value
console.log('isAprove', typeof isAprove);

// Is undefined is also undefined value because is primitive type
console.log('color', typeof color);

// Undefined is an object in Javascript
console.log('selectedColor', typeof selectedColor);
