// We can call function before is created
walk();

/*
    Function Declaration
    Is moved to the top and is called:
    ############ Hoisting ############
*/
function walk() {
    console.log('Function Declaration');
}

/*
    You can't call Function Expression 
    before is defined
*/
// run();

// Anonymous Function Expression
let run = function() {
    console.log('Anonymous Function Expression');
};

run();

/*
    Is the same problem with variables
    you can't call them before is defined
*/
// console.log(x);
// let x = 0;
