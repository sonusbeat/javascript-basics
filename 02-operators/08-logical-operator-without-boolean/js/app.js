/* Javascript Logical Operator without boolean */

/* ########################### */
/* ########## Falsy ########## */
/* ########################### */
/* ------------------------------
    undefined
    null
    0
    false
    ''
    Nan
-------------------------------- */

/* ############################ */
/* ########## Truthy ########## */
/* ############################ */
/* --------------------------------------
    Anything that is not falsy is Truthy
    false || true     // true
    false || 'Daniel' // Daniel
    false || 1        // 1
 -------------------------------------- */

/* ############################ */
/* ##### Short Circuiting ##### */
/* ############################ */
/* --------------------------------------
    false || false || 2   // 1   
 -------------------------------------- */

var userColor = false;
var defaultColor = "orange";
var currentColor = userColor || defaultColor;

console.log('Current Color:', currentColor);
