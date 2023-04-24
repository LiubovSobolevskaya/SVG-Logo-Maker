const Shape = require('./shape.js');

class Circle extends Shape{
    // Define render method to render SVG rectangle with given color
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

// Export Square class to be used in other modules
module.exports = Circle;
