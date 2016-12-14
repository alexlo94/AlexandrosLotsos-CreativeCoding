//define raindrop object and methods
function Raindrop(x, y){
  this.x_pos = x;
  this.y_pos = y;
  
  this.rx = 5 + random(-2,2);
  this.ry = 15 + random(-6,6);
  //eliminated color from object specification, it was causing too much slowdown
  //purple rain is made up of (all) purple raindrops anyway
}
Raindrop.prototype = {
  constructor : Raindrop,
  show : function(){
    ellipse(this.x_pos, this.y_pos, this.rx, this.ry);
  },
  drop : function(gravity, wind){
    this.y_pos += gravity;
    this.x_pos += wind;
  }
}

//define global vars and setup
var raindrops = []; //array container for raindrops
var num_raindrops;
var windForce; //force of wind to move raindrops sideways
var g = 9.81; //good ol' gravity

var cnv;
function setup() {
  cnv = createCanvas(1024, 800);
  centerCanvas();
  background(100);
  fill("purple"); //moved color declaration here so it happens once per sketch iteration
  noStroke();
  
  num_raindrops = 500;
  makeItRain(num_raindrops);
} 

function draw() {
  background(100); //refresh background
  //show raindrops
  windForce = 0;//figure out a way to make this look good? 0.o
  for(var i = 0; i < raindrops.length; i++){
    if(raindrops[i].y_pos <= height){
    	raindrops[i].show();
    	raindrops[i].drop(g, windForce);
    }
    else{
      raindrops.splice(i,1);
      append(raindrops, new Raindrop(random(width), 0));
    }
  }
}

function makeItRain(density){
  raindrops = [];
  for(var i = 0; i < density; i++){
    raindrops[i] = new Raindrop(random(width), random(height));
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW && num_raindrops !== 0){
    num_raindrops -= 100;
    background(100);
    makeItRain(num_raindrops);
  }
  if(keyCode === RIGHT_ARROW){
    num_raindrops += 100;
    background(100);
    makeItRain(num_raindrops);
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