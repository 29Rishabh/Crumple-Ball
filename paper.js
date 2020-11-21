class Paper{
    constructor(x,y){
        var paper_options={
            isStaic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body=Bodies.circle(x,y,25,paper_options);
        World.add(world,this.body);
    }
    display(){
        fill("purple");
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,25,25);
    }
}