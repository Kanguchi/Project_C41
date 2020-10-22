class Umbrella{
    constructor(x, y){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 90, options);
        this.image = loadAnimation("images/walking/walking_8.png", "images/walking/walking_7.png", "images/walking/walking_6.png", "images/walking/walking_5.png", "images/walking/walking_4.png", "images/walking/walking_3.png", "images/walking/walking_2.png");
        this.radius = 90;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //animationMode(CENTER);
        animation(this.image,pos.x,pos.y+60,300,300);
    }
}