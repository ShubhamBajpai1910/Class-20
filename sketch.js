var car , wall;
var speed , weight;

function setup() {
  speed=random(55,90);
  weight=random(400,1000);

  createCanvas(1600,700);
  

  car=createSprite(200,275,50,50);
  car.shapeColor="cyan";
 //if(car.x-wall.x===wall.width/2+car.width/2){
  // Deformation<100
  // car.shapeColor="green";
 //}
  car.velocityX=speed;
 
  
  wall=createSprite(1000,275,60,height/2);
  wall.shapeColor="blue";

}

function draw() {
  background("black");  
  deformation=0.5*weight*speed*speed/22500

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*width*speed*speed/22500;
  }

  if(deformation>180){
    car.shapeColor="red";
  }

  if(deformation<100){
    car.shapeColor="lime";
  }

  drawSprites();
}