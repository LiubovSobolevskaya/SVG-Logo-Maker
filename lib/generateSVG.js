
const Triangle = require('./triangle.js');
const Circle = require('./circle.js');
const Square = require('./square.js');

// This function generates an SVG image based on the data provided as the argument.
function generateSVG(data){
    // Initialize variables to be used later in the function.
    let shape;
    var y = 125;

    // Check the shape specified in the data and create the corresponding object.
    if (data.shape == 'triangle'){
        shape = new Triangle();
        y = 170; // Adjust the y-coordinate if the shape is a triangle.
    }
    else if (data.shape == 'circle'){
        shape = new Circle();
    }
    else{
        shape = new Square();
    }
    shape.setColor(data.shapeColor);  // Set the color of the shape to the color specified in the data.
    
    // Modify the text specified in the data to remove any spaces or commas.
    let text = data.charachters;
    if (data.charachters.includes(" ")){
        text = data.charachters.split(" ").join("");
    }
    else if (data.charachters.includes(",")){
        text = data.charachters.split(",").join("");
    }
   
        //this return is formatted this way, so the resulting svg file is formatted correctly.  
        return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\>

        ${shape.render()}

        <text x="150" y="${y}" font-size="60" text-anchor="middle" fill="${data.color}">${text}</text>

    </svg>`
}

module.exports = {generateSVG};