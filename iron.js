class Iron {
    constructor(x, y, width, height){
        var options = {
            'density':30,
            'restituition':0.1,
            'friction':1.0,
            'mass':25
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill('red');
     rect(0,0, this.width, this.height);
     pop();
    }
    }