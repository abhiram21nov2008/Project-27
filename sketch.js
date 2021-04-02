var handle
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	handle=createSprite(350,200,500,10)
	string1=createSprite(200,300,5,200)
	string2=createSprite(300,300,5,200)
	string3=createSprite(400,300,5,200)
	string4=createSprite(500,300,5,200)
	ball1=createSprite(200,400,50,50)
	ball2=createSprite(300,400,50,50)
	ball3=createSprite(400,400,50,50)
	ball4=createSprite(500,400,50,50)

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



