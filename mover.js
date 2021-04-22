class Mover{
  constructor(){
    this.earth = createVector(width/2-50,height/2+50);
    this.loc = createVector(width/2,height/2);
    this.vel = createVector(1.5,1);
    this.acc = createVector(0,0);
  }

  update(){
    //let mouse = createVector(mouseX,mouseY);
    this.acc = p5.Vector.sub(this.earth,this.loc);
    this.acc.setMag(0.15);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(4);
  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.loc.x,this.loc.y,16,16);
    ellipse(this.earth.x,this.earth.y,30,30);
  }

  checkEdges() {
    if (this.loc.x > width) {
      this.loc.x = 0;
    } else if (this.loc.x < 0) {
      this.loc.x = width;
    }

    if (this.loc.y > height) {
      this.loc.y = 0;
    } else if (this.loc.y < 0) {
      this.loc.y = height;
    }
  }
}