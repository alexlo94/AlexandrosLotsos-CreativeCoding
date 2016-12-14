var checkAdj; var boolAdj;
var checkNns; var boolNns;
var checkVbs; var boolVbs;
var randomize;
var cnv;

var lexicon = new RiLexicon();
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

function setup() {
  cnv = createCanvas(450, 600);
  background('#FFE3A0');
  centerCanvas();
  checkAdj = createCheckbox('Adjectives', false);
  checkNns = createCheckbox('Nouns', false);
  checkVbs = createCheckbox('Verbs', false);
  button_rand = createButton('Randomize!');
  checkAdj.position(cnv.x, cnv.height + cnv.y);
  checkNns.position(checkAdj.x + 100, cnv.height + cnv.y);
  checkVbs.position(checkNns.x + 80, cnv.height + cnv.y);
  button_rand.position(checkAdj.x + width - button_rand.width, cnv.height + cnv.y);
  
  button_rand.mousePressed(randomize);
  checkAdj.changed(toggleAdj);
  checkNns.changed(toggleNns);
  checkVbs.changed(toggleVbs);
  
  displayPoem(plumLines);
  
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

function ritaProcess(poemLine){
  var output = "";
  var rs = new RiString(poemLine);
  var words = rs.words();
  var pos = rs.pos();
  
  for(var i = 0; i < words.length; i++){
    if(/nn.*/.test(pos[i]) && boolNns){
      output += lexicon.randomWord(pos[i]);
    }
    else if(/jj.*/.test(pos[i]) && boolAdj){
      output += lexicon.randomWord(pos[i]);
    }
    else if(/vb.*/.test(pos[i]) && boolVbs){
      output += lexicon.randomWord(pos[i]);
    }
    else{
      output += words[i];
    }
    output += " ";
  }
  append(poem, output);
}

function randomize(){
  poem = [];
  background('#FFE3A0');
  for(var i = 0; i < plumLines.length; i++){
    ritaProcess(plumLines[i]);
  }
  displayPoem(poem);
}

function toggleAdj(){
  if(checkAdj.checked()){
    boolAdj = true;
  }
  else{
    boolAdj = false;
  }
}
function toggleNns(){
  if(checkNns.checked()){
    boolNns = true;
  }
  else{
    boolNns = false;
  }
}
function toggleVbs(){
  if(checkVbs.checked()){
    boolVbs = true;
  }
  else{
    boolVbs = false;
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
  checkAdj.position(cnv.x, cnv.height + cnv.y);
  checkNns.position(checkAdj.x + 100, cnv.height + cnv.y);
  checkVbs.position(checkNns.x + 100, cnv.height + cnv.y);
  button_rand.position(checkAdj.x + width - button_rand.width, cnv.height + cnv.y);
}