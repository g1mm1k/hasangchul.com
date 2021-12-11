let circleX = 250;
let circleY = 250;

let speedX = 7;
let speedY = 6;

let circleSize = 50;

function setup() {
  // put setup code here
  createCanvas(990, 800);
  //colorMode(HSB);
}

function draw() {
  // put drawing code here
  background(255);

  ellipse(circleX, circleY, circleSize, circleSize);
  circleX=circleX+speedX;
  circleY=circleY+speedY;

  if(circleX<circleSize/2 || circleX>990-circleSize/2){
    speedX=speedX*-1;
    fill(random(255), random(255), random(255));
  } else if(circleY<circleSize/2 || circleY>800-circleSize/2){
    speedY=speedY*-1;
    fill(random(255), random(255), random(255));
  }
}
