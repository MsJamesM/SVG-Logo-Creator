const { Circle, Square, Triangle } = require("../lib/shapes");

// test circle
describe("Circle", () => {
  it("should output a circle with the provided text and colors", () => {
    let color = "blue";
    let text = "SVG";
    let textColor = "white";
    let circle = new Circle(color, text, textColor);
    expect(circle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="90" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
    );
  });
});

// test square
describe("Square", () => {
  it("should output a square with the provided text and colors", () => {
    let color = "red";
    let text = "SVG";
    let textColor = "white";
    let square = new Square(color, text, textColor);
    expect(square.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
    );
  });
});

// test triangle
describe("Triangle", () => {
  it("should output a triangle with the provided text and colors", () => {
    let color = "yellow";
    let text = "SVG";
    let textColor = "white";
    let triangle = new Triangle(color, text, textColor);
    expect(triangle.render()).toEqual(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 10 250, 180 50, 180" fill="yellow" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
    );
  });
});
