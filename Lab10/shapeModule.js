class Shape {
    #color;
    constructor(color){
        this.#color = color;
    }

    get Color(){
        return this.#color;
    }

    set Color(color){
        this.#color = color;
    }
    Draw_shape(){
        console.log(`color: ${this.#color}`);
    }
}

module.exports = Shape;
