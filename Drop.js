class Drop{
    constructor(x, y){
        var options={
            isStatic: false
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
        if (this.body.position.y > 800){
            World.remove(world, this.body);
        }
    }
   
}