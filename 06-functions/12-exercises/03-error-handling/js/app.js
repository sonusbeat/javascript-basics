function countOccurrences(array, search) {
    if (!Array.isArray(array))
        throw new Error('Invalid array!');

    if (!Number.isInteger(search))
        throw new Error('Invalid number!');

    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === search) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

try {
    const numbers = [1, 2, 3, 4, 1, 3, 1];
    const count = countOccurrences(numbers, 1);
    console.log(count);
} catch(e) {
    console.error(e.message);
}