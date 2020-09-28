// function getMax(array) {
//     if (array === []) return undefined;

//     let max = array[0];

//     for (let i = 0; i < array.length; i++)
//         if (array[i] > max) max = array[i];

//     return max;
// }

function getMax(array = []) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}

console.log('Empty:', getMax());
console.log('[]:', getMax([]));
console.log('[1, 2, 3, 4]:', getMax([1, 2, 3, 4]));
console.log('[22, 8, 12, 5]:', getMax([22, 8, 12, 5]));
