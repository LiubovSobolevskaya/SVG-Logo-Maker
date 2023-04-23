const inquirer = require('inquirer');
const fs = require('fs');
const {generateSVG} = require('./lib/generateSVG');
const questions = [{ 
                    message: "Please enter up to three charachters",
                    type: "input",
                    name: "charachters",
                    validate: function(input) { 
                        return input.length <= 3;
                    }
                   }, 
                   {
                    message:  "Please enter text color",
                    type: "input",
                    name: "color",
                   },
                   {
                    message:  "Please enter a shape",
                    type: "list",
                    name: "shape",
                    choices: ['circle', 'triangle', 'square']
                   },
                   {
                    message: "Please enter shape's color",
                    type: "input",
                    name: "shapeColor",
                   },
                ];



function writeToFile(fileName, data) {
    text = generateSVG(data);
    fs.writeFile(fileName, text, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
}
function init() {
   inquirer
  .prompt(questions)
  .then((data) => {
    const fileName = 'examples/logo.svg';
    writeToFile(fileName, data);
  });

}


init();

