const numbers = [3, 4];

// Adding to the end
numbers.push(5, 6);
console.log('Adding End:', numbers);

// Adding to the Beggining
numbers.unshift(1, 2);
console.log('Adding Beggining:', numbers);

// Adding to the middle
numbers.splice(3, 0, 'x', 'y');
console.log('Adding Middle:', numbers);