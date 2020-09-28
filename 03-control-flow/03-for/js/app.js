/* ################################################# */
/* ################### Syntaxis #################### */
/* ################################################# */
/*
    for (initial-expression; condition; final-expression) {
        statement
    }
*/

for(var i = 0; i <= 3; i++) {
    console.log('i:', i);
}

console.log('-'.repeat(35));

for(var i = 3; i >= 0; i--) {
    console.log('i:', i);
}

console.log('-'.repeat(35));

// Find prime numbers
for(var i = 0; i <= 3; i++) {
    if (i % 2 !== 0) console.log('prime:', i);
}