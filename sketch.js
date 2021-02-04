const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var drops = [];
var umbrella;
var thunder,thunder1,thunder2,thunder3,thunder4;


function preload(){
    
    thunder1 = loadImage("Thunderbolt/1.png");
    thunder2 = loadImage("Thunderbolt/2.png");
    thunder3 = loadImage("Thunderbolt/3.png");
    thunder4 = loadImage("Thunderbolt/4.png");
    
}

function setup(){
   
    createCanvas(400,700);

    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){

        for(var i = 0; i < 100; i++){

            var drop = new Drops(random(0,400),random(0,400));

            drops.push(drop);
        }
    }

    umbrella = new Umbrella(200,500);    
    
}

function draw(){

    Engine.update(engine);
    background("Lightblue"); 

    for(var i = 0;i < 100 ; i++){

        drops[i].display();
        drops[i].updatePosition();
    }
    
    umbrella.display();

    createThunder();

    drawSprites();
   
}  

function createThunder(){

    if(frameCount % 100 === 0){

        thunder = createSprite(random(10,370),random(10,30),10,10);
        var rand = Math.round(random(1,4));

        switch(rand){

            case 1 : thunder.addImage(thunder1);
                     break;
            case 2 : thunder.addImage(thunder2);
                     break;
            case 3 : thunder.addImage(thunder3);
                     break;
            case 4 : thunder.addImage(thunder4);
                     break;
        }

        thunder.scale = random(0.3,0.6);
        thunder.lifetime = 30;
    }
}

