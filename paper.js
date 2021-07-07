class Paper{
    constructor(x,y,width,height){
      var options={
        isstatic : false,
        restitution:0.3,
        friction:0,
        density:1.2

      
      } 
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      this.image=loadImage("paper.png")
      World.add(world,this.body)
    }
    display(){
    
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate (pos.x,pos.y)
        imageMode(CENTER)
        fill("red")
        image(this.image,0,10,this.height,this.height)
        pop ()

        
    }
}