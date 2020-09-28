let i = 0;

while(i <= 10) {
    if (i == 5) break;
    console.log('i:', i);
    i++;
}

console.log('-'.repeat(35));

let j = 0;

while(j <= 10) {
    if (j % 2 === 0) {
        j++;
        continue;
    }

    console.log('j:', j);
    j++;
}