class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB, 
            'stiffness': 0.0015,
            'length': 70
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
    
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
    fly(){
       this.sling.bodyA = null;
    }
}