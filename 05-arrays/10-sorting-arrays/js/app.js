const unsorted = [3, 1, 2];
console.log('Unsorted:', unsorted);

const sorted = unsorted.sort();
console.log('Sorted:', unsorted);

const reverse = sorted.reverse();
console.log('Reverse:', reverse);

console.log('-'.repeat(35));

const courses = [
    { id: 1, name: 'Javascript' },
    { id: 2, name: 'NodeJs' },
    { id: 3, name: 'python' },
    { id: 4, name: 'C#' },
    { id: 5, name: 'java' }
];

courses.sort(function(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log('Courses:', courses);