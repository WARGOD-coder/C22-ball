const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  var options = {
    isStatic : true
  }
ground = Bodies.rectangle(400, 390, 800, 20,options);
World.add(myworld,ground);
console.log(ground);
 var balloptions={
  restitution: 0.7
 }
ball=Bodies.circle(400, 200, 20,balloptions)
 World.add(myworld,ball)
 console.log(ball);

  Engine.run(myengine);
}

function draw() {
  background(255,255,255);  

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40,40)


  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  //drawSprites();
}