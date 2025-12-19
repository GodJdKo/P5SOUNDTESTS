

function preload(){


frameRate(100);

   
}

let marge = 20;
let grilleX;
let grilleY;

function setup() {
 createCanvas(windowWidth, windowHeight);
}



function draw() {
    grilleX = mouseX/10+5;
    grilleY = mouseY/10+5;
    tailleX = mouseX/10+mouseY-width/2 ;
    tailleY = mouseY/10+mouseX-height/2;
     background(0);
     fill (0);
     noStroke();
for (let x = marge; x < width-marge; x+=grilleX) {
    for (let y = marge; y < height-marge; y+=grilleY) {
    rect(x+noise(random(5000),frameCount*0.01)*200, y+noise(random(5000),frameCount*0.01)*200, tailleX+noise(27,frameCount*0.1)*80, tailleY+noise(7,frameCount*0.1)*80);
    fill (noise(random(255),frameCount*0.3)*255);
    
        }

    }
}
