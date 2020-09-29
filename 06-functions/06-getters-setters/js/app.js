const person = {
    // Properties
    firstName: '',
    lastName: '',

    // Getters => access properties
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setters => change (mutate) them
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// person.firstName = 'Daniel';
// person.lastName = 'Gonzalez';

person.fullName = 'Daniel Gonzalez';

console.log(person);