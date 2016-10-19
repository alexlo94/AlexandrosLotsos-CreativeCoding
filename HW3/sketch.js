/**
* Kevin's comments:  Nice work here!  your variable names are nice and succinct but also descriptive!
Very easy to read.  As a creative suggestion, try rotating one of the shapes and see how it affects the Moire Pattern.
Example inline code below...
**/
var cnv;
var xoff;
var yoff;

function setup() {
  cnv = createCanvas(450,450);
  centerCanvas();
  background(0);
  noFill();
  
  xoff = 0;
  yoff = 0;
}

function draw() {
  //stroke(random(0,255), random(0,255), random(0,255));
  stroke(255);
  beginShape();
  vertex(width/2 - xoff, height/2 - yoff); //upper left
  vertex(width/2 + xoff, height/2 - yoff); //upper right
  vertex(width/2 + xoff, height/2 + yoff); //lower right
  vertex(width/2 - xoff, height/2 + yoff); //lower left
  endShape(CLOSE);
  // Kevin's suggestion:
  //uncomment to try
  //translate(100,100);
	//rotate(radians(frameCount % 360));
  beginShape();
  vertex(width/2, height/2 - 2*yoff); //top
  vertex(width/2 + 2*xoff, height/2); //right
  vertex(width/2, height/2 + 2*yoff); //bottom
  vertex(width/2 - 2*xoff, height/2); //left
  endShape(CLOSE);
  if(xoff < 200 && yoff < 200){
    xoff +=5;
    yoff +=5;
  }
}
function mouseClicked(){
	background(0);
	xoff = 0;
	yoff = 0;
}
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}
