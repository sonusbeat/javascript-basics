/* ################################################# */
/* ################### Syntaxis #################### */
/* ################################################# */
/*
    while (condition) {
        statement
    }
*/

var i = 0;

while(i <= 5) {
    console.log('i:', i);
    i++;
}

console.log('-'.repeat(35));

var j = 0;

while(j <= 5) {
    if (j % 2 !== 0) console.log('j:', j);
    j++;
}