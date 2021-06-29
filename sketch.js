const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
    
    var object_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,300,200,20,object_options);
    World.add(world,ground);

   var ball_options ={
       restitution:2
   }
   ball= Bodies.rectangle(150,90,20,20,ball_options);
   World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("purple");
    rect(ground.position.x,ground.position.y,200,20);
    fill("purple");
    //ellipseMode(RADIUS);
    rect(ball.position.x,ball.position.y,20,20);
}
