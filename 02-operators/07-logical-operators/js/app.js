/* Javascript Logical Operator */

// Logical AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log('-'.repeat(35));

// Logical OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log('-'.repeat(35));

var price = 12000;
var budget = 11000;
var credit = true;

// var canBuy = budget >= price && credit;
var canBuy = budget >= price || credit;

console.log('Can Buy:', canBuy);

// NOT OPERATOR (!)
var isNotEligible = !canBuy;

console.log('isNotEligible:', isNotEligible);