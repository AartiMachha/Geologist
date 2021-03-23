class Sand {
    constructor(x, y, radius){
        var options = {
            'density':1,
            'restituition':1,
            'friction':5
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
     strokeWeight(2);
     stroke('black');
     fill('red');
     ellipse(0,0, this.radius, this.radius);
     pop();
    }
    }