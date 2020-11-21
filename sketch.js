
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar1,bar2,bar3;
var ball;
var platform;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bar1=new dustbin(970,360,30,150);
	bar2=new dustbin(1085,420,200,30);
	bar3=new dustbin(1170,360,30,150);
	ball=new Paper(100,420);
	platform=new ground(1400,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bar1.display();
  bar2.display();
  bar3.display();
  ball.display();
  platform.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-95});
	}
}