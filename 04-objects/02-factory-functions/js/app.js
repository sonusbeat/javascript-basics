// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);

console.log('Circle 1 Radius:', circle1.radius);
console.log('Circle 2 Radius:', circle2.radius);