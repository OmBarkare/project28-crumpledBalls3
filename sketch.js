
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball, ground, dustbin, rightWall;
var slingshot;

function preload(){
	paperImage = loadImage("SpriteImages/paperball1.png")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paperball(200,300,20);
	ground = new Ground(400,550,800,10);
	rightWall = new Ground(800,300,8,800);
	dustbin = new Dustbin(700,540);
	slingshot = new SlingShot(ball.body,{x:200 ,y:200})

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(220);
	ball.display();
	ground.display();
	dustbin.display();
	slingshot.display();
	
	Engine.update(engine);

	text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY);
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});
}

function mousePressed(){
	Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}