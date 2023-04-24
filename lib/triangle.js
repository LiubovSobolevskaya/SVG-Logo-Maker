const Shape = require('./shape.js');

class Triangle extends Shape{
    // Define render method to render SVG rectangle with given color
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
}
 
// Export Square class to be used in other modules
module.exports = Triangle;