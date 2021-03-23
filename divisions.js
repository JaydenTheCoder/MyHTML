class Divisions{
    constructor(X,Y,width,height){
 var options={
     isStatic:true
 }
this.body=Bodies.rectangle(X,Y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    }
    display(){
 var Position=this.body.position;
 rectMode(CENTER);
 fill("red")
 rect(Position.x,Position.y,this.width,this.height)
    }
}