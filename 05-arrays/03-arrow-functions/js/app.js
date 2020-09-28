const courses = [
    { id: 1, name: 'Html'},
    { id: 2, name: 'Css'},
    { id: 3, name: 'Javascript'},
    { id: 4, name: 'Python'},
    { id: 5, name: 'Java'},
    { id: 6, name: 'PHP'}
];

// Return the value
const found = courses.find(course => course.name === 'Javascript');

console.log('Object:', found);