// const text = 'I am learning\n Javascript step by step';

// const text =
// 'I am learning\n' +
// "\"Javascript\" step by step";

// Object Literals {}
// Boolean Literals true, false
// String Literals '', ""
// Template Literals ``

const language = 'Javascript';
const year = new Date().getFullYear();

const text =
`I am learning
"${language}" in
${ (year == 2020) ? year : ' the future' }`;

console.log(text);