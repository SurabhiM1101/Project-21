var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(28,83);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(1200,200,10,50);
  
  bullet.solidColor="white";
  wall.solidColor=(80,80,80);
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}