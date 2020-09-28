const circle = {
    radius: 1
};

circle.color = "green";
circle.draw = function () {};

console.log(circle);

delete circle.color;
delete circle.draw;

console.log(circle);