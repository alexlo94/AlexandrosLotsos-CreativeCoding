var lamda1 = 60.0;
var lamda2 = 90.0;
var angle = 0.0
var amplitude = 350;
var step = 0;
var cnv;
function setup() {
  cnv = createCanvas(800,800);
  centerCanvas();
  colorMode(HSB,360,100,100);
  frameRate(60);
  noFill();
  background(0);
  stroke(0);
  
}

function draw() {
  //background(0);
  if(step >= 180){
    noLoop();
  }
  translate(width/2,height/2);
  angle = step/lamda1*TWO_PI;
  var y = sin(angle)*amplitude;
  angle = step/lamda2*TWO_PI;
  var x = sin(angle)*amplitude;
  drawNgon(Math.floor(random(3,10)), 40, x, y);
  step++;
  
}

function drawNgon(num_vert, rad, transX, transY){
  fill((transX+transY)%360, 100- random(1,50), 100 - random(1,50));
  translate(transX,transY);
  beginShape();
  	for(i = 0; i < num_vert; i++){
      vertex(rad*sin(radians(i*(360/num_vert))), rad*cos(radians(i*(360/num_vert))));
    }
  endShape(CLOSE);
  translate(transX*-1, transY*-1);
}

//center canvas method
// source: https://github.com/processing/p5.js/wiki/Positioning-your-canvas
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
function windowResized() {
  centerCanvas();
}