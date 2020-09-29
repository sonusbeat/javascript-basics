function sum() {
    let total = 0;
    if (arguments.length > 0)
        for(let value of arguments)
            total += value;

    return total;
}

// console.log(sum(1, 2));
// console.log(sum(1)); // Nan
// console.log(sum()); // Nan
console.log(sum(1, 2));
