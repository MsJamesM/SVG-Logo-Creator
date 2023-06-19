// packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// creates an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Choose three letters for your logo",
    },
    {
      type: "input",
      name: "textColor",
      message: "Choose a color for the logo text",
    },
    {
      type: "list",
      name: "shapes",
      message: "Choose a shape for the logo",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Choose a color for the shape",
    },
  ])

  // builds logo based on user input
  .then((logoOutput) => {
    let shapes;

    if (logoOutput.shapes === "Circle") {
      shapes = new Circle(
        logoOutput.shapeColor,
        logoOutput.text,
        logoOutput.textColor
      );
    }

    if (logoOutput.shapes === "Square") {
      shapes = new Square(
        logoOutput.shapeColor,
        logoOutput.text,
        logoOutput.textColor
      );
    }

    if (logoOutput.shapes === "Triangle") {
      shapes = new Triangle(
        logoOutput.shapeColor,
        logoOutput.text,
        logoOutput.textColor
      );
    }

    // creates SVG file
    const newLogo = `./examples/logo_${logoOutput.shapes}.svg`;

    fs.writeFile(newLogo, shapes.render(), (err) => {
      if (err) {
        console.log("❌ ㅤError - please try again ❌");
      } else {
        console.log("✔️ ㅤYour logo has been created ✔️");
      }
    });
  });
