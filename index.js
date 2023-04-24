// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const { generateSVG } = require('./lib/generateSVG');

// Define an array of question objects to prompt the user for input
const questions = [
  {
    message: "Please enter up to three characters",
    type: "input",
    name: "charachters",
    // Validate user input
    validate: function(input) { 
      if (input.length > 5) {
        return false;
      }
      if (input.includes(" ") && input.split(" ").length > 3) {
        return false;
      }
      if (input.includes(",") && input.split(",").length > 3) {
        return false;
      }
      return true;
    }
  }, 
  {
    message:  "Please enter text color",
    type: "input",
    name: "color",
    // Validate user input
    validate: function(input) { 
      return input.length > 2;
    }
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
    // Validate user input
    validate: function(input) { 
      return input.length > 2;
    }
  },
];

// Function to write the SVG file
function writeToFile(fileName, data) {
  // Generate the SVG text using the generateSVG function
  text = generateSVG(data);
  // Write the text to the specified file
  fs.writeFile(fileName, text, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
  );
}

// Function to initialize the program
function init() {
  // Prompt the user for input using the inquirer module
  inquirer
    .prompt(questions)
    .then((data) => {
      // Define the filename to write the SVG file to
      const fileName = 'examples/logo.svg';
      // Call the writeToFile function to generate and write the SVG file
      writeToFile(fileName, data);
    });
}

// Call the init function to start the program
init();
