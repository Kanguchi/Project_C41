const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var thunderbolt;
var maxDrops = 200;
var drops = [];

function preload(){
    thunderbolt = loadAnimation("images/thunderbolt/1.png", "images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
}

function setup(){
    createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200, 550);

    if (frameCount % 150 === 0){
        for (var i = 0; i<maxDrops; i++){
            drops.push(new Drop(random(0, 400), random(0, 400)));
        }
    }

    
}

function draw(){
    Engine.update(engine);
    background(69, 70, 75);

    
    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();   
    }
    drawSprites();
    console.log(drops.length);
}   


