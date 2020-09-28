let numbers = [1, -1, 2, 3];

/*
    let sum = 0;

    for (let n of numbers) {
        sum += n; 
    }

    console.log(sum);
*/

// accumulator = 0, currentValue = 1  => acumulator 1
// accumulator = 1, currentValue = -1 => acumulator 0
// accumulator = 0, currentValue = 2  => acumulator 2
// accumulator = 2, currentValue = 3  => acumulator 5
/*
    sumReduced = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
*/

// a = 1, c = -1 => a 0
// a = 0, c =  2 => a 2
// a = 2, c =  3 => a 5
sumReduced = numbers.reduce((a, c) => a + c);

console.log(sumReduced);
