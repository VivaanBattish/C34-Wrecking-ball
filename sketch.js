const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var slingshot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new machine(210,340,200,100);
    h1 = new machine(255,205,15,195,PI/2);
    h2 = new machine(360,115,300,15);
   
  
    box1 = new Box(700,320);
    box2 = new Box(750,320);
    box3 = new Box(700,270);
    box4 = new Box(750,270);
    box5 = new Box(700,220);
    box6 = new Box(750,220);
    box7 = new Box(700,170);
    box8 = new Box(750,170);
    box9 = new Box(700,120);
    box10 = new Box(750,120);

    WBall = new Ball(500,120);
    
    

   
    slingshot = new Sling(WBall.body,{x:500, y:120});
}

function draw(){
    background(153,255,255);
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   
    box3.display();
    box4.display();
    
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    slingshot.display(); 

    WBall.display();

    platform.display();
    
    h1.display();
    h2.display();

    text("Press left arrow to move the ball left",600,50);
    stroke("black");
    text("Press rigth arrow to move the ball right",600,75);
    stroke("black");
}


function keyPressed(){
   if(keyCode === 37){
      Matter.Body.applyForce(WBall.body, WBall.body.position, {x: -100, y: -100})
    }

    if(keyCode === 39){
        Matter.Body.applyForce(WBall.body, WBall.body.position, {x: 100, y: 100})
    }
}

