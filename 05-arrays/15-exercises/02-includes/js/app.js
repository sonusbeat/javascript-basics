const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
    for (element of array)
        if (element === searchElement) return true;

    return false;
}

console.log(includes(numbers, 0));