let strokers = [];

class Stroker {
  constructor(x, y, speedX, speedY, size) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }

  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width + this.size) {
      this.x = -this.size;
    } else if (this.x < -this.size) {
      this.x = width + this.size;
    }
    if (this.y > height + this.size) {
      this.y = -this.size;
    } else if (this.y < -this.size) {
      this.y = height + this.size;
    }
  }

  display() {
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.size * 2);
  }
}

function setup() {
  createCanvas(600, 400);
  
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let speedX = random(-2, 2);
    let speedY = random(-2, 2);
    let size = 1;//random(10, 30);
    strokers.push(new Stroker(x, y, speedX, speedY, size));
  }
}

function draw() {
  background(0);
  
  for (let i = 0; i < strokers.length; i++) {
    strokers[i].update();
    strokers[i].display();
  }
}