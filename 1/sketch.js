function setup() {
  createCanvas(windowWidth, windowHeight);
  background("pink");
  fill('gold');
}

let xPos= 0;
let xVelocity = 5;

function draw() {
  background ('pink');
  ellipse(xPos, 50, 50, 50);

  xPos = xPos + xVelocity;

  if (xPos > windowWidth){
    xVelocity = -5;
  }
  if (xPos < 0) {
    xVelocity = 5;
  }
 
}
