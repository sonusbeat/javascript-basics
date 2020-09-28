const person = {
    name: 'Daniel',
    execute() {
        console.log('execute');
    }
};

/*
    #### For in method ####

    for (let key in person) {
        different[key] = person[key];
    }
*/

/*
    #### Object.assign method ####

    const different = Object.assign({}, person);

    OR

    const different = Object.assign({
        country: 'Mexico',
        age: 22
    }, person);
*/

/*
    #### ... method ####

    const different = { ...person };
*/

const different = { ...person };

console.log(different);
