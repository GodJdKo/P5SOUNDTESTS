function grille4(){

    let grille = 10
     let level = amp.getLevel();
   //time = time+level;
   time+=level*0.3;

   stroke(255);
   strokeWeight(bass/20-6);
    noFill()

    for (let y = 0; y <height; y+=grille) {
      beginShape();
      
 for (let x =0; x <width; x+=grille) {
   
    
     
 let noiseX = noise(x*zoom+time,y*zoom+time)*300-width/10
   let noiseY = noise(17,x*zoom-time,y*zoom-time)*bass*-1 - zoom*4
   stroke(noise(x*zoom*time,y*zoom*time*40)*1800-700);
   vertex(x,y+noiseY)

      

 }
endShape();
 }

}