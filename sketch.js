var spriteteste
function setup() {
  createCanvas(400,400);
spriteteste = createSprite(200,200,50,100);
spriteteste.shapeColor = "purple";

}

function draw() 
{
  background(30);
  drawSprites();
if(keyIsDown(UP_ARROW)){
spriteteste.y -= 3;  
}
if(keyIsDown(DOWN_ARROW)){
spriteteste.y += 3;  
}
if(keyIsDown(LEFT_ARROW)){
spriteteste.x -= 3;  
}
if(keyIsDown(RIGHT_ARROW)){
spriteteste.x += 3;  
}
}




