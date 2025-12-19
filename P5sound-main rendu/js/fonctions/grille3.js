
function grille3() {
    

    for (let x = marge; x < width-marge; x+=10) {
    for (let y = marge; y < height-marge; y+=10) {


        let noiseCouleur = noise(x*0.01,y*0.01,time)*200-60;

        let noiseMapped = map (noiseCouleur, -10, 60, -5, 5);
    
 line (x,y,x-10,y+noiseMapped);
 stroke (100,100,noiseCouleur);
 strokeWeight(noiseMapped);

 line (x,y,x+10,y-noiseMapped);
 stroke (100,100,-100*noiseCouleur);
 strokeWeight(noiseMapped);


    }}

}