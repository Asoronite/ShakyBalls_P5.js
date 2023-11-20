
const saveParams = {
  sketchName: "gg-sketch"
}

// Params for canvas
const canvasParams = {
  holder: document.getElementById('canvas'),
  state: false,
  mouseX: false,
  mouseY: false,
  mouseLock: false,
  background: 255,
  gui: true,
  mode: 'canvas', // canvas or svg … SVG mode is experimental 
};
getCanvasHolderSize();

// Params for the drawing
const drawingParams = {
  strokeWeight: 1,
  strokeWeightMax: 10,
  strokeWeightStep: 0.1,

  // rows : 10
  // rowsMin:1
  // rowsMax:50

  // cols : 10
  // colsMin:1
  // colsMax:50
};

// Params for logging
const loggingParams = {
  targetDrawingParams: document.getElementById('drawingParams'),
  targetCanvasParams: document.getElementById('canvasParams'),
  state: false
};


let placeholder = 0
//Classes
//############################################################################ */





/* ###########################################################################
Custom Functions
############################################################################ */





/* ###########################################################################
P5 Functions
############################################################################ */

function setup() {

  let canvas;
  if (canvasParams.mode === 'SVG') {
    canvas = createCanvas(canvasParams.w, canvasParams.h, SVG);
  } else { 
    canvas = createCanvas(canvasParams.w, canvasParams.h);
    canvas.parent("canvas");
  }

  // Display & Render Options
  frameRate(20);
  angleMode(DEGREES);
  smooth();

  // GUI Management
  if (canvasParams.gui) { 
    const sketchGUI = createGui('Params');
    sketchGUI.addObject(drawingParams);
    //noLoop();
        background(255);

  

  }

  // Anything else
  placeholder = width / 26;

}


let randomX

function draw() {
  background(255);
  let rawZahl = 10
  let colZahl = 10
  //randomSeed(0)
  
  fill(0);
  
  for (let x = 0; x < colZahl; x++) {
    for (let y = 0; y < rawZahl; y++) {
      
      
      let mausX;
        if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
          mausX = map(mouseX, 0, width, 0, 500);
          lastValidMouseX = mausX; 
        } else {
          mausX = lastValidMouseX;
        }
        let posX = (x * width + placeholder) / 10 + (width / 26);
        
        let distance = map(dist(posX, 0, mausX, 0), 0, width, width/4, 0);
        
        randomX = random(-distance, distance);
      
        let randomY = random(-distance, distance);
        
        let posY = (y * height + randomY) / 10 + (width/ 26);
        
        placeholder = randomX;
        
        ellipse((x * width + randomX) / 10 + width / 26, posY, width / 13);
        
        

  }













}}
  












function keyPressed() {

}



function mousePressed() {
  


}




function mouseReleased() {

}



function mouseDragged() {}



function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) clear();
}





/* ###########################################################################
Service Functions
############################################################################ */



function getCanvasHolderSize() {
  canvasParams.w = canvasParams.holder.clientWidth;
  canvasParams.h = canvasParams.holder.clientHeight;
}



function resizeMyCanvas() {
  getCanvasHolderSize();
  resizeCanvas(canvasParams.w, canvasParams.h);
}



function windowResized() {
  resizeMyCanvas();
}



function logInfo(content) {

  if (loggingParams.targetDrawingParams) {
    loggingParams.targetDrawingParams.innerHTML = helperPrettifyLogs(drawingParams);
  }

  if (loggingParams.targetCanvasParams) {
    loggingParams.targetCanvasParams.innerHTML = helperPrettifyLogs(canvasParams);
  }

}

