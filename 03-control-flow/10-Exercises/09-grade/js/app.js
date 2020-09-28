/*
    Average = 70

    1-59:   F
    60-69:  D
    70-79:  C
    80-89:  B
    90-100: A
*/

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) sum += value;
    return sum / array.length;
}

console.log(calculateGrade([45, 52, 65]));
console.log(calculateGrade([65, 70, 80]));
console.log(calculateGrade([82, 92, 75]));
console.log(calculateGrade([95, 85, 98]));
