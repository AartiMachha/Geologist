class Rubber {
    constructor(x, y, radius){
        var options = {
            'density':20,
            'restituition':0.3,
            'friction':0.10
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
    
        World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
     push();
     translate(pos.x,pos.y);
     ellipseMode(CENTER);
     strokeWeight(3);
     stroke('black');
     fill('darkblue');
     ellipse(0,0, this.radius, this.radius);
     pop();
    }
    }