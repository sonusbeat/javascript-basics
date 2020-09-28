function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.constructor);

// const Person = new Function('firstName', 'lastName', `
// this.firstName = firstName;
// this.lastName = lastName;
// this.fullName = function() {
//     console.log(this.firstName + ' ' + this.lastName);
// }`
// );

// const person = new Person('Daniel', 'Gonzalez');
// person.fullName();

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

const circle = new Circle(1);

circle.draw();