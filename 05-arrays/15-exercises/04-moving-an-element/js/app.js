function move(array, index, offset) {
    const position = index + offset;

    if(position >= array.length || position < 0) {
        console.error('Invalid Offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

const numbers = [1, 2, 3, 4];

console.log('Original:', numbers);
console.log('Moved:', move(numbers, 0, 3));
console.log('Moved:', move(numbers, 3, -3));

// Display Errors
console.log('Moved:', move(numbers, 0, 4));
console.log('Moved:', move(numbers, 0, -1));
