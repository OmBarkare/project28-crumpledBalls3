class Dustbin{
    constructor(x,y){
        this.bottomBody = Bodies.rectangle(x,y,10,10,{isStatic:true});
        this.leftBody = Bodies.rectangle(x-35,y-35,10,70,{isStatic:true});
        this.rightBody = Bodies.rectangle(x+35,y-35,10,70,{isStatic:true});
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        this.image = loadImage("SpriteImages/dustbin.png")
    }
    display(){
        var LR, RR, BR;
    //    LR = createSprite(this.leftBody.position.x,this.leftBody.position.y,10,75);
    //    RR = createSprite(this.rightBody.position.x,this.rightBody.position.y,10,75);
    //    BR = createSprite(this.bottomBody.position.x,this.bottomBody.position.y,70,10);
        imageMode(CENTER);
        image(this.image,700, 510, 100, 100);
    }
}