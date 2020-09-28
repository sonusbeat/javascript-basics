console.log('######## Primitive Types ########');

const numbers = [1, 2, 3, 1, 4];

console.log('Index of a:', numbers.indexOf('a')); // -1
console.log('Index of 1:', numbers.indexOf('2')); // -1
console.log('Index of 4:', numbers.indexOf(4)); // n
console.log('Index of 4:', numbers.indexOf(4, 2)); // n
console.log('Index of 1:', numbers.lastIndexOf(1)); // n
console.log('3 exists:', numbers.indexOf(3) !== -1);
console.log('3 exists:', numbers.includes(1));

console.log('######## Reference Types ########');


const courses = [
    { id: 1, name: 'Html'},
    { id: 2, name: 'Css'},
    { id: 3, name: 'Javascript'},
    { id: 4, name: 'Python'},
    { id: 5, name: 'Java'},
    { id: 6, name: 'PHP'}
];

// This doesn't work
// console.log(courses.includes({ id: 1, name: 'Html'}));

// Return the value
const found1 = courses.find(function (course) {
    return course.name === 'Javascript';
});

console.log('Object:', found1);

// Returns an index
const found2 = courses.findIndex(function (course) {
    return course.name === 'Javascript';
});

console.log('Index:', found2);