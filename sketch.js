
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject,box1,box2,box3;

function preload()
{
	
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


class Paper{

	constructor(x,y,width,height){
	
		var options={
			isStatic:true
			restitution:0.3,
			friction: 0.5,
			density:1.2,

		}
	
	   this.body=Bodies.circle(x,y,radius,options);
	   World.add(world,this.body);
	
	   
	   this.x=x;
	   this.y=y;
	
	
	}
	
	display(){
	
	
	
	push ()
	
	translate(this.body.position.x,this.body.position.y)
	ellipse(x,y,1.5,options);
	
     rotate (this.body.angle);
	
	pop ();
	
	
	
	
	}
	
	
		
	}
	
	function keyPressed(){
 
		if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		}




	}
	class Dustbin{



		box1=createSprite(400,650,200,20);
		
		box2=createSprite(300,620,20,100);
		
		box3=createSprite(500,620,20,100);
		
		
		body1=Bodies.rectangle(400,650,200,20);
		body2=Bodies.rectangle(300,620,20,100);
		body3=Bodies.rectangle(500,620,20,100);
	}


	class Ground{

		constructor(x,y,width,height){
		
			var options={
				isStatic:true
			}
		
		   this.body=Bodies.rectangle(x,y,width,height,options);
		   World.add(world,this.body);
		
		   this.width=width;
		   this.height=height;
		   this.x=x;
		   this.y=y;
		
		
		}
		
		display(){
		rectMode(CENTER);
		
		
		push ()
		
		translate(this.body.position.x,this.body.position.y)
		rotate (this.body.angle);
		rectMode(CENTER);
		fill("black");
		
		rect(0,0,this.width,this.height);
		
		pop ();
		
