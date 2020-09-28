/* Javascript Bitwise Operators */

/* ########################### */
/* ###### Binary System ###### */
/* ########################### */
// 1 bit = 8 zeros
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

// console.log(1 | 2); // | Bitwise Or
// console.log(1 & 2); // | Bitwise And

// Read, Write, Execute
// 00000111 // Read Write Execute
// 00000100 // Read
// 00000010 // Write
// 00000001 // Execute

var readPermission = 4;
var writePermission = 2;
var executePermission = 1;
var myPermission = 0;

// myPermission = myPermission | readPermission | writePermission;
myPermission = myPermission | writePermission;

var message = (myPermission & readPermission) ? 'Yes' : 'No';

console.log('Message:', message);