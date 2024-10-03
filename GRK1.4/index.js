function setup(){
    createCanvas(800,600)
}

//noprotect
function draw(){
    background(0)
    for(y=0; y<height; y++){
        for(x=0; x<width; x++){
            let c = (x+y)/(width+height)*255
            let xFromCenter = (width/2)-x
            let yFromCenter = (height/2)-y
            let d = sqrt(xFromCenter*xFromCenter + yFromCenter*yFromCenter)
            set(x,y,color(255-d,d,c))
        }
    }
    updatePixels();
}
