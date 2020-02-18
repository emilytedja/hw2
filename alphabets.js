function setup() {
  createCanvas(500, 400);
}

function PrintA(x, y){
  line (x+20, y, x, y+100);
  line (x+20, y, x+40, y+100);
  line (x+10, y+50, x+30, y+50);
}

function PrintB(x, y){
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x+40, y, x+40, y+100);
  line (x, y+50, x+40, y+50);
  line (x, y+100, x+40, y+100);
}

function PrintC (x, y){
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x, y+100, x+40, y+100);
  line (x+40, y, x+40, y+20);
  line (x+40, y+100, x+40, y+80);
}

function PrintD(x, y) {
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x+40, y, x+40, y+100);
  line (x, y+100, x+40, y+100);
}

function PrintE(x, y) {
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x, y+50, x+40, y+50);
  line (x, y+100, x+40, y+100);
}

function PrintF(x, y) {
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x, y+50, x+40, y+50);
}

function PrintG(x, y){
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x+40, y, x+40, y+30);
  line (x, y+100, x+40, y+100);
  line (x+40, y+60, x+40, y+100);
  line (x+20, y+60, x+40, y+60);
  line (x+20, y+60, x+20, y+70);
}

function PrintH(x, y){
  line (x, y, x, y+100);
  line (x, y+50, x+40, y+50);
  line (x+40, y, x+40, y+100);
}

function PrintI(x, y){
  line (x, y, x+40, y);
  line (x+20, y, x+20, y+100);
  line (x, y+100, x+40, y+100);
}

function PrintJ(x, y){
  line (x, y, x+40, y);
  line (x+20, y, x+20, y+100);
  line (x, y+100, x+20, y+100);
  line (x, y+60, x, y+100);
}

function PrintK(x, y){
  line (x, y, x, y+100);
  line (x, y+50, x+40, y);
  line (x, y+50, x+40, y+100);
}

function PrintL(x, y){
  line(x, y, x, y+100);
  line(x, y+100, x+40, y+100);
}

function PrintM(x, y) {
  line (x, y, x, y+100);
  line (x, y, x+20, y+50);
  line (x+40, y, x+20, y+50); 
  line (x+40, y, x+40, y+100);
} 
  
function PrintN(x, y){
  line (x, y, x, y+100);
  line (x, y, x+40, y+100);
  line (x+40, y, x+40, y+100);
}

function PrintO(x, y){
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x+40, y, x+40, y+100);
  line (x, y+100, x+40, y+100);
  line (x+15, y+30, x+25, y+30);
  line (x+15, y+30, x+15, y+70);
  line (x+25, y+30, x+25, y+70);
  line (x+15, y+70, x+25, y+70);
}

function PrintP(x, y){
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x+40, y, x+40, y+40);
  line (x, y+40, x+40, y+40);
}

function PrintQ(x, y){
  line (x, y, x, y+90);
  line (x, y, x+30, y);
  line (x+30, y, x+30, y+90);
  line (x, y+90, x+30, y+90);
  line (x+15, y+70, x+40, y+100);
}

function PrintR(x, y){
  line (x, y, x, y+100);
  line (x, y, x+40, y);
  line (x+40, y, x+40, y+40);
  line (x, y+40, x+40, y+40);
  line (x, y+40, x+40, y+100);
}

function PrintS(x, y){
  line (x, y, x, y+50);
  line (x, y, x+40, y);
  line (x+40, y, x+40, y+30);
  line (x, y+50, x+40, y+50);
  line (x+40, y+50, x+40, y+100);
  line (x, y+100, x+40, y+100);
  line (x, y+70, x, y+100);
}

function PrintT(x, y){
  line (x, y, x+40, y);
  line (x+20, y, x+20, y+100);
}

function PrintU(x, y){
  line (x, y, x, y+100);
  line (x+40, y, x+40, y+100);
  line (x, y+100, x+40, y+100);
}

function PrintV(x, y){
  line (x, y, x+20, y+100);
  line (x+40, y, x+20, y+100);
}

function PrintW(x, y){
  line (x, y, x+10, y+100);
  line (x+40, y, x+30, y+100);
  line (x+10, y+100, x+20, y+50);
  line (x+20, y+50, x+30, y+100);
}

function PrintX(x, y){
  line (x, y, x+40, y+100);
  line (x, y+100, x+40, y);
}

function PrintY(x, y){
  line(x, y, x+20, y+40);
  line(x+40, y, x+20, y+40);
  line(x+20, y+40, x+20, y+100);
}

function PrintZ (x, y){
  line (x, y, x+40, y);
  line (x, y+100, x+40, y);
  line (x, y+100, x+40, y+100);
}

function draw() {
  background(220);
  PrintA(40, 20);
  PrintB(90, 20);
  PrintC(140, 20);
  PrintD(190, 20);
  PrintE(240, 20);
  PrintF(290, 20);
  PrintG(340, 20);
  PrintH(390, 20);
  PrintI(440, 20);
  PrintJ(40, 140);
  PrintK(90, 140);
  PrintL(140,140);
  PrintM(190, 140);
  PrintN(240, 140);
  PrintO(290, 140);
  PrintP(340, 140);
  PrintQ(390, 140);
  PrintR(440, 140);
  PrintS(40, 260);
  PrintT(90, 260);
  PrintU(140, 260);
  PrintV(190, 260);
  PrintW(240, 260);
  PrintX(290, 260);
  PrintY(340, 260);
  PrintZ(390, 260);
}
