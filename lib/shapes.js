class Shapes {
  constructor(color) {
    this.color = color;
  }
}

//circle
class Circle extends Shapes {
  constructor(color, text, textColor) {
    super(color);
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="90" fill="${this.color}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

//square
class Square extends Shapes {
  constructor(color, text, textColor) {
    super(color);
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

//triangle
class Triangle extends Shapes {
  constructor(color, text, textColor) {
    super(color);
    this.text = text;
    this.textColor = textColor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 10 250, 180 50, 180" fill="${this.color}" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
