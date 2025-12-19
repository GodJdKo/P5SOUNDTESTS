function preload(){


frameRate(60);
colorMode(HSL);


/////////////SONS//////////
son=loadSound("sound/ipreferableton.wav");
Nkicksnr=loadSound("sound/nazos/kicksnr.wav");
Nhat=loadSound("sound/nazos/hat.wav");
Nbass=loadSound("sound/nazos/bass.wav");
Nlead=loadSound("sound/nazos/lead.wav");

////////////FONTS//////////
typo=loadFont("fonts/BrettTrial-Regular.otf");
atypo=loadFont("fonts/Epetri-TITE-regular1.otf");

///////////IMAGES//////////
cross=loadImage("img/cross.png");
smile=loadImage("img/smile.png");
wdots=loadImage("img/wdots.png");
vertlines=loadImage("img/vertlines.png");
deg=loadImage("img/deg.png");
blurdot=loadImage("img/blurdot.png");
daft=loadImage("img/daft.png");
justice=loadImage("img/justice.png");
jesus=loadImage("img/jesus.png");
vertebre=loadImage("img/vertebre.png");
play=loadImage("img/play.png");
pause=loadImage("img/pause.png");


//imageMode(CENTER);
img=wdots;
img2=blurdot;
img3=daft;

}

let marge = 190;
let grilleX;
let grilleY;
let kickLvl, hatLvl, bassLvl, leadLvl;

// affichage holds which grille is active (0..4). Start with 1st active.
let affichage = [true, false, false, false, false];

// Track state: each track can be playing or paused (random at loop)
let trackPlaying = {
  kicksnr: true,
  hat: true,
  bass: true,
  lead: true
};

// Store last playback time for each track to detect loop events
let lastTime = {
  kicksnr: 0,
  hat: 0,
  bass: 0,
  lead: 0
};

// Track if we've already processed this loop cycle
let loopProcessed = {
  kicksnr: false,
  hat: false,
  bass: false,
  lead: false
};

// Flag to enable/disable random loop toggling
let randomLoopActive = false;

let fft = new p5.FFT();
let soundPlay=0;
let time=0;
let zoom;
 let bass, lowMid, mid, highMid, treble; 


function setup() {

createCanvas(windowWidth, windowHeight);
 son.loop();
 amp=new p5.Amplitude();
 fft=new p5.FFT();
 
}


function mouseClicked(){
    soundPlay=40;
    if (son.isPlaying()){
        son.pause();
       // print ("paused");
        
        image(pause, width/2-400, height/2-400,800,800);

    } else {
        son.play();
       // print ("playing");
             image(play, width/2-400, height/2-400,800,800);

        }


       if (!Nkicksnr.isPlaying()){
    Nkicksnr.loop();
    Nkicksnr.setVolume(0);
    
  }

  if (!Nhat.isPlaying()){
    Nhat.loop();
    Nhat.setVolume(0);
  }

  if (!Nbass.isPlaying()){
    Nbass.loop();
    Nbass.setVolume(0);
  }

  if (!Nlead.isPlaying()){
    Nlead.loop();
    Nlead.setVolume(0);
  }
    }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    
     

    fft.analyze();
    let level = amp.getLevel();


    //ici on obtient que des valeurs entre 0 et 255
  bass = fft.getEnergy("bass");
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");

    // Check each track for loop event and randomly pause/play (only when active)
    if (randomLoopActive){
      checkLoopEvent(Nkicksnr, 'kicksnr');
      checkLoopEvent(Nhat, 'hat');
      checkLoopEvent(Nbass, 'bass');
      checkLoopEvent(Nlead, 'lead');
    }


    zoom=mouseX*0.00005-0.01;
    time = frameCount*0.01;
   // print(soundPlay);
   //print(affichage1)

background(0);



if (soundPlay>0){
        if (son.isPlaying()){
        tint(0,0,100,soundPlay/30);
         image(play,width/2-400, height/2-400,800,800);
         noTint();
        
    } else {
        tint(0,0,100,soundPlay/30);
         image(pause,width/2-400, height/2-400,800,800);
         noTint();  
    }

    soundPlay--;
    }

    level = amp.getLevel();
    grilleX = mouseX/10+5;
    grilleY = mouseY/10+5;

    rectMode(CENTER);
     
    // Set all audio levels before drawing grilles
    kickLvl = Nkicksnr.getLevel();
    hatLvl = Nhat.getLevel();
    bassLvl = Nbass.getLevel();
    leadLvl = Nlead.getLevel();

    // DEBUG
    console.log('draw() running - affichage[0]:', affichage[0], 'grilleX:', grilleX, 'grilleY:', grilleY);
     
     //noStroke();

    // if (affichage1==true){
    //     grille1();
    // } else {
    //     grille2();
    // }




if (affichage[0]==true){
    grille1();
    son.setVolume(1);
}
if (affichage[1]==true){
    kickLvl = Nkicksnr.getLevel();
    grille2(); 
    textFont(typo);
    son.setVolume(1);
}
if (affichage[2]==true){
    grille3(); 
    son.setVolume(1);
}
if (affichage[3]==true){
    grille4();
    son.setVolume(0);


    // Draw a black contour square matching the screen size
    rectMode(CORNER);
    noFill();
    stroke(0); // Black stroke
    strokeWeight(200); // Adjust thickness as needed
    rect(0, 0, windowWidth, windowHeight); // Draw the square
    rectMode(CENTER);
    strokeWeight(1);
}

fill(255);
stroke(0);

textSize(20);
text ('clickez pour play/pause',width/2,height-50);
text ('1 2 3 4 pour changer de grille',width/2-100,height-20);
textFont(typo);

}

function keyPressed(){




  if (key === '&') {
    affichage.fill(false);
    affichage[0] = true;
    randomLoopActive = false;
    Nkicksnr.setVolume(0);
    Nhat.setVolume(0);
    Nbass.setVolume(0);
    Nlead.setVolume(0);

  } else if (key === 'é') {
    affichage.fill(false);
    affichage[1] = true;
    randomLoopActive = false;
    Nkicksnr.setVolume(0);
    Nhat.setVolume(0);
    Nbass.setVolume(0);
    Nlead.setVolume(0);

  } else if (key === '"') {
    affichage.fill(false);
    affichage[2] = true;
    randomLoopActive = false;
    Nkicksnr.setVolume(0);
    Nhat.setVolume(0);
    Nbass.setVolume(0);
    Nlead.setVolume(0);

  } else if (key === "'") {
    affichage.fill(false);
    affichage[3] = true;

   
 Nkicksnr.setVolume(1);
    Nhat.setVolume(1);
    Nbass.setVolume(0);
    Nlead.setVolume(0);
    // Start 2 tracks looping and enable random toggling
   
    randomLoopActive = true;

    // Reset loop tracking for clean start
    lastTime.kicksnr = 0;
    lastTime.hat = 0;
    lastTime.bass = 0;
    lastTime.lead = 0;
    loopProcessed.kicksnr = false;
    loopProcessed.hat = false;
    loopProcessed.bass = false;
    loopProcessed.lead = false;
  }

  console.log(
    'musique : '+son.isPlaying()+
    ' kicksnr : '+Nkicksnr.isPlaying()+
    ' hat : '+Nhat.isPlaying()+
    ' bass : '+Nbass.isPlaying()+
    ' lead : '+Nlead.isPlaying()
)
}


// Detect loop events and randomly mute/unmute each track (once per loop)
function checkLoopEvent(sound, trackName){
  let current = sound.currentTime();

  // If playback time went backward, a loop just happened
  if (current < lastTime[trackName]){
    // Always process this loop
    if (random() > 0.5){
      // Mute for this cycle
      sound.setVolume(0);
      trackPlaying[trackName] = false;
    } else {
      // Unmute for this cycle
      sound.setVolume(1);
      trackPlaying[trackName] = true;
    }
  }

  // Ensure at least one track is always unmuted
  if (!Object.values(trackPlaying).includes(true)) {
    sound.setVolume(1);
    trackPlaying[trackName] = true;
  }


  
 

  

  lastTime[trackName] = current;
}
