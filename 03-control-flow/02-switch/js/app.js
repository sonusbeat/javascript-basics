/* ################################################# */
/* ################### Syntaxis #################### */
/* ################################################# */
/*
    switch (expression) {
        case 'value':
            statement
            break;
        case 'value':
            statement
            break;
        default:
            statement
            break;
    }
*/

var role = 'admin';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    case 'admin':
        console.log('Admin User');
        break;

    default:
        console.log('Unknow User');
}

console.log('-'.repeat(35));

var fruit = 'banana';

if (fruit === 'orange') {
    console.log('$' + 1.5);
} else if (fruit === 'banana') {
    console.log('$' + 2);
} else if (fruit === 'strawberry') {
    console.log('$' + 0.5);
} else {
    console.log('Unknow User');
}