var canvas = document.querySelector("#canvas2");
var c = canvas.getContext('2d');
var mouse ={ x:undefined,y:undefined};
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var font = "100px Arial";
var maxR = 0,
    minR = 2;
var x = 100,y=100;


class Particles{
    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.initalX = x;
        this.initialY = y;
        this.radius = Math.random() * maxR + minR;
        this.color = color
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2);
        c.fillStyle = this.color;
        c.fill();
        // c.stroke();
    }
}


function drawText(text){
    c.clearRect(0,0,canvas.width,canvas.height);
    c.fillStyle = 255;
    c.font = font;
    c.fillText(text,100,100);
}

var particles = [];
function initialPositions(){
    particles = [];
    console.log("here")
    data = c.getImageData(0,0,canvas.width,canvas.height).data;
    console.log(data);
    for(h=0;h<canvas.height;h=h+2){
        for(w=0;w<canvas.width;w=w+2){
            var color = data[((h * ( canvas.width * 4)) + (w * 4)) - 1];

            if (color == 255) {
                particles.push(new Particles(w,h,"red"));
                console.log("here")
            }
        }
    }
    c.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(function(p){
        p.draw();
    })
    
}


// let p = new Particles(x,y,"red");

drawText("test")

initialPositions();
// drawText("test")

