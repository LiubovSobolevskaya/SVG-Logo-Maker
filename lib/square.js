const Shape = require('./shape.js');

class Square extends Shape{
    // Define render method to render SVG rectangle with given color
    render(){
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/>`;
    } 
}

// Export Square class to be used in other modules
module.exports = Square;
