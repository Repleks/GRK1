function setup(){
    createCanvas(800,600)
    noLoop()
}

//noprotect
function draw(){
    background(0,0,255)
    for(y=450; y<height; y++) {
        for (x = 0; x < width; x++) {
            set(x, y, color(0, 255, 0))
        }
    }
    for(a=0; a<1000; a++){
        x= random(0, width)
        y= random(450, height)
        set(floor(x), floor(y), color(floor(random(0,255)), floor(random(0,255)), floor(random(0,255))))
    }
    for(y=250; y<450; y++) {
        for (x = 200; x < 600; x++) {
            set(x, y, color(153, 51, 0))
        }
    }
    for (y = 100, w = 0; y < 250; y++, w+=2) {
        for (x = 400 - w; x < 400 + w; x++) {
            set(x, y, color(255, 0, 0));
        }
    }
    updatePixels();
}
