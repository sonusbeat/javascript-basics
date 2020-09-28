function getRandmomArbitrary(min, max) {
   return Math.random() * (max - min) + min;
}

const random = getRandmomArbitrary(0,10);

console.log(random);

console.log('-'.repeat(35));

console.log(Math.round(1.9));
console.log(Math.round(1.2));
console.log(Math.round(1.5));

console.log('-'.repeat(35));

console.log(Math.max(12, 751, 1250, 28943));

console.log('-'.repeat(35));

console.log(Math.min(12, 751, 1250, 28943));