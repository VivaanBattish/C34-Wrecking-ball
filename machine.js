class machine {
    constructor(x,y,width,height,angle) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options,angle);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
  };
