// let language = "Javascript";
// let level = "beginner";

// {} this means object literal

let programming = {
    // This are properties of the object
    // with key and value pairs
    language: "Javascript",
    level: "beginner"
};

console.log('Person Object:', programming);

// DOT NOTATION

console.log('Language:', programming.language);
console.log('Level:', programming.level);

// Re-assing values or a property
programming.language = 'Python';

console.log('Language:', programming.language);

// BRACKET NOTATION
// object['property']

let selection = 'level';

// Here we can change a property dynamicly
console.log('Level:', programming[selection]);

// Sometimes we need some special property name
// object['wp-name']
