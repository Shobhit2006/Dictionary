//var PLAY = 1;
//var END = 0;
var gameState="";
var wordSound,word;
var input;
var greetings;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage
var cloudsGroup, cloudImage;
var form;
var play;
var initialText="Check Your Vocabulary";

var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound
var spellCheck;
var bg;
var level1Dictionary,level2Dictionary,levelDictionary;
var horn,hornImg;
var textB;
var userInput;
var clapAni;

function preload(){
   
  hornImg= loadImage("horn.png");
  bg=loadImage("images/alphaBg.jpg")
//clapAni=loadAnimation("words/clapping/clapping.gif");

  
  
}

function setup() {
  createCanvas(500, 500);
//clap = createSprite(200,200);
//clap.addAnimation("clap",clapAni);
play = createSprite(170,200,100,50);

level1Dictionary = [["day","words/3 letter/day--_gb_1.mp3"],["fat","words/3 letter/fat--_gb_1.mp3"],["map","words/3 letter/map--_gb_1.mp3"]]

  
wordSound = loadSound(level1Dictionary[0][1]);

  
  
}

function spellCheck1(){
  greeting.html('');
userInput=input.value();

if(userInput.toLowerCase()===myDictionary[0][0]){
greeting.html('Spelling is correct');
}
else{
  greeting.html('Spelling Incorrect')
}

}

function draw() {
  
  background(bg);
  
  
  
  

    
if(mousePressedOver(horn)){

   wordSound.play();
   }

   if(mousePressedOver(play)){

    gameState="level1";
    
    }

    if(gameState==="level1"){
      play.visible=false;
      initialText="Spell the word";
      level1();
      
    }

   
    
    
   drawSprites();

   textSize(25)
   stroke("white");
   fill("white");
   text(initialText,130,100);

  
}

function nextWord(){
  wordSound = loadSound(level1Dictionary[1][1])
}

function level1(){
  input = createInput();
  input.position(300,300);

  greeting=createElement('h3');
  greeting.position(180,120);

  next = createButton('Next Word');
  
  next.position(300,255);
  next.mousePressed(nextWord);

  spellCheck = createButton('spell check');
  
  spellCheck.position(180,255);
  spellCheck.mousePressed(spellCheck1);
  

  
  
  

  var message = "This is a message";
 console.log(message)

  //form = new Form();
  

  
  horn = createSprite(150,150)
  horn.addImage("horn",hornImg);
  horn.scale=0.008

}


