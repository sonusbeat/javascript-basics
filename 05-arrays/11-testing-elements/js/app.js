const numbers = [1, -2, 3, 4, -5];
let atLeastOnePositive;

atLeastOnePositive = numbers.every(function (value) {
    return value >= 0;
});

console.log('Positive:', atLeastOnePositive);

atLeastOnePositive = numbers.some(function (value) {
    return value >= 0;
});

console.log('Positive:', atLeastOnePositive);
