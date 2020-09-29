// Function Declaration
function walk() {
    console.log('Function Declaration');
}

// Anonymous Function Expression
let run = function() {
    console.log('Anonymous Function Expression');
};

let execute = run;

walk();
run();
execute(); // <- Has same memory reference
