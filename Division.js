class Division{
    constructor(x,y,w,h){
var options={
    restitution=0.4
}
this.body=Bodies.rectangle(x,y,w,h,options);
this.w=w;
this.h=h;
World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTRE);
        fill("white");
        rect(pos.x,pos.y,this.w,this.h);
        
    }
}