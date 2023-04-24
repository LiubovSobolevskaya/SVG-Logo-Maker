
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');

function generateSVG(data){
    var shape;
    var y = 125;
    if (data.shape == 'triangle'){
        shape = new Triangle();
        y = 165;
    }
    else if (data.shape == 'circle'){
        shape = new Circle();
    }
    else{
        shape = new Square();
    }
    let text;
    if (data.charachters.includes(" ")){
        text = data.charachters.split(" ").join("");
    }
    else if (data.charachters.includes(",")){
        text = data.charachters.split(",").join("");
    }
    else {
        text = data.charachters;
    }

    shape.setColor(data.shapeColor);
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\>

    ${shape.render()}

    <text x="150" y="${y}" font-size="60" text-anchor="middle" fill="${data.color}">${text}</text>

</svg>`
}

module.exports = {generateSVG};