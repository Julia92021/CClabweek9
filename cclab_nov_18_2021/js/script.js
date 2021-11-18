let sound;
let song;
let amp;
let mic;
let Color = "Pink";
let Color2 = "Green";
function preload(){
  sound=loadSound("assets/beat.mp3");
  song=loadSound("assets/song.mp3");


}
function setup() {
  createCanvas(400, 400);
  amp = new p5.Amplitude();
  //mic = new p5.AudioIn();
  //mic.start();
}

function draw() {
  background(Color);
  //let volume = mic.getLevel();
  let volume = amp.getLevel();
  let dia = map(volume,0,1,10,500);
  noStroke();
  fill(Color2);
  ellipse(width/2, height/2, dia, dia);

  /*let vol = map(mouseY, 0, height, 1, 0, true);
  sound.SetVolume(vol);
  let panning = map(mouseX, 0, width, -1, 1, true);
  sound.pan(panning);*/
}
function mousePressed(){
  if (song.isPlaying()==false){
    song.play();
  }
    else{
      song.pause();
    }
  }
