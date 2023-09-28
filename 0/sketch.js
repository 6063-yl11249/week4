function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);
}

function draw() {
  noStroke();
}

function mouseClicked() {
 fill (random(100,200), 100,130);
 rect (mouseX, mouseY, 80, 80);
}

function mouseMoved() {
 stroke(0);
 line (0,0,mouseX,mouseY);
}

function keyPressed(){
  if(key == "r") {
    background(255);
  }
}