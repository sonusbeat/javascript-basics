const numbers = [1, -1, 2, 3];

let filtered = numbers.filter(n => n >= 0);
let items = filtered.map(n => `<li>${n}</li>`);
const html = `<ul>${items.join('')}</ul>`;

console.log('Filtered:', filtered);
console.log('Items:', items);
console.log('Html:', html);

console.log('############ Map Objects ############');

// Long callback sintaxis
// items = filtered.map(function (number) {
//     return { value: number };
// });

// With array function
// To return an object you have to
// wrap it with parenthesis ({})
items = filtered.map(n => ({ value: n }));

console.log(items);

console.log('############ Chaining ############');

items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value)
;

console.log(items);
