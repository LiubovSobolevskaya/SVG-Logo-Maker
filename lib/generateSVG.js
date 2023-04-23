
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');

function generateSVG(data){
    var shape;
    var y = 125;
    if (data.shape == 'triangle'){
        console.log("I am a triangle");
        shape = new Triangle();
        y = 165;
    }
    else if (data.shape == 'circle'){
        console.log("I am a circle");
        shape = new Circle();
    }
    else{
        console.log("I am a Square");
        shape = new Square();
    }

    shape.setColor(data.shapeColor);
    return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg\">

    <rect width="100%" height="100%" fill = "white"/>

    ${shape.render()}

    <text x="150" y="${y}" font-size="60" text-anchor="middle" fill="${data.color}">${data.charachters}</text>

    </svg>`
}

module.exports = {generateSVG};