/*##########################################*/
/*################ Syntaxis ################*/
/*##########################################*/
/*
    for (variable in object) {
        statement
    }
*/

let person = {
    name: 'daniel',
    course: 'javascript',
    level: 'beginner'
};

for (let key in person) {
    console.log(key + ':', person[key]);
}

console.log('-'.repeat(35));

let colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(index + ':', colors[index]);
}