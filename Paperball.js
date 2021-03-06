class Paperball{
    constructor(x,y,radius){
        var options = {restitution:0.5, friction:0.7,/*density:0.1,*/ isStatic:false}
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("spriteImages/paperBall1.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
      }
}