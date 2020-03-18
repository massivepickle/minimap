var lvl = 1;
var difficulty = 1;
var lives = 3;
var create = true;
var gem1,gem2,gem3;
var player;
var robot = [];
var edge;

//level 1
var l1c1_top, l1c1_right, l1c1_bottom, l1c1_left; //layer 1

//level2
var l2c1_top, l2c1_right, l2c1_bottom, l2c1_left; //layer 1
var l2nw1, l2ne1, l2se1, l2sw1;                   //layer 1 corners
var l2c2_top, l2c2_right, l2c2_bottom, l2c2_left; //layer 2

//level 3
var l3c1_top, l3c1_right, l3c1_bottom, l3c1_left; //layer 1
var l3nw1, l3ne1, l3se1, l3sw1;                   //layer 1 corners
var l3c2_top, l3c2_right, l3c2_bottom, l3c2_left; //layer 2
var l3nw2, l3ne2, l3se2, l3sw2;                   //layer 2 corners
var l3c2_top, l3c2_right, l3c2_bottom, l3c2_left; //layer 3
var l3nw3, l3ne3, l3se3, l3sw3;                   //layer 3 corners

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  level = new Level;
  player = createSprite(100,100,10,10);
  robot[0] = createSprite(50,50,10,10);
  edge = createEdgeSprites();
  player.speed = 5;
}

function draw() {
  background(255);  
  level.play();
  console.log(lives);
  
  drawSprites();
}