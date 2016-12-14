var plumsTitle = "This Is Just to Say";
var plumLines = ["I have eaten",
"the plums",
"that were in",
"the icebox",
"and which",
"you were probably",
"saving",
"for breakfast",
"Forgive me",
"they were delicious",
"so sweet",
"and so cold"];
var poem = [];
var lexicon = new RiLexicon();

var cnv;

function setup() {
  cnv = createCanvas(450, 650);
  background('#FFE3A0');
  centerCanvas();
  for(var i = 0; i < plumLines.length; i++){
    ritaProcess(plumLines[i]);
  }
  
  displayPoem(poem);
  
}

function ritaProcess(poemLine){
  var output = "";
  var rs = new RiString(poemLine);
  var words = rs.words();
  var pos = rs.pos();
  
  for(var i = 0; i < words.length; i++){
    if(/nn.*/.test(pos[i])){
      output += lexicon.randomWord(pos[i]);
    }
    else if(/jj.*/.test(pos[i])){
      output += lexicon.randomWord(pos[i]);
    }
    else{
      output += words[i];
    }
    output += " ";
  }
  append(poem, output);
}

function displayPoem(ritaPoem){
  var last_position = 100;
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(35);
  textFont("Courier New");
  fill(0);
  stroke(0);
  text(plumsTitle, width/2, 100);
  textSize(20);
  for(var i = 0; i < ritaPoem.length; i++){
    if( i%4 === 0){
      text(" ", width/2, (last_position) + (30));
      last_position += 30;
    }
    text(ritaPoem[i], width/2, (last_position) + (30));
    last_position += 30;
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