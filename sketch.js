const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1, stone2;
var hammer;
var rubber1, rubber2;
var iron1, iron2;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;

function setup() {
	var canvas = createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

	stone1 = new Stone(200,150,70,70);
	stone2 = new Stone(800,150,70,70);
	hammer = new Hammer(400,150,85,20);
	rubber1 = new Rubber(500,150,60);
	rubber2 = new Rubber(750,150,60);
	iron1 = new Iron(300,50,150,40);
	iron2 = new Iron(600,50,150,40);
	sand1 = new Sand(850,150,7);
	sand2 = new Sand(850,150,7);
    sand3 = new Sand(851,150,7);
	sand4 = new Sand(851,150,7);
	sand5 = new Sand(852,150,7);
	sand6 = new Sand(852,150,7);
	sand7 = new Sand(852,150,7);
	sand8 = new Sand(853,150,7);
	sand9 = new Sand(853,150,7);
	sand10 = new Sand(853,150,7);

	Engine.run(engine);
  
}


function draw() {
  background('lightblue');
  Engine.update(engine);

  ground.display();
  stone1.display();
  stone2.display();
  hammer.display();
  rubber1.display();
  rubber2.display();
  iron1.display();
  iron2.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  
}



