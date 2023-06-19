const { Circle, Square, Triangle } = require("../lib/shapes");

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
