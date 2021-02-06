const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var physics, planet



function setup() {
  createCanvas(800,400);
  physics = Engine.create()
  planet = physics.world
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400, 380, 800, 50,ground_options)
  World.add(planet, ground)
  var ball_options ={
    restitution:1.5
  }
  ball = Bodies.circle(400, 50, 30, ball_options)
  World.add(planet, ball)
}

function draw() {
  background(0);  
  Engine.update(physics)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800, 50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20,20)
  drawSprites();
}