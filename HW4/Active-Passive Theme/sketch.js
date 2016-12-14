//define global vars
var cnv;
var max_width = 700;
var colorPallete;

function setup() {
  cnv = createCanvas(700,700);
  centerCanvas();
  colorMode(HSB, 360, 100, 100);
  noStroke();
  rectMode(CENTER);
  
  colorPallete = [240,224,208,193,177,35,26,18,9,0]; //Hue values for rectangle colors
  
  for(var i = max_width; i > 0; i -= 70){
    fill(colorPallete[(700 - i)/70], 100, 100);
    rect(width/2, height/2, i, i);
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