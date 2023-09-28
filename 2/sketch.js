function setup() {
  createCanvas(windowWidth, windowHeight);
  fill("lightblue");
  noStroke();
  // print(getTargetFrameRate());
  print (millis());
}


function draw() {
  background("beige");
  let secondsNow = second();
  let myDiameter = map (secondsNow, 0, 59, 100, height);
  ellipse(width/2, height/2, myDiameter, myDiameter);
}
