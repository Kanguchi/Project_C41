const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var maxDrops = 200;
var drops = [];

var thunder, thunder1,thunder2,thunder3,thunder4;
var thunderFrame = 0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
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

    rand = Math.round(random(1, 4));
    if (frameCount%80 === 0){
        thunderFrame = frameCount;
        thunder = createSprite(random(10, 370), random(60, 120), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
    }

    if (thunderFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }
    
    umbrella.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();   
    }
    drawSprites();
    console.log(drops.length);
}   


