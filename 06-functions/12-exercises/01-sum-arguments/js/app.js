// sum([1, 2, 3, 4]) => 10
// Array.isArray()

console.log(sum([1, 2, 3, 4]));
console.log(sum([5, 6, 7, 8]));

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}