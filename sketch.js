var wall, thickness;
var bullet, speed, weight
var SANIC //completly useless variable

function setup() {
  createCanvas(1200,400);
  bullet  = createSprite(200, 200,20,20)
  thickness = random(22,83)
  wall = createSprite(1100, 200, thickness, height/2)
  speed = random(223, 321)
  bullet.velocityX = speed
  weight = random(55,90)
  
  wall.shapeColor = color(80,80,80)

}
function collided(bullet, wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x
  if (bulletRightEdge > wallLeftEdge){
    return true
  }
  return false
}
function draw() {
  background(0,0,0); 
  if(collided(bullet, wall)){
    bullet.velocityX = 0
    var dmg = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    console.log(dmg)
    if(dmg > 10){
      wall.shapeColor = color(255,0,0)

    }
    if(dmg<10){
      wall.shapeColor = color(0,255,0)
    }
  }

      drawSprites();
}