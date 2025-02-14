const Circle = require('./Circularmodule');  
const Shape = require('./shapeModule');  
const { Rectangle, Square } = require('./SquaresModule');  

const shape1 = new Shape("red");  
shape1.Draw_shape();  

const rectangle1 = new Rectangle(10, 5, "blue");
rectangle1.Draw_shape();  
console.log(`Rectangle Area: ${rectangle1.get_area()}`);

const square1 = new Square(4, "green");
square1.Draw_shape();  
console.log(`Square Area: ${square1.get_area()}`);

const circle1 = new Circle(7, 0, 0, "black");
circle1.Draw_shape(); 
console.log(`Area: ${circle1.get_area()}`);


