class ground{
    constructor(width,height){
        var ground_options={
            isStatic: true
        }
        this.body=Bodies.rectangle(700,450,width,height,ground_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        fill("yellow");
        rectMode(CENTER);
        rect(700,450,this.width,this.height);
    }
}