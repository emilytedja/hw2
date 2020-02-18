function setup() {
  createCanvas(400, 400);
}

function printE(x, y) {
  line (x, y, x, y+100);
  line (x, y, x+40, y) ;
  line (x, y+50, x+40, y+50);
  line (x, y+100, x+40, y+100);
}

function printM(x, y) {
  line (x, y, x, y+100);
  line (x, y, x+30, y+50);
  line (x+60, y, x+30, y+50); 
  line (x+60, y, x+60, y+100);
} 

function printI(x, y){
  line (x, y, x+40, y);
  line (x+20, y, x+20, y+100);
  line (x, y+100, x+40, y+100);
}

function printL(x, y){
  line(x, y, x, y+100);
  line(x, y+100, x+40, y+100);
}

function printY(x, y){
  line(x, y, x+30, y+40);
  line(x+60, y, x+30, y+40);
  line(x+30, y+40, x+30, y+100);
}

function draw() {
  background(220);
    printE(50,100);
    printM(100,100);
    printI(170, 100);
    printL(220, 100);
    printY(270, 100);
}
