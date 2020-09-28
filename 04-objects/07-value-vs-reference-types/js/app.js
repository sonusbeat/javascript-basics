let a, b;

a = 10;
b = a;
a = 20;

console.log('a:', a);
console.log('b:', b);

console.log('-'.repeat(35));

a = { value: 10 };
b = a;
a.value = 20;

console.log('a:', a);
console.log('b:', b);

console.log('-'.repeat(35));
/*
    function increase(number) {
        number++;
    }

    let number = 10;

    increase(number);

    console.log(number);
*/

function increase(object) {
    object.value++;
}

let object = { value: 10 };

increase(object);

console.log(object.value);
