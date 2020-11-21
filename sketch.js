var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
if(isTouching(movingRect,fixedRect))    {
  movingRect.shapeColor = "white"
  fixedRect.shapeColor = "white"
}
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}
function isTouching(o1,o2){
  if(o1.x-o2.x<o2.width/2+o1.width/2&&o2.x-o1.x<o1.width/2+o2.width/2
    && o1.y-o2.y<o2.height/2+o1.height/2&&o2.y-o1.y<o1.height/2+o2.height/2)
      {
        return true;

    }
else{
  return false;
}





}