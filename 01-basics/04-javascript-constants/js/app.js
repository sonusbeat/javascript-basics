// You cannot re-assign a constant
// let tax = 16;
// tax = 18;

const tax = 16; // This value cannot change
let price = 10;
let total = ((tax * price) / 100) + price;

console.log("Tax: ", (tax * price) / 100);
console.log("Price: ", price);
console.log("Total: ", total);