function setup(){
    createCanvas(800,600)
}

//noprotect
function draw(){
    background(0)
    for(y=0; y<height; y++){
        for(x=0; x<width; x++){
            if(x===0){
                set(x,y,color(0))
            }
            if(x===799){
                set(x,y,color(255))
            }
            else{
                let c = x/width*256;
                set(x,y,color(c))
            }
        }
    }
    updatePixels();
}
