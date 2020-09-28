const numbers = [1, 2, 3];

console.log('######## For ########');

for (let number = 1; number <= numbers.length; number++) {
    console.log(number);
}

console.log('######## For Of ########');

for (let number of numbers) {
    console.log(number);
}

console.log('######## For In ########');

for (let index in numbers) {
    console.log(`${index}: ${numbers[index]}`);
}

console.log('######## For Each ########');

numbers.forEach(number => console.log(number));
console.log('-'.repeat(27));
numbers.forEach((number, index) => console.log(`${index}: ${number}`));