// String primitive
const message = "Hola Mexico";
console.log('Type Of:', typeof message);
console.log('Length:', message.length);
console.log('H position:',message[0]);
console.log('Includes la:', message.includes('la'));
console.log('Starts with Ho:', message.startsWith('Ho'));
console.log('Ends with me:', message.endsWith('me'));
console.log('Index of co:', message.indexOf('co'));
console.log('Replaced:', message.replace('Mexico', 'World'));
console.log('Original:', message);
console.log('Lowecase and replaced:', message.replace(' ', '-').toLowerCase());
console.log('Uppercased:', message.toUpperCase());
console.log('Lowercased:', message.toLowerCase());
console.log('Trim:', " Hola Mexico ".trim());
console.log('Trim Left:', " Hola Mexico ".trimLeft());
console.log('Trim Right:', " Hola Mexico ".trimRight());
console.log('Split:', "Hola Mexico".split(' '));
console.log('Split:', "red,blue,yellow".split(','));

/*
    ########## Escape Notation ##########

    \'	single quote
    \"	double quote
    \\	backslash
    \n	new line
    \r	carriage return
    \v	vertical tab
    \t	tab
    \b	backspace
    \f	form feed
*/

console.log('Escape single:', '\'Hello\'');
console.log('Escape double:', "\"Hello\"");
console.log('Escape backlas:', "\\directory\\another");
console.log('New Line:', "something\nanother");
console.log('Tab:', "\tsomething");

console.log('-'.repeat(35));

// String Object
const country = new String('Mexico');

console.log('Type Of:', typeof country);