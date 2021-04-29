function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 300,80,30);
  movingRect.shapeColor = "green";
}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  fixedRect.debug = true;
  movingRect.debug = true;
  console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    &&
    fixedRect.x - movingRect.x  < fixedRect.width/2 + movingRect.width/2
    &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 )
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

    
  }
  else
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

    

  drawSprites();
  
}