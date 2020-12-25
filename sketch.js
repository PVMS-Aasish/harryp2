var harrypotter,harrypotterImg;
var form,game,player;
var database;
var gameState=0;
var playerCount;
var title,titleImg;
var bg1,bg1Img;

function preload(){

    harrypotterImg= loadImage("harry potter flying1.png")
    titleImg = loadImage("title.png");
    bg1Img=loadImage("background1.jpg")

}

function setup(){
createCanvas(900,900);

database = firebase.database();
game = new Game();
game.getState();
game.start();

harrypotter=createSprite(300,400,50,50);
harrypotter.addImage("harrypotter",harrypotterImg)

title=createSprite(400,150,50,50);
title.addImage("title",titleImg)


}
function draw(){
background(bg1Img);

  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }


drawSprites();
}