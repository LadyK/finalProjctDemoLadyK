let c;
let m;
let interval;
let lastTime;
let currentTime;
let scene1;
let scene2;
let scene3;



function setup() {
  createCanvas(800, 800);
  background(0);
  lastTime = 0;
  interval = 10000;
  scene1 = true;
  scene2 = false;
  scene3 = false;
}

function draw() {

  if(frameCount < 500){  // one trick pony; sketch has to be refreshed to repeat
    background(0);

  }
  else if(frameCount > 1000){
    //background(255);
    bigBadAssFunction();
  }
  //print(frameCount);
  //print(millis());


  if(currentTime - lastTime > interval){
    background(255, 0, 0);
    lastTime = currentTime; // record the last time something happened for the next comparison
  }

  if(scene1 == true){
    //runScene1();
  }

  if(scene2 == true){
    //runScene2();
  }

 

}

function mousePressed(){
  //currentTime = millis();
 
  print(getRectArea(3, 4));

  print(getRectArea(-3, 4));

}

function runScene1(){
  bigBadAssFunction();
  scene1 = false;
  scene2 = true;

}
function bigBadAssFunction(){

//
//
//
//




}

function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}











