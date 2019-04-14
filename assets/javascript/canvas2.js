var canvas = document.querySelector("#canvas2");
var c = canvas.getContext('2d');
var mouse ={ x:undefined,y:undefined};
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var font = "100px Arial";
var maxR = 0,
    minR = 2;
var x = 100,y=100;
var maxDist = 10;


class Particles{
    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.initialX = x;
        this.initialY = y;
        this.radius = Math.random() * maxR + minR;
        this.color = color
        this.dx = 0;
        this.dy = 0;
    }
    draw(){
        c.beginPath();
        // c.arc(this.x,this.y,this.radius,0,Math.PI*2);
        // c.fillStyle = this.color;
        // c.fill();
        // c.stroke();
        c.fillStyle = this.color
        c.fillRect(this.x, this.y, 5,5 );
        
    }
    update(){
       
        if(getDist(mouse.x,mouse.y,this.x,this.y)<maxDist){
            this.color="red";
            this.dx=Math.random()*maxDist - maxDist/2;
            this.dy=Math.random()*maxDist - maxDist/2;
        }else{
            this.color="black";
        }
        this.x += this.dx;
        this.y += this.dy;

        if(getDist(this.x,this.y,this.initialX,this.initialY)>100){
            // let ratio = (this.initialX - this.x) / (this.initialY - this.y)   
            // // console.log("ratio",ratio);
            // this.dx += ratio;
            // this.dy += ratio;
            this.dy = -this.dy;
            this.dx = -this.dx;
        }
        // if(getDist(mouse.x,mouse.y,this.x,this.y)<50){
        //     this.x = mouse.x+50;
        //     this.y = mouse.y+50;
        // }
        
        // else if(getDist(this.x,this.y,this.initialX,this.initialY)>2){
        //     this.x = this.initialX;
        //     this.y = this.initialY;
        //     this.dx = 0;
        //     this.dy = 0;
        // }

        this.draw();
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
    data = c.getImageData(0,0,canvas.width,canvas.height).data;
    
    for(h=0;h<canvas.height;h=h+2){
        for(w=0;w<canvas.width;w=w+2){
            var color = data[((h * ( canvas.width * 4)) + (w * 4)) - 1];

            if (color == 255) {
                particles.push(new Particles(w,h,"black"));
            }
        }
    }
    c.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(function(p){
        p.draw();
    })
    
}

window.addEventListener("mousemove",function(event){
    mouse.x = event.x - canvas.offsetLeft;
    mouse.y = event.y- canvas.offsetTop;
})
function getDist(x1,y1,x2,y2){
    // console.log("1",y1);
    // console.log("2",y2)
    return Math.pow( Math.pow(x1-x2,2) + Math.pow(y1-y2,2) ,0.5);
}

function loop(){
    requestAnimationFrame(loop);
    c.clearRect(0,0,canvas.width,canvas.height)
    particles.forEach(function(p){
        p.update();
    })
}


drawText("test")

initialPositions();
console.log(particles.length);
loop();

