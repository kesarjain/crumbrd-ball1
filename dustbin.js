class Dustbin{
    constructor(){
        this.bottombody=Bodies.rectangle(1200,650,200,100);
       World.add(world,this.bottombody)
        
        
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("green")
        fill("red")
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
    };