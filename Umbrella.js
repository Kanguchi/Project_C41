class Umbrella{
    constructor(x, y){
        var options={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 90, options);
        this.image = loadAnimation("images/walking/walking_8.png", "images/walking/walking_7.png", "images/walking/walking_6.png", "images/walking/walking_5.png", "images/walking/walking_4.png", "images/walking/walking_3.png", "images/walking/walking_2.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //animationMode(CENTER);
        animation(this.image, -10, 70);
    }
}