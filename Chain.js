class Chain
{
    constructor(bodyA,bodyB)
    {
        var options={
            bodyA:bodyA,
            pointB:bodyB,
            stiffness:0.001,
            length:60
        }
         this.chain = constraint.create(options);

         World.add(world,this.chain)
    }
    display()
    {
          stroke("grey");
          line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
     
    }
}