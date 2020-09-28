function arrayFromRange(min, max) {
    const array = [];

    for(let i = min; i <= max; i++) array.push(i);

    return array;
}

console.log(arrayFromRange(0, 10));
console.log(arrayFromRange(-10, 0));