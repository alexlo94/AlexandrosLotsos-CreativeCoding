var cnv;
var size;
var step;
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  size = 1.0;
  step = 0.2;
  frameRate(60);
  background(255);
  
} 

function draw(){
  background(255);
  drawFox(size);
}


//function that draws a simple fox head at the center of the canvas. Users can adjust the scale when calling the method
function drawFox(scale){
  stroke(0);
  fill("orange");
  translate((1-scale)*(width/2), (1-scale)*(height/2))
  //draw the outline of the fox head
  beginShape();
  	vertex(scale*(width/2), scale*(5*height/6));//center bottom vertex
  	vertex(scale*(3*width/4), scale*(height/2));
  	vertex(scale*(3*width/4), scale*(height/8));
  	vertex(scale*(5*width/8), scale*(3*height/8));
  	vertex(scale*(width/2), scale*(height/3));
  	vertex(scale*(3*width/8), scale*(3*height/8));
  	vertex(scale*(width/4), scale*(height/8));
  	vertex(scale*(width/4), scale*(height/2));
  endShape(CLOSE);
  
  fill(0);
  //draw eyes
  line(scale*(7*width/16), scale*(6*height/12), scale*(6*width/16), scale*(5*height/12));
  line(scale*(9*width/16), scale*(6*height/12), scale*(10*width/16), scale*(5*height/12));
  
  //draw nose
  beginShape();
  	vertex(scale*(width/2), scale*(5*height/6));
  	vertex(scale*(width/2 - 7*width/240), scale*(5*height/6 - 7*height/120));
  	vertex(scale*(width/2), scale*(5*height/6 - 7*height/100));
  	vertex(scale*(width/2 + 7*width/240), scale*(5*height/6 - 7*height/120));
  endShape(CLOSE);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    size -= step;
  }
  if(keyCode === RIGHT_ARROW){
    size += step;
  }
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