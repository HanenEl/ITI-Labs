const Shape = require('./shapeModule');

class Circle extends Shape {
    constructor(radius, x, y, color) {
        super(color);  
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    get_area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    Draw_shape() {
        super.Draw_shape();  
    }
}

module.exports = Circle;
