var wall,bullet,thickness
var speed,weight;


function setup() {
  createCanvas(1200,400);
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1150,200,thickness,height/2);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
 bullet.velocityX=speed;
  
 bullet.shapeColor=color(225);
}

function draw() {
background(0,0,0);  


if (hasCollided(bullet,wall))
{
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  text(damage,400,50);
  if(damage>10){
    bullet.shapeColor=color(0,255,0)
  }

  if(damage<10){
    bullet.shapeColor=color(0,255,0)
  }

}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftedge=wall.x;
  if(bulletRightEdge>=wallLeftedge){
    return true
  }
  return false;
}
  
  drawSprites();
}