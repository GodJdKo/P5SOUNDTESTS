
function grille2() {
    textFont(atypo);
    textSize(100);   
    noFill();
   

    for (let x = marge; x < width-marge; x+=grilleX) {
    for (let y = marge; y < height-marge; y+=grilleY) {

        let noise2D = noise(x*0.01,y*0.01,time)*500;
        let threshold = noise(x*0.01,y*0.01,time)*15;
        let noiseCouleur = noise(x*0.01,y*0.01,time)*200-60;
    
        stroke(100,100,noiseCouleur);
        strokeWeight(0.02+(treble-3)*0.3);

        if (threshold<3) {
            text('e', x, y);
        }else if( threshold<4.8) {
            text('m', x, y);
        } else if( threshold<5) {
            text('a', x, y);
        } else if( threshold<6) {
            text('t', x, y);
        } else if ( threshold<6.6) {
            text('r', x, y);
        } else if ( threshold<7.2) {
            text('i', x, y);
        } else if ( threshold<9) {
            text('l', x, y);
        } else if ( threshold<10.5) {
            text('o', x, y);
        }


        }




    }
}

