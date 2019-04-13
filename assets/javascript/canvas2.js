var canvas = document.querySelector("#canvas2");
var c = canvas.getContext('2d');
var mouse ={ x:undefined,y:undefined};
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var font = "100px Arial";
var maxR = 10,
    minR = 5;
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
    c.fillStyle = "#000000";
    c.font = font;
    c.fillText(text,100,100);
}

function initialPositions(){
    
}


let p = new Particles(x,y,"red");
p.draw();
drawText("test")