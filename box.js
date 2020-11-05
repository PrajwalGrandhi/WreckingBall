class Box
{
    constructor(x,y,width,height)
    {
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:false});
        this.width=width;
        this.height=height;

        World .add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
         push();
         fill("green");
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
         pop();
    }
}