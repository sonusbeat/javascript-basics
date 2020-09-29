/* ######### IMPORTANT NOTE ######### */
/*
    var is scoped in the function where
    it was defined no matter if you
    define it in a for loop
*/

// var => function-scoped
// ES6 (ES2016): let, const

// function start() {
//     for (var i = 0; i < 6; i++) {
//         if (true) {
//             var color = 'red';
//         }
//     }

//     console.log(color);
//     console.log(i);
// }

// function start() {
//     for (let i = 0; i < 6; i++) {
//         console.log(i);
//     }
//     // console.log(i); // This will return an error
// }

// start();

/* ######### IMPORTANT NOTE ######### */
/*
    If you use "var" or "function" and its
    attached to the window object
    other javascript libraries can override
    your global functions and variables with
    the same name.
*/

// var is attached to window object
// window.color //> "red"
var color = 'red';

// let is not attached to window object
let age = 30;

// Also a function is attached to window object
// window.message() //> Hello World
function message() {
    console.log('Hello World');
}