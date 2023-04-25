//This sketch create random color circles based on the interaction with mouse and displayed them on sceen using for loop.

let circles = [];
let colors = ['red', 'blue', 'green'];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  for (let i = 0; i < circles.length; i++) {
    circles[i].display();
  } 
  
//Interaction with mouse
  if (mouseIsPressed) {
    let newCircle = new Circle(mouseX, mouseY, random(20, 50), random(colors));
    circles.push(newCircle);
  }
}

class Circle {
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = c;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.r);
  }
}
