class Drop{
    constructor(x, y){
        var options={
            isStatic: false,
            friction: 0.1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 3, options);
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);            
        noStroke();
        fill(23, 147, 223);
        ellipseMode(RADIUS);
        ellipse(0, 0, 3, 3);
        pop();
       
    }
    update(){
        if(this.body.position.y > 800){
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: 1})
        }
    }
}