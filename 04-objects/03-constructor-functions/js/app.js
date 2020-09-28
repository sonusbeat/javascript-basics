// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

console.log('#'.repeat(10),'Factory','#'.repeat(10));

const circle1 = new createCircle(1);
circle1.draw();
console.log(circle1.radius);

console.log('#'.repeat(10),'Constructor','#'.repeat(10));

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle2 = new Circle(1);
circle2.draw();
console.log(circle2.radius);
