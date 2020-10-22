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

    
}

function draw(){
    Engine.update(engine);
    background(69, 70, 75);

    if (frameCount%1 === 0){
        drops.push(new Drop(random(0, 400), 1));
    }

    if (frameCount%1 === 0){
        drops.push(new Drop(random(0, 400),1));
    }

    for (var k = 0; k < drops.length; k++){
        drops[k].display();
    }
    
    umbrella.display();

    drawSprites();
}   

