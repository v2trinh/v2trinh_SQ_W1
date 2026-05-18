// ============================================================
// Week 1 Example 1: Images and Shapes
// ============================================================

// Variables declared outside of setup() and draw() are
// accessible everywhere in the sketch (global scope).
let jengaImg;

// ------------------------------------------------------------
// preload()
// Runs once before setup(). Always load images and sounds here
// so they are ready before the sketch tries to use them.
// If you load images inside setup() they may not appear.
// ------------------------------------------------------------
function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  jengaImg = loadImage("assets/images/jenga.jpg");
}

// ------------------------------------------------------------
// setup()
// Runs once at the very start of the sketch.
// Use it to set up your canvas and draw things that
// only need to appear once (not animated).
// ------------------------------------------------------------
function setup() {
  // createCanvas(width, height) sets the size of your canvas in pixels
  createCanvas(800, 450);

  // background() fills the canvas with a colour
  // A single number = greyscale (0 is black, 255 is white)
  background(213, 255, 255); // light cyan

  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------

  // fill() sets the colour used for shapes AND text
  // Three numbers = red, green, blue (each 0–255)
  fill(255, 255, 255); // white

  // textAlign() controls how text is anchored to its x position
  // CENTER means the x coordinate is the middle of the text
  textAlign(CENTER);

  // textSize can be changed at any point — it applies to text drawn after it
  textSize(14);

  // width and height are built-in p5.js variables that
  // always hold the canvas width and height
  fill(20);
  text("Image loaded from assets/images/", width / 4, 65);
  text("Drawn using p5.js shapes", (width / 4) * 3, 65);

  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------

  // image(img, x, y, width, height) draws a loaded image
  // x and y are the TOP-LEFT corner of the image
  // The last two arguments resize the image to fit that space
  image(jengaImg, 35, 90, 300, 300);

  // ----------------------------------------------------------
  // SECTION 3: DRAWING SHAPES (a controller made of shapes!)
  // ----------------------------------------------------------
  // All shapes are drawn relative to an origin point (originX, originY)
  // so the whole drawing can be moved by changing those two values.

  // originX and originY act as the anchor point for the whole drawing.
  // Changing these two values moves the entire controller at once —
  // a useful habit for keeping drawings easy to reposition.
  let originX = 550; // left edge of the shape controller
  let originY = 350; // top edge of the shape controller

  // stroke() sets the outline colour — stroke(r,g,b) or a single greyscale value
  // strokeWeight() sets how thick the outline is in pixels
  // fill() sets the inside colour of the shape
  stroke(80);
  strokeWeight(2);
  fill(210, 180, 140); // tan

  // --- 1st level jenga stack ---
  // rect(x, y, width, height, cornerRadius)
  // x, y = TOP-LEFT corner of the rectangle
  // The last argument rounds all four corners by that many pixels
  rect(originX, originY, 102, 30, 2);

  // --- 2nd level jenga stack ---
  rect(originX, originY - 30, 34, 30, 2);
  rect(originX + 68, originY - 30, 34, 30, 2);

  // --- 3rd level jenga stack ---
  rect(originX, originY - 60, 102, 30, 2);

  // --- 4th level jenga stack ---
  rect(originX, originY - 90, 34, 30, 2);
  rect(originX + 68, originY - 90, 34, 30, 2);

  // --- 5th level jenga stack ---
  rect(originX, originY - 120, 102, 30, 2);

  // --- 6th level jenga stack ---
  rect(originX + 34, originY - 150, 34, 30, 2);

  // --- 7th level jenga stack ---
  rect(originX, originY - 180, 102, 30, 2);

  // --- 8th level jenga stack ---
  rect(originX, originY - 210, 34, 30, 2);
  rect(originX + 68, originY - 210, 34, 30, 2);

  // --- 9th level jenga stack ---
  rect(originX, originY - 240, 102, 30, 2);

  // --- 10th level jenga stack ---
  rect(originX, originY - 270, 34, 30, 2);
  rect(originX + 34, originY - 270, 34, 30, 2);

  // --- Labels under each controller ---
  let textX = 450;
  let textY = 85;
  noStroke();
  fill(20);
  textSize(13);
  textAlign(CENTER);
  text("jenga.jpg", textX - 150, textY + 295);
  text("drawn with shapes", textX + 150, textY + 315);

  // --- Dividing line between the two controllers ---
  stroke(80);
  strokeWeight(1);
  line(width / 2, 70, width / 2, 400);

  // --- Title ---
  noStroke();
  text("Week 1 Sidequest: Images and Shapes", textX - 50, textY - 50);

  // --- Fallen jenga pieces ---
  stroke(80);
  strokeWeight(2);
  fill(210, 180, 140); // tan
  rect(originX + 105, originY, 34, 30, 2);
  rect(originX + 115, originY - 30, 34, 30, 2);
  rotate(-PI / 6); // rotate the canvas by -30 degrees (counterclockwise)
  rect(originX - 290, originY + 210, 34, 30, 2);
}

// ------------------------------------------------------------
// draw()
// Runs repeatedly in a loop after setup() finishes.
// Anything you want to animate or update goes here.
// This sketch has nothing to animate, so draw() is empty.
// ------------------------------------------------------------
function draw() {
  // Nothing here for now — everything is drawn once in setup()
}