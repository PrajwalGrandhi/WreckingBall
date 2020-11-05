const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const constraint = Matter.Constraint;
const Body = Matter.Body;

//box
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
//Ground
var G;
//Wrecking ball
var W;
//sling
var sling;

function setup() {
  createCanvas(800,600);

engine = Engine.create();
world = engine.world;

    b1=new Box(250,40,50,50);
    b2=new Box(300,60,50,50);
    b3=new Box(250,60,50,50);
    b4=new Box(200,60,50,50);
    b5=new Box(300,80,50,50);
    b6=new Box(250,80,50,50);
    b7=new Box(200,80,50,50);
    b8=new Box(300,100,50,50);
    b9=new Box(250,100,50,50);
    b10=new Box(200,100,50,50);

  G = new Ground(0,590,2000,20);

  W = new WBall(100,100,70);

sling = new Chain(W.body,{x:200,y:150});

Engine.run(engine);
}

function draw() {
  background("blue");  

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();

  G.display();

  W.display();

  sling.display();
  drawSprites();
  
}
function mouseDragged()
{
  Matter.Body.setPosition(W.body,{x:mouseX,y:mouseY})
}