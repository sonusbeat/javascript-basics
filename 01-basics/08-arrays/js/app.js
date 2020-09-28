// In Javascript an array is dynamic
// can change length and values on runtime

// [] Array Literal

let selectedColors = [];

selectedColors[0] = "red";
selectedColors[1] = "green";
selectedColors[2] = "blue";

console.log('Array', selectedColors);

selectedColors[3] = "orange";

console.log('Array:', selectedColors);
console.log('selectedColors[3]', selectedColors[3]);

selectedColors = ['cyan', 'magenta', 'purple'];

console.log('Array:', selectedColors);

selectedColors[3] = 24;

console.log('Array:', selectedColors);

// Arrays in javascript are objects
console.log('typeof selectedColors:', typeof selectedColors);

console.log('Length:', selectedColors.length);