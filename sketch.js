function setup() {
  createCanvas(425,400);
  backgroundImage = loadImage("nature.jpg");
  mazeImage = loadImage("maze.jpg");
  lionImage = loadImage("lion.png");
  tigerImage = loadImage("1.png");
  snakeImage = loadImage("alien.png");  
  survivalImage = loadImage("survival.png");
  manImage = loadImage("1copy.png");

  man = createSprite(25,13,10,10);
  man.addImage(manImage);
  man.scale = 0.2;

   cardboard1 =createSprite(0,35,120,15);
  cardboard1.shapeColor ="black";
  
   cardboard2 =createSprite(100,0,15,140);
  cardboard2.shapeColor ="black";
  
   cardboard3 =createSprite(100,70,120,15);
  cardboard3.shapeColor ="black";
  
   cardboard4 =createSprite(7,120,15,120);
  cardboard4.shapeColor ="black";
  
   cardboard5 =createSprite(118,110,152,15);
  cardboard5.shapeColor ="black";
  
   cardboard6 =createSprite(197,70,15,95);
  cardboard6.shapeColor ="black";
  
   cardboard7 =createSprite(160,30,60,15);
  cardboard7.shapeColor ="black";
  
   cardboard8 =createSprite(240,70,15,95);
  cardboard8.shapeColor ="black";
  
   cardboard9 =createSprite(300,30,110,15);
  cardboard9.shapeColor ="black";
  
   cardboard10 =createSprite(390,30,15,160);
  cardboard10.shapeColor ="black";
  
   cardboard11 =createSprite(332,65,105,15);
  cardboard11.shapeColor ="black";
  
   cardboard12 =createSprite(110,150,190,15);
  cardboard12.shapeColor ="black";
  
   cardboard13 =createSprite(129,129,15,26);
  cardboard13.shapeColor ="black";
  
   cardboard14 =createSprite(330,125,15,65);
  cardboard14.shapeColor ="black";
  
   cardboard15 =createSprite(285,110,76,15);
  cardboard15.shapeColor ="black";
  
   cardboard16 =createSprite(240,180,15,75);
  cardboard16.shapeColor ="black";
  
   cardboard17 =createSprite(280,180,15,75);
  cardboard17.shapeColor ="black";
  
   cardboard18 =createSprite(260,150,27,15);
  cardboard18.shapeColor ="black";
  
   cardboard19 =createSprite(180,185,105,15);
  cardboard19.shapeColor ="black";
  
   cardboard20 =createSprite(380,140,40,15);
  cardboard20.shapeColor ="black";
  
   cardboard21 =createSprite(330,190,95,15);
  cardboard21.shapeColor ="black";
  
   cardboard22 =createSprite(330,170,15,27);
  cardboard22.shapeColor ="black";
  
   cardboard24 =createSprite(121,205,15,55);
  cardboard24.shapeColor ="black";
  
   cardboard25 =createSprite(85,225,15,90);
  cardboard25.shapeColor ="black";
  
   cardboard26 =createSprite(25,190,55,15);
  cardboard26.shapeColor ="black";
  
   cardboard27 =createSprite(187,225,121,15);
  cardboard27.shapeColor ="black";
  
   cardboard28 =createSprite(170,262,156,15);
  cardboard28.shapeColor ="black";
  
   cardboard29 =createSprite(205,243,15,23);
  cardboard29.shapeColor ="black";
  
   cardboard30 =createSprite(53,225,50,15);
  cardboard30.shapeColor ="black";
  
   cardboard31 =createSprite(45,300,15,90);
  cardboard31.shapeColor ="black";
  
   cardboard32 =createSprite(31,300,15,15);
  cardboard32.shapeColor ="black";
  
   cardboard33 =createSprite(280,240,15,60);
  cardboard33.shapeColor ="black";
  
   cardboard34 =createSprite(195,300,285,15);
  cardboard34.shapeColor ="black";
  
   cardboard35 =createSprite(330,260,15,70);
  cardboard35.shapeColor ="black";
  
   cardboard36 =createSprite(357,270,40,15);
  cardboard36.shapeColor ="black";
  
   cardboard38 =createSprite(380,310,35,15);
  cardboard38.shapeColor ="black";
  
   cardboard39 =createSprite(370,330,15,30);
  cardboard39.shapeColor ="black";
  
   cardboard40 =createSprite(83,337,62,15);
  cardboard40.shapeColor ="black";
  
   cardboard41 =createSprite(106,371,40,15);
  cardboard41.shapeColor ="black";
  
   cardboard42 =createSprite(50,372,100,15);
  cardboard42.shapeColor ="black";
  
   cardboard43 =createSprite(262,337,201,15);
  cardboard43.shapeColor ="black";
  
   cardboard44 =createSprite(248,371,270,15);
  cardboard44.shapeColor ="black";

  cardboard45 = createSprite(390,210,15,200);
  cardboard45.shapeColor = "black" ;

  snake = createSprite(200,280,50,50);
  snake.scale = 0.1;
  snake.addImage(snakeImage);

  survivalkit = createSprite(400,350,50,50);
  survivalkit.addImage(survivalImage);
  survivalkit.scale = 0.4;

  tiger = createSprite(100,91,10,10);
  tiger.scale = 0.2;
  tiger.addImage(tigerImage);
  tiger.velocityX = 2;
  
}

function draw() {
  background(backgroundImage); 
  if (cardboard6.isTouching(tiger)) {
    tiger.velocityX = -2;
  } 
  if (cardboard4.isTouching(tiger)) {
    tiger.velocityX = 2;
  } 

  if (man.collide(survivalkit)){
  text ("You Got Survival Kit",200,200);
  text.shapeColor = red;
  }
  if(keyDown("left")){
    man.x = man.x-3;
   }
   if(keyDown("right")){
    man.x = man.x+3;
  }
  if(keyDown("up")){
    man.y = man.y-3;

  }
  if(keyDown("down")){
    man.y = man.y+3;
   
  }

  drawSprites();
}