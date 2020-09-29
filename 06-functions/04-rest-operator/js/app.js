// Rest Operator ...
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

/* ############## IMPORTANT NOTE ############## */
// Rest Operator ...arguments must be at the end
// of the "Parameters" (a, b, c, ...arguments)
// this is incorrect (a, b, ...arguments, c)
function total(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);

    return total * (1 - discount);
}

console.log(sum(1, 2));
console.log(sum(18, 45, 21));

console.log('Total: $', total(0.1, 20, 15));