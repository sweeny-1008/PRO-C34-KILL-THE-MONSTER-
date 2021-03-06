const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
//preload the images here

backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1200, 500);
  // create sprites here
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(600,height,1000,20); 
  
  box1 = new Box(500,320,70,70);
  box2 = new Box(500,420,70,70);
  box3 = new Box(500,320,70,70);
  box4 = new Box(500,320,70,70);
  box5 = new Box(500,320,70,70);
  box6 = new Box(600,320,70,70);
  box7 = new Box(600,320,70,70);
  box8 = new Box(600,320,70,70);
  box9 = new Box(600,320,70,70); 
  box10 = new Box(600,420,70,70);
  box11 = new Box(700,420,70,70);
  box12 = new Box(700,420,70,70);
  box13= new Box(700,420,70,70);
  box14 = new Box(700,420,70,70);
  box15 = new Box(700,420,70,70);

  hero = new hero(100,320,70,70);
  monster= new monster(1000,20,50,50);
 
  fly = new fly(hero.body,{x:200, y:10});

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

ground.display();

fill ("pink")
box1.display();
fill ("pink")
box2.display();
fill ("pink")
box3.display();
fill("pink")
box4.display();
fill("pink")
box5.display();
fill("pink")
box6.display();
fill("pink")
box7.display();
fill("pink")
box8.display();
fill("pink")
box9.display();
fill("pink")
box10.display();
fill("pink")
box11.display();
fill("pink")
box12.display();
fill("pink")
box13.display();
fill("pink")
box14.display();
fill("pink")
box15.display();
monster.display();
hero.display();
fly.display();
}

  function mouseDragged(){
   
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}


