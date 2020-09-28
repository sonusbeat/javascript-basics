const circle = {
    radius: 1,

    draw() {
        console.log('Draw');
    }
};

for (let key in circle) {
    console.log(key, circle[key]);
}

console.log('-'.repeat(35));

// Objects are not iterable
// for (let key of circle) {
//     console.log(key);
// }

for (let key of Object.keys(circle)) {
    console.log(key);
}

console.log('-'.repeat(35));

for (let entry of Object.entries(circle)) {
    console.log(entry);
}

console.log('-'.repeat(35));

console.log('Radius exists:', ('radius' in circle) ? 'Yes' : 'No');
console.log('Color exists:', ('color' in circle) ? 'Yes' : 'No');