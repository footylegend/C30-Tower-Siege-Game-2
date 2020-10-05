const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

var ground, stand;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,
box20,box21,box22,box23,box24,box25,box26,box27,box28;

var ball;
var string;

var ball_Img;

function preload(){
  ball_Img=loadImage("ball.jpg");
}

function setup() {
  createCanvas(1300,600);
 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);
 
 ground = new Ground(700,590,1550,20);
 stand = new Ground(1000,450,400,20);

 box1 = new Box(850,415,40,50);
 box2 = new Box(900,415,40,50);
 box3 = new Box(950,415,40,50);
 box4 = new Box(1000,415,40,50);
 box5 = new Box(1050,415,40,50);
 box6 = new Box(1100,415,40,50);
 box7 = new Box(1150,415,40,50);
 box8 = new Box(875,365,40,50);
 box9 = new Box(925,365,40,50);
 box10 = new Box(975,365,40,50);
 box11 = new Box(1025,365,40,50);
 box12 = new Box(1075,365,40,50);
 box13 = new Box(1125,365,40,50);
 box14 = new Box(900,315,40,50);
 box15 = new Box(950,315,40,50);
 box16 = new Box(1000,315,40,50);
 box17 = new Box(1050,315,40,50);
 box18 = new Box(1100,315,40,50);
 box19 = new Box(925,265,40,50);
 box20 = new Box(975,265,40,50);
 box21 = new Box(1025,265,40,50);
 box22 = new Box(1075,265,40,50);
 box23 = new Box(950,215,40,50);
 box24 = new Box(1000,215,40,50);
 box25 = new Box(1050,215,40,50);
 box26 = new Box(975,165,40,50);
 box27 = new Box(1025,165,40,50);
 box28 = new Box(1000,115,40,50);
 
 ball = Bodies.circle(200,200,40);
 World.add(world,  ball);
 string = new SlingShot(this.ball,{x:200, y:200});
}

function draw() {
  background("orange"); 
  //displaying objects
  ground.display(); 
  stand.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
 

  imageMode(CENTER)
  image(ball_Img ,ball.position.x,ball.position.y,40, 40);
 
  string.display();
  fill("turquoise");
  textSize(40);
  text("Siege these colorful blocks using the baseball",100,100);
}//making the ball work with the rubber band
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  string.fly();   
}
//attaching the ball again to the rubberBand by pressing space
function keyPressed(){
  if(keyCode===32){
  string.attach(this.ball);
}
}
