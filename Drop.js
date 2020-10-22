class Drop{
    constructor(x, y){
        var options={
            isStatic: false,
            friction: 0.001,
            restitution: 0.1
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);

    }
    display(){  
        noStroke();
        fill(23, 147, 223);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);    
    }
    update(){
        if(this.body.position.y > 800){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})
        }
    }
}