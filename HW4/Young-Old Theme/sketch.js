//define global vars
var cnv;
var sat_step;
var bright_step;

function setup() {
  cnv = createCanvas(700,400);
  centerCanvas();
  colorMode(HSB, 360, 100, 100);
  sat_step = 100/width;
  bright_step = 100/width;
  
  for(var i = 0; i <= width; i++){
    stroke(125, 100 - (i*sat_step), 100 - (i*bright_step/3));
    line(i,0,i,height);
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