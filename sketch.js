let x1, x2, y1, y2, y3, dx1, dx2, dy1, dy2, dy3;
let dxDiag, dyDiag;
let diagX, diagY;
let fontSize = 24;
let fontGrowing = true;
let growCount = 0;

function setup() {
  createCanvas(400, 400);

  // Initialize positions
  x1 = 175;
  x2 = 230;
  dx1 = random(0.5, 2);
  dx2 = random(0.5, 2);

  y1 = 135;
  y2 = 110;
  y3 = 250; // new y for second y-axis shape
  dy1 = random(0.5, 2);
  dy2 = random(0.5, 2);
  dy3 = random(0.5, 2);

  // Diagonal shape
  diagX = 200;
  diagY = 270;
  dxDiag = random(0.5, 2);
  dyDiag = random(0.5, 2);
}

function draw() {
  background(220);


  // Animate eye
  x1 += dx1;
  x2 += dx2;
  if (x1 < 165 || x1 > 185) dx1 *= -1;
  if (x2 < 220 || x2 > 240) dx2 *= -1;

  // Animate y-axis shapes (mouth, nose, triangle)
  y1 += dy1;
  y2 += dy2;
  y3 += dy3;
  if (y1 < 125 || y1 > 145) dy1 *= -1;
  if (y2 < 100 || y2 > 120) dy2 *= -1;
  if (y3 < 240 || y3 > 260) dy3 *= -1;

  // Animate diagonal thing
  diagX += dxDiag;
  diagY += dyDiag;
  if (diagX < 190 || diagX > 210) dxDiag *= -1;
  if (diagY < 260 || diagY > 280) dyDiag *= -1;

  // Back Hair
  fill(100, 50, 0);
  rect(140, 110, 120, 150, 20);

  // Head
  fill(250, 200, 150);
  circle(200, 100, 150);

  // Eyes 
  strokeWeight(7);
  stroke(0);
  point(x1, 80);
  point(x2, 80);

  // Eyelashes
  strokeWeight(2);
  line(x1 - 5, 75, x1 - 15, 70);
  line(x1, 73, x1 - 10, 65);
  line(x1 + 5, 75, x1, 65);
  line(x2 - 5, 75, x2 + 5, 70);
  line(x2, 73, x2 + 10, 65);
  line(x2 + 5, 75, x2 + 15, 65);

  // Nose 
  fill(250, 200, 150);
  noStroke();
  triangle(200, y2 - 10, 195, y2 + 10, 205, y2 + 10);

  // Mouth 
  fill(255, 0, 0);
  ellipse(200, y1, 30, 15);

  // Hair Front
  fill(100, 50, 0);
  arc(200, 60, 160, 100, PI, TWO_PI);
  rect(120, 60, 20, 60, 10);
  rect(260, 60, 20, 60, 10);

  // Body
  fill(200, 167, 180);
  ellipse(200, 320, 250, 220);

  // Shirt design
  fill(255, 215, 0);
  triangle(180, y3, 220, y3, 200, y3 + 20);       
  triangle(160, 270, 240, 270, diagX, diagY);      
  triangle(140, 290, 260, 290, 200, 310);
  triangle(120, 310, 280, 310, 200, 330);
  triangle(100, 330, 300, 330, 200, 350);

  // Arms
  fill(200, 167, 180);
  rect(320, 280, 50, 10);
  rect(30, 280, 50, 10);
   // TITLE with pulsating size
  textAlign(CENTER);
  textSize(fontSize);
  text("Animated Self-Portrait", width / 2, 30);

  if (fontGrowing) {
    fontSize += 0.5;
    if (fontSize >= 34) {
      growCount++;
      fontGrowing = false;
    }
  } else {
    fontSize -= 0.5;
    if (fontSize <= 24) {
      growCount++;
      fontGrowing = true;
    }
  }
  if (growCount >= 10) growCount = 0;
}