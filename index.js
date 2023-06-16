// packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

// creates an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "text",
    message: "Choose three letters for your logo",
  },
  {
    type: "input",
    name: "textColor",
    message: "Choose a color for the text",
  },
  {
    type: "input",
    name: "shape",
    message: "Choose a shape for the logo",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "list",
    name: "shapeColor",
    message: "Choose a color for the shape",
  },
]);
