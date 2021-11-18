let Color = "Green";
let Color2 = "BurlyWood";
let Color3 = "Coral";
let Color4 = "DarkGoldenRod";
let Color5 = "LightSkyBlue";
let Color6 = "DimGrey";
let Color7 = "Gold";
let Color8 = "Ivory";
let Color9 = "Linen";
let x1 = 0;
let y1 = 0;
let musicNote;
let dia = 30;
let dia2 = 60;
let plusMinus = 1;
let leaf = [];
let leaf2 = [];
let leaf3 = [];
let Leaves;
let Leaves2;
let leaves3;
let Text =
  "To interact with the program, you can press the a or w key on the keyboard (to return to the original result after pressing the a or w key, press any other key expect for a and w) or use the mouse and click on the center of each of the green leaves (the ellipse shapes) or use the sliders to change the color of the sketch's background.";
let Text2 = "Z z z";

let slider;
let slider2;
let slider3;

function setup() {
  slider = addSlider();
  slider2 = addSlider();
  slider3 = addSlider();
  let canvas = createCanvas(1500, 800);
  canvas.parent("myCanvas");
  musicNote = new music(random() * width, random() * height);
  Leaves = new Button(random() * width, random() * height);
  Leaves2 = new Button2(random() * width, random() * height);
  Leaves3 = new Button3(random() * width, random() * height);
}

function draw() {

  let r = slider.value;
  let b = slider2.value;
  let g = slider3.value;

  keyPressed();
  function keyPressed() {
    if (key == 'a') {
      background(r,b,g);
      push();
      //The Moon
      fill(Color8);
      circle(80, 80, 75);

      //Thelarge branch
      noStroke();
      fill(Color4);
      rect(0, 510, 1550, 30);
      //The small branches and the leaves
      rect(250, 530, 15, 50);
      rect(610, 530, 15, 50);
      rect(950, 530, 15, 50);

      fill(Color);
      ellipse(250, 590, 30, 70);
      ellipse(610, 590, 30, 70);
      ellipse(950, 590, 30, 70);
      pop();

      push();
      fill(255);
      textSize(25);
      text(Text, 250, 30, 800, 200);
      textSize(30);
      text(Text2, 200, 220, 100, 50);
      text(Text2, 550, 220, 100, 50);
      text(Text2, 900, 220, 100, 50);
      pop();

      drawBirdNight(x1, y1);
    }
    else if (key == 'w') {
      background(r,b,g);
      push();
      //The Sun
      fill(Color7);
      circle(80, 80, 75);

      //Thelarge branch
      noStroke();
      fill(Color4);
      rect(0, 510, 1550, 30);
      //The small branches and the leaves
      rect(250, 530, 15, 50);
      rect(610, 530, 15, 50);
      rect(950, 530, 15, 50);

      fill(Color);
      ellipse(250, 590, 30, 70);
      ellipse(610, 590, 30, 70);
      ellipse(950, 590, 30, 70);
      pop();

      push();
      fill(0);
      textSize(20);
      text(Text, 210, 10, 1200, 200);
      pop();

      drawBirdFlight(x1, y1);
    } else {
      background(r,b,g);
      push();
      //The Sun
      fill(Color7);
      circle(80, 80, 75);

      //Thelarge branch
      noStroke();
      fill(Color4);
      rect(0, 510, 1550, 30);
      //The small branches and the leaves
      rect(250, 530, 15, 50);
      rect(610, 530, 15, 50);
      rect(950, 530, 15, 50);

      fill(Color);
      ellipse(250, 590, 30, 70);
      ellipse(610, 590, 30, 70);
      ellipse(950, 590, 30, 70);
      pop();

      push();
      fill(0);
      textSize(25);
      text(Text, 250, 30, 800, 200);
      pop();

      drawBird(x1, y1);
      drawBird2(x1, y1);
      drawBird3(x1, y1);

      musicNote.update();
      musicNote.display();

      noStroke();

      if (random() < 1.0) {
        leaf.push(new Button(width / 2, height, random(5, 10)));
      }

      for (let i = 0; i < leaf.length; i++) {
        let l = leaf[i];
        l.move();
        l.fall();
        l.checkMouse();
        l.display();
      }
      while (leaf.length > 500) {
        leaf.splice(0, 1);
      }

      if (random() < 1.0) {
        // 2%
        leaf2.push(new Button2(width / 2, height, random(5, 10)));
      }

      for (let i = 0; i < leaf2.length; i++) {
        let l = leaf2[i];
        l.move();
        l.fall();
        l.checkMouse();
        l.display();
      }
      while (leaf2.length > 500) {
        leaf2.splice(0, 1);
      }

      if (random() < 1.0) {
        leaf3.push(new Button3(width / 2, height, random(5, 10)));
      }

      for (let i = 0; i < leaf3.length; i++) {
        let l = leaf3[i];
        l.move();
        l.fall();
        l.checkMouse();
        l.display();
      }
      while (leaf3.length > 500) {
        leaf3.splice(0, 1);
      }

      Leaves.move();
      Leaves.fall();
      Leaves.checkMouse();
      Leaves.display();

      Leaves2.move();
      Leaves2.fall();
      Leaves2.checkMouse();
      Leaves2.display();

      Leaves3.move();
      Leaves3.fall();
      Leaves3.checkMouse();
      Leaves3.display();
    }
  }
}

function addSlider(){
  let elt = document.createElement('input');
  elt.type = "range";
  elt.min = "0";
  elt.max = "255";
  elt.value = "235";
  document.body.appendChild(elt);
  return elt;
}

class Button {
  constructor(x, y, rad) {
    this.x = 640;
    this.y = 450;

    this.rad = rad;
    this.xSpd = random(-1, 1) * 1;
    this.ySpd = random(-8, -5);

    this.ellipse_x2 = 610;
    this.ellipse_y2 = 590;
    this.ellipse_width2 = 30;
    this.ellipse_height2 = 70;

    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.isDone = false;
  }
  move() {
    this.x += -this.xSpd;
    this.y += -this.ySpd;
  }
  fall() {
    this.ySpd += -0.1;
  }
  checkMouse() {
    let distance = dist(this.ellipse_x2, this.ellipse_y2, mouseX, mouseY);
    if (distance < this.rad) {
      // in
      this.r = 0;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.isDone = true;
      }
    } else {
      // out
      this.r = 0;
      this.g = 255;
      this.b = 0;
    }
  }
  display() {
    push();
    fill(this.r, this.g, this.b);
    if (this.isDone) {
      fill(255);
      circle(this.x, this.y, this.rad * 2);
      fill(Color);
      ellipse(
        this.ellipse_x2,
        this.ellipse_y2,
        this.ellipse_width2,
        this.ellipse_height2
      );
    } else {
      noStroke();
      fill(Color);
      ellipse(
        this.ellipse_x2,
        this.ellipse_y2,
        this.ellipse_width2,
        this.ellipse_height2
      );
    }
    pop();
  }
}

class Button2 {
  constructor(x, y, rad) {
    this.x = 297;
    this.y = 450;

    this.rad = rad;
    this.xSpd = random(-1, 1) * 1;
    this.ySpd = random(-8, -5);

    this.ellipse_x = 250;
    this.ellipse_y = 590;
    this.ellipse_width = 30;
    this.ellipse_height = 70;

    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.isDone = false;
  }
  move() {
    this.x += -this.xSpd;
    this.y += -this.ySpd;
  }
  fall() {
    this.ySpd += -0.1;
  }
  checkMouse() {
    let distance = dist(this.ellipse_x, this.ellipse_y, mouseX, mouseY);
    if (distance < this.rad) {
      // in
      this.r = 0;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.isDone = true;
      }
    } else {
      // out
      this.r = 0;
      this.g = 255;
      this.b = 0;
    }
  }
  display() {
    push();
    fill(this.r, this.g, this.b);
    if (this.isDone) {
      fill(255);
      circle(this.x, this.y, this.rad * 2);
      fill(Color);
      ellipse(
        this.ellipse_x,
        this.ellipse_y,
        this.ellipse_width,
        this.ellipse_height
      );
    } else {
      noStroke();
      fill(Color);
      ellipse(
        this.ellipse_x,
        this.ellipse_y,
        this.ellipse_width,
        this.ellipse_height
      );
    }
    pop();
  }
}

class Button3 {
  constructor(x, y, rad) {
    this.x = 990;
    this.y = 450;

    this.rad = rad;
    this.xSpd = random(-1, 1) * 1;
    this.ySpd = random(-8, -5);

    this.ellipse_x3 = 950;
    this.ellipse_y3 = 590;
    this.ellipse_width3 = 30;
    this.ellipse_height3 = 70;

    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.isDone = false;
  }
  move() {
    this.x += -this.xSpd;
    this.y += -this.ySpd;
  }
  fall() {
    this.ySpd += -0.1;
  }
  checkMouse() {
    let distance = dist(this.ellipse_x3, this.ellipse_y3, mouseX, mouseY);
    if (distance < this.rad) {
      // in
      this.r = 0;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.isDone = true;
      }
    } else {
      // out
      this.r = 0;
      this.g = 255;
      this.b = 0;
    }
  }
  display() {
    push();
    fill(this.r, this.g, this.b);
    if (this.isDone) {
      fill(255);
      circle(this.x, this.y, this.rad * 2);
      fill(Color);
      ellipse(
        this.ellipse_x3,
        this.ellipse_y3,
        this.ellipse_width3,
        this.ellipse_height3
      );
    } else {
      noStroke();
      fill(Color);
      ellipse(
        this.ellipse_x3,
        this.ellipse_y3,
        this.ellipse_width3,
        this.ellipse_height3
      );
    }
    pop();
  }
}

function drawBirdFlight(x1, y1) {
  push();
  translate(50, 250);
  scale(1);

  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(284, 291);
  point(268, 219);
  point(221, 217);
  point(232, 291);
  push();
  stroke(Color4);
  fill(Color9);
  beginShape();
  curveVertex(290, 205);
  curveVertex(290, 205);
  curveVertex(383, -150);
  curveVertex(155, -45);
  curveVertex(140, 105);
  curveVertex(140, 105);
  endShape();
  pop();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  fill(Color9);
  beginShape();
  curveVertex(135, 76);
  curveVertex(135, 76);
  curveVertex(135, 180);
  curveVertex(250, 200);
  curveVertex(300, 150);
  curveVertex(250, 100);
  curveVertex(300, 150);
  endShape();

  //The eye
  fill(255);
  ellipse(80, 0, 25, 25);
  fill(0);
  ellipse(80, 0, 15, 15);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 203, 55, 10);
  rect(150, 207, 50, 10);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(235, 210, 256, 235);
  line(235, 205, 256, 205);
  line(200, 215, 221, 240);
  line(200, 210, 221, 210);
  pop();

  push();
  translate(400, 250);
  scale(1.0);

  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(284, 291);
  point(268, 219);
  point(221, 217);
  point(232, 291);
  push();
  stroke(Color4);
  fill(Color9);
  beginShape();
  curveVertex(290, 205);
  curveVertex(290, 205);
  curveVertex(383, -150);
  curveVertex(155, -45);
  curveVertex(140, 105);
  curveVertex(140, 105);
  endShape();
  pop();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  fill(Color9);
  beginShape();
  curveVertex(135, 76);
  curveVertex(135, 76);
  curveVertex(135, 180);
  curveVertex(250, 200);
  curveVertex(300, 150);
  curveVertex(250, 100);
  curveVertex(300, 150);
  endShape();

  //The eye
  fill(255);
  ellipse(80, 0, 25, 25);
  fill(0);
  ellipse(80, 0, 15, 15);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 203, 55, 10);
  rect(150, 207, 50, 10);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(235, 210, 256, 235);
  line(235, 205, 256, 205);
  line(200, 215, 221, 240);
  line(200, 210, 221, 210);
  pop();

  push();
  translate(750, 250);
  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(284, 291);
  point(268, 219);
  point(221, 217);
  point(232, 291);
  push();
  stroke(Color4);
  fill(Color9);
  beginShape();
  curveVertex(290, 205);
  curveVertex(290, 205);
  curveVertex(383, -150);
  curveVertex(155, -45);
  curveVertex(140, 105);
  curveVertex(140, 105);
  endShape();
  pop();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  fill(Color9);
  beginShape();
  curveVertex(135, 76);
  curveVertex(135, 76);
  curveVertex(135, 180);
  curveVertex(250, 200);
  curveVertex(300, 150);
  curveVertex(250, 100);
  curveVertex(300, 150);
  endShape();

  //The eye
  fill(255);
  ellipse(80, 0, 25, 25);
  fill(0);
  ellipse(80, 0, 15, 15);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 203, 55, 10);
  rect(150, 207, 50, 10);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(235, 210, 256, 235);
  line(235, 205, 256, 205);
  line(200, 215, 221, 240);
  line(200, 210, 221, 210);
  pop();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
function drawBirdNight(x1, y1) {
  push();
  translate(50, 250);
  scale(1);
  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  fill(Color2);
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  //The spots on the bird
  fill(0);
  ellipse(200, 150, 20, 20);
  ellipse(220, 180, 15, 15);
  ellipse(230, 130, 20, 20);
  ellipse(260, 180, 17, 17);
  ellipse(290, 190, 20, 20);
  ellipse(320, 200, 16, 16);

  //The eye
  //fill(255);
  fill(0);
  arc(85, 5, 30, 6, 0, PI);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 206, 10, 55);
  rect(150, 210, 10, 50);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(152, 254, 135, 280);
  line(155, 254, 154, 282);
  line(180, 259, 165, 280);
  line(184, 259, 183, 280);
  pop();

  push();
  translate(400, 250);
  scale(1.0);
  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  fill(Color2);
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  //The spots on the bird
  fill(0);
  ellipse(200, 150, 20, 20);
  ellipse(220, 180, 15, 15);
  ellipse(230, 130, 20, 20);
  ellipse(260, 180, 17, 17);
  ellipse(290, 190, 20, 20);
  ellipse(320, 200, 16, 16);

  //The eye
  fill(0);
  arc(85, 5, 30, 6, 0, PI);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 206, 10, 55);
  rect(150, 210, 10, 50);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(152, 254, 135, 280);
  line(155, 254, 154, 282);
  line(180, 259, 165, 280);
  line(184, 259, 183, 280);
  pop();

  push();
  translate(750, 250);
  scale(1.0);
  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  fill(Color2);
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  //The spots on the bird
  fill(0);
  ellipse(200, 150, 20, 20);
  ellipse(220, 180, 15, 15);
  ellipse(230, 130, 20, 20);
  ellipse(260, 180, 17, 17);
  ellipse(290, 190, 20, 20);
  ellipse(320, 200, 16, 16);

  //The eye
  fill(0);
  arc(85, 5, 30, 6, 0, PI);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 206, 10, 55);
  rect(150, 210, 10, 50);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(152, 254, 135, 280);
  line(155, 254, 154, 282);
  line(180, 259, 165, 280);
  line(184, 259, 183, 280);
  pop();
}
////////////////////////////////////////////////////////////////////////////////////////////
function drawBird(x1, y1) {
  //background(220);
  push();
  translate(50, 250);
  scale(1);
  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  fill(Color2);
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  //The spots on the bird
  fill(0);
  ellipse(200, 150, 20, 20);
  ellipse(220, 180, 15, 15);
  ellipse(230, 130, 20, 20);
  ellipse(260, 180, 17, 17);
  ellipse(290, 190, 20, 20);
  ellipse(320, 200, 16, 16);

  //The eye
  fill(255);
  ellipse(80, 0, 25, 25);
  fill(0);
  ellipse(80, 0, 15, 15);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 206, 10, 55);
  rect(150, 210, 10, 50);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(152, 254, 135, 280);
  line(155, 254, 154, 282);
  line(180, 259, 165, 280);
  line(184, 259, 183, 280);
  pop();
}

////////////////////////////////////////////////////////////////////////////////////////
function drawBird2(x1, y1) {
  push();
  translate(400, 250);
  scale(1.0);
  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  fill(Color2);
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  //The spots on the bird
  fill(0);
  ellipse(200, 150, 20, 20);
  ellipse(220, 180, 15, 15);
  ellipse(230, 130, 20, 20);
  ellipse(260, 180, 17, 17);
  ellipse(290, 190, 20, 20);
  ellipse(320, 200, 16, 16);

  //The eye
  fill(255);
  ellipse(80, 0, 25, 25);
  fill(0);
  ellipse(80, 0, 15, 15);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 206, 10, 55);
  rect(150, 210, 10, 50);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(152, 254, 135, 280);
  line(155, 254, 154, 282);
  line(180, 259, 165, 280);
  line(184, 259, 183, 280);
  pop();
}

///////////////////////////////////////////////////////////////////////////////////////////
function drawBird3(x1, y1) {
  push();
  translate(750, 250);
  scale(1.0);
  noStroke();
  fill(Color2);
  quad(40, 15, 165, 90, 205, 165, 40, 25);

  //Starting to build the bird
  fill(Color2);
  strokeWeight(5);
  point(40, 15);
  point(40, 25);
  strokeWeight(1);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 25);
  curveVertex(40, 25);
  endShape();

  strokeWeight(5);
  point(40, 15);
  point(68, -29);
  point(120, -17);
  point(120, 71);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 15);
  curveVertex(40, 15);
  curveVertex(68, -29);
  curveVertex(120, -17);
  curveVertex(120, 71);
  curveVertex(120, 71);
  endShape();

  strokeWeight(5);
  point(40, 25);
  point(55, 50);
  point(55, 200);
  point(250, 200);
  strokeWeight(1);
  fill(Color2);
  beginShape();
  curveVertex(40, 25);
  curveVertex(40, 25);
  curveVertex(55, 40);
  curveVertex(55, 200);
  curveVertex(250, 200);
  curveVertex(250, 200);
  endShape();

  strokeWeight(5);
  point(120, 71);
  point(250, 100);
  point(350, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(120, 71);
  curveVertex(120, 71);
  curveVertex(250, 100);
  curveVertex(350, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  strokeWeight(5);
  point(150, 76);
  point(150, 180);
  point(250, 200);
  point(450, 250);
  strokeWeight(1);
  fill(Color4);
  beginShape();
  curveVertex(150, 76);
  curveVertex(150, 76);
  curveVertex(150, 180);
  curveVertex(250, 200);
  curveVertex(450, 250);
  curveVertex(450, 250);
  endShape();

  //The spots on the bird
  fill(0);
  ellipse(200, 150, 20, 20);
  ellipse(220, 180, 15, 15);
  ellipse(230, 130, 20, 20);
  ellipse(260, 180, 17, 17);
  ellipse(290, 190, 20, 20);
  ellipse(320, 200, 16, 16);

  //The eye
  fill(255);
  ellipse(80, 0, 25, 25);
  fill(0);
  ellipse(80, 0, 15, 15);

  //The Beak
  fill(0);
  triangle(10, 20, 40, 25, 40, 15);

  //The legs
  fill(Color3);
  rect(180, 206, 10, 55);
  rect(150, 210, 10, 50);

  //The feet
  stroke(0);
  strokeWeight(3);
  line(152, 254, 135, 280);
  line(155, 254, 154, 282);
  line(180, 259, 165, 280);
  line(184, 259, 183, 280);
  pop();
}

class music {
  constructor(startX, startY) {
    let value = 0;
    this.x = startX;
    this.y = startY;
    this.speed = random(-1, 5);

    this.ellipse_x = 70;
    this.ellipse_y = 95;
    this.ellipse_width = 32;
    this.ellipse_height = 32;

    this.rect_x = 74;
    this.rect_y = 53;
    this.rect_width = 10;
    this.rect_height = 50;

    this.rect_x2 = 74;
    this.rect_y2 = 50;
    this.rect_width2 = 20;
    this.rect_height2 = 8;

    this.angle = 0;
    this.freq = random(0.05, 0.08);
    this.amp = random(0.15, 0.2);
  }
  update() {
    this.move();
    this.bounce();
    this.swing();
  }
  move() {
    this.x += this.speed;
    this.y += this.speed;

    this.ellipse_x += this.speed;
    this.ellipse_y += this.speed;

    this.rect_x += this.speed;
    this.rect_y += this.speed;

    this.rect_x2 += this.speed;
    this.rect_y2 += this.speed;
  }
  swing() {
    this.angle = sin(frameCount * this.freq) * this.amp;
  }
  bounce() {
    if (this.x < 0 || this.x > windowWidth) {
      this.speed *= -1;
    }
    if (this.y < 0 || this.y > windowHeight) {
      this.speed *= -1;
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(0);
    ellipse(
      this.ellipse_x,
      this.ellipse_y,
      this.ellipse_width,
      this.ellipse_height
    );
    rect(this.rect_x, this.rect_y, this.rect_width, this.rect_height);
    rect(this.rect_x2, this.rect_y2, this.rect_width2, this.rect_height2);

    ellipse(
      this.ellipse_x + 50,
      this.ellipse_y + 50,
      this.ellipse_width,
      this.ellipse_height
    );
    rect(this.rect_x + 50, this.rect_y + 50, this.rect_width, this.rect_height);
    rect(
      this.rect_x2 + 50,
      this.rect_y2 + 50,
      this.rect_width2,
      this.rect_height2
    );

    ellipse(
      this.ellipse_x + 100,
      this.ellipse_y + 100,
      this.ellipse_width,
      this.ellipse_height
    );
    rect(
      this.rect_x + 100,
      this.rect_y + 100,
      this.rect_width,
      this.rect_height
    );
    rect(
      this.rect_x2 + 100,
      this.rect_y2 + 100,
      this.rect_width2,
      this.rect_height2
    );
    pop();
  }
}
