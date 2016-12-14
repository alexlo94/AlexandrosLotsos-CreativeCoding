//declare global vars for spiraling
var r
var rad_step;
var angle;
//declare environment global vars
var ngon_rad;
var num_rect;
//toggle switch for drawing
var continuous;
//canvas variable for resizing
var cnv;

function setup() {
  //set sketch parameters
  cnv = createCanvas(1024, 850);
  centerCanvas();
  background(0);
  noStroke();
  colorMode(HSB,360,100,100);
  rectMode(CENTER);
  
  //set initial conditions
  angle = 0;
  r = 200;
  rad_step = 2;
  num_rect = 5;
  ngon_rad = 100;
  continuous = false;
} 

function draw() {
  //check for draw or animate
  if(!continuous){
    background(0);
  }
  //rotate the sketch
  translate(width/2, height/2);
  rotate(radians(angle%360));
  angle += 2;
  r += rad_step;
  
  //draw the surrounding ellipses
  fill(angle%360,100,100);
  for(i = 0; i < num_rect ; i++){
    ellipse(r*sin(radians(i*(360/num_rect))), r*cos(radians(i*(360/num_rect))), ngon_rad/2, ngon_rad/2);
  }
  
  //draw the central ngon
  fill(360 - (angle%360),100,100);
  drawNgon(num_rect, ngon_rad);
  
  //keep the rotation in check
  if(r < ngon_rad || r > 4*ngon_rad){
    rad_step *= -1;
  }
  
}

//function to draw the central Ngon
function drawNgon(num_vert, rad){
  beginShape();
  	for(i = 0; i < num_vert; i++){
      vertex(rad*sin(radians(i*(360/num_vert))), rad*cos(radians(i*(360/num_vert))));
    }
  endShape();
}

//define user controls
function keyPressed(){
  //left and right arrow used to decrease/increase the complexity of the sketch
  if(keyCode === RIGHT_ARROW){
    num_rect++;
  }
  if(keyCode === LEFT_ARROW){
    num_rect--;
  }
  //enter and backspace can be used to play/pause the sketch
  if(keyCode === ENTER){
    loop();
  }
  if(keyCode === BACKSPACE){
    noLoop();
  }
  //space key can be used to toggle draw
  if(key === " "){
    background(0);
    continuous = !continuous;
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