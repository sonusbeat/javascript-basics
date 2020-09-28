const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'x', ...second, 'y'];

console.log('First:', first);
console.log('Second:', second);
console.log('Combined:', combined);

// const copy = combined.slice();
const copy = [...combined];

console.log('Copy:', copy);