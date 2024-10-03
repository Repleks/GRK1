let x1 = 300
let y1 = 400
let x2 = 600
let y2 = 400
let x3 = 450
let y3 = 200
let cx = x1
let cy = y1

function setup(){
    createCanvas(800,600)
    noLoop();
}

//noprotect
function draw(){
    background(0)
    stroke(255)
    point(x1,y1)
    point(x2,y2)
    point(x3,y3)
    for(a=0;a<30000;a++){
        let tmp = floor(random(0,3))
        switch (tmp){
            case 0:
                cx = (cx+x1)/2
                cy = (cy+y1)/2
                break;
            case 1:
                cx = (cx+x2)/2;
                cy = (cy+y2)/2;
                break;
            default:
                cx = (cx+x3)/2;
                cy = (cy+y3)/2;

        }
        point(cx,cy);
    }
    updatePixels();
}
