let img;
function setup() {
  createCanvas(715, 2800);
  background(0);
  img = loadImage("assets/eclipse.jpg");
}
function draw() {
  img.loadPixels();

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let side = random(5, 25);

    let clr = img.get(x, y);

    let r = red(clr) * 1.0;
    let g = green(clr) * 1.0;
    let b = blue(clr) * 1.0;
    fill(r, g, b);
    noStroke();
    square(x, y, side);
  }
  img.updatePixels();
}
