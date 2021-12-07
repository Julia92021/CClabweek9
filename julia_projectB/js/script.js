let cells = [];
let imgfile1 = 'strawberry.jpg';
let imgfile2 = 'celery.jpg';
let imgfile3 = 'onion.jpg';
let imgfile  = imgfile1;

let img;

function setup() {
  let canvas = createCanvas(1050, 850);
  canvas.parent("myCanvas");
  //background(155, 200, 220);
}
function preload() {
  img = loadImage(imgfile);
  }
function keyPressed(){
    if(key=='a'){
      imgfile = imgfile1;
      preload();
      background(img);
    }
    else if(key=='s'){
      imgfile = imgfile2;
      preload();
      background(img);
    }
    else if(key=='d'){
      imgfile = imgfile3;
      preload();
      background(img);
    }
  }
function draw() {
  //background(155, 200, 220);
  background(img);
  for (let a = cells.length-1; a >= 0; a--) {
    let c = cells[a];
    for (let b = cells.length-1; b >= 0; b--) {
      if (a != b) {
        let other = cells[b];
        c.push(other);
      }
    }
    c.grow();
    c.age();
    c.move();
    c.display();
    // remove
    if (c.isDone) {
      cells.splice(a, 1); // index, quantity
    }
  }
}

function mousePressed() {
  cells.push(new Cell(mouseX, mouseY, random(1, 3)));
}

class Cell {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-0.1, 0.1);
    this.ySpd = random(-0.1, 0.1);
    this.radMembrane = rad;
    this.radNucleus = rad * 0.65;
    this.angleVar = random(0.15, 0.25);
    this.variVar = random(0.005, 0.015);
    //
    this.lifespan = 1.00;
    this.lifeReduction = random(0.001, 0.002);
    this.isDone = false;
  }
  push(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    if (distance < this.radMembrane + other.radMembrane) {
      let adj = 0.01;
      let pushX = (other.x - this.x) * adj;
      let pushY = (other.y - this.y) * adj;
      this.x -= pushX;
      this.y -= pushY;
      other.x += pushX;
      other.y += pushY;
    }
  }
  age() {
    if (this.lifespan > 0) {
      this.lifespan -= this.lifeReduction;
    } else {
      this.lifespan = 0;
      this.isDone = true;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    //scale(0.25);
    this.drawNucleus();
    this.drawMembrane();
    pop();
  }
  grow() {
    if (this.radMembrane < 30) {
       this.radMembrane += 0.1;
      this.radNucleus = this.radMembrane * 0.65;
    }
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  drawNucleus() {
    strokeWeight(1);
    stroke(255, 255 * this.lifespan);
    fill(205, 102, 94, 255 * this.lifespan);
    circle(0, 0, this.radNucleus);
  }
  drawMembrane() {
    fill(255, 30 * this.lifespan);
    stroke(255, 255 * this.lifespan);
    strokeWeight(5);
    beginShape();
    for (let deg = 0; deg < 360; deg += 20) {
      let angle = radians(deg + frameCount * this.angleVar);
      let freq = angle;
      let variation = map(sin(frameCount * this.variVar), -1, 1, 1, 4);
      let radDistFluct = sin(angle * variation) * this.radMembrane * 0.05;
      let radDist = this.radMembrane * 0.95 + radDistFluct;

      let x = cos(freq) * radDist;
      let y = sin(freq) * radDist;
      let dia = 10;

      //circle(x, y, dia);
      curveVertex(x, y);
    }
    endShape(CLOSE);
  }
}
