

function grille1() {
    
    for (let x = marge; x < width-marge; x+=grilleX) {
    for (let y = marge; y < height-marge; y+=grilleY) {



        let noise2D = noise(x*0.01,y*0.01,time)*500;
        let threshold = noise(x*0.01,y*0.01,time)*10;
        let imgX = treble*2+noise2D/5-10
        let imgY = treble*2+noise2D/5-10
        if (threshold<6) {
            image(img, x-imgX/2, y-imgY/2, imgX-20, imgY-20);
        } else {
            image(img2, x-imgX/2, y-imgY/2, imgX-10, imgY-10);
        }  


        ////////////SPECTRUM VISUALISER ////////////
          fill(255,100,100);
            noStroke();
            rect (50,height-50-kickLvl/4, 40, kickLvl/2);
            rect (100,height-50-hatLvl/4, 40, hatLvl/2);
            rect (150,height-50-bassLvl/4, 40, bassLvl/2);
            rect (200,height-50-leadLvl/4, 40, leadLvl/2);

        //////////////////////////////////////////
        }
    }
    

}
