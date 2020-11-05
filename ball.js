class WBall
{
    constructor(x,y,radius)
    {
        this.body = Bodies.circle(x,y,radius,{isStatic:false});
        this.radius=radius;

        World.add(world,this.body);
        console.log(this.body);
    }
    display()
    {
        var pos=this.body.position;
         push();
         fill("green");
            ellipseMode(CENTER);
            ellipse(pos.x,pos.y,this.radius,this.radius);
         pop();
    }
}