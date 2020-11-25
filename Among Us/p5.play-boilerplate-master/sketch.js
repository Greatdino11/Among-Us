var bg, bgImg, iBlocker1, iBlocker2, iBlocker3, iBlocker4, iBlocker5, iBlocker6, iBlocker7, iBlocker8, iBlocker9, iBlocker10;
var test, limeImg;
var bgForEmergency;
var startEButton;

function preload(){
  bgImg = loadImage("images/bg.jpg");
  limeImg = loadImage("images/lime.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  bg = createSprite(displayWidth/2-200,displayHeight/2+650,displayWidth, displayHeight);
  bg.addImage(bgImg);
  bg.scale = 2;

  iBlocker1 = createSprite(displayWidth/2-11, displayHeight/2, 225, 150);
  iBlocker1.setCollider("circle", 0, 0, 80);
  iBlocker1.visible = false;

  iBlocker2 = createSprite(displayWidth/3+17, displayHeight/4-22.5, 225, 150);
  iBlocker2.setCollider("circle", 0, 0, 80);
  iBlocker2.visible = false;

  iBlocker3 = createSprite(displayWidth/2+183, displayHeight/4-22.5, 225, 150);
  iBlocker3.setCollider("circle", 0, 0, 80);
  iBlocker3.visible = false;

  iBlocker4 = createSprite(displayWidth/3+17, displayHeight/2+200, 225, 150);
  iBlocker4.setCollider("circle", 0, 0, 80);
  iBlocker4.visible = false;

  iBlocker5 = createSprite(displayWidth/2+183, displayHeight/2+200, 225, 150);
  iBlocker5.setCollider("circle", 0, 0, 80);
  iBlocker5.visible = false;

  iBlocker6 = createSprite(displayWidth/8-260, displayHeight/5, 675, 200);
  iBlocker6.setCollider("rectangle", 0, 0, 675, 200);
  iBlocker6.visible = false;

  iBlocker7 = createSprite(displayWidth/5-60, displayHeight/2+140, 60, 225);
  iBlocker7.setCollider("rectangle", 0, 0, 60, 225);
  iBlocker7.visible = false;
  
  iBlocker8 = createSprite(displayWidth/5-140, displayHeight/2+57.5, 110, 60);
  iBlocker8.setCollider("rectangle", 0, 0, 110, 60);
  iBlocker8.visible = false;

  iBlocker9 = createSprite(displayWidth/-11+20, displayHeight/2+57.5, 110, 60);
  iBlocker9.setCollider("rectangle", 0, 0, 110, 60);
  iBlocker9.visible = false;

  iBlocker10 = createSprite(displayWidth/-11-50, displayHeight/2+365, 60, 675);
  iBlocker10.setCollider("rectangle", 0, 0, 60, 675);
  iBlocker10.visible = false;

  test = createSprite(displayWidth/2-200,displayHeight/2,30,30);
  test.addImage(limeImg);
  test.scale = 0.2;
  test.setCollider("circle", 0, 0, 160);
  //test.debug = true;

  bgForEmergency = createSprite(test.x, test.y, displayWidth*3/4, displayHeight*3/4);
  bgForEmergency.shapeColor = "#e8e8e8";
  bgForEmergency.visible = false;

  startEButton = createButton('Call Emergency');
  startEButton.visible = false;
}

function draw() {
  background(0); 

  if(keyDown("W")){
    test.y = test.y-8;
  }
  if(keyDown("S")){
    test.y = test.y+8;
  }
  if(keyDown("A")){
    test.x = test.x-8;
  }
  if(keyDown("D")){
    test.x = test.x+8;
  }

  if(test.isTouching(iBlocker1)){
    bgForEmergency.visible = true;
    bgForEmergency.x = camera.x;
    bgForEmergency.y = camera.y;
    startEButton.position(displayWidth/2, displayHeight/2);
    startEButton.visible = true;
  }else{
    bgForEmergency.visible = false;
    startEButton.hide();
  }

  test.collide(iBlocker1);
  test.collide(iBlocker2);
  test.collide(iBlocker3);
  test.collide(iBlocker4);
  test.collide(iBlocker5);
  test.collide(iBlocker6);
  test.collide(iBlocker7);
  test.collide(iBlocker8);
  test.collide(iBlocker9);
  test.collide(iBlocker10);

  camera.position.x = test.x;
  camera.position.y = test.y;

  drawSprites();
}