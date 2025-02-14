const Shape = require('./shapeModule');

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);  
        this.width = width;
        this.height = height;
    }

    get_area() {
        return this.width * this.height;
    }

    Draw_shape() {
        super.Draw_shape();
    }
}

class Square extends Rectangle {
    constructor(side, color) {
        super(side, side, color); 
    }

    get_area() {
        return this.width * this.width;
    }
}

module.exports = { Rectangle, Square };