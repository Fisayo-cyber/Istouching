var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,30,70);
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (Math.abs(fixedRect.x-movingRect.x)<fixedRect.width/2 + movingRect.width/2 && 
  Math.abs(fixedRect.y-movingRect.y)<fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor= "green";
    fixedRect.shapeColor= "green";

  }

  
  else{
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  
  console.log(fixedRect.x-movingRect.x)
  drawSprites();
}