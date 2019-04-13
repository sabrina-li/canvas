let canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');
// c.fillRect(100, 200, 10,10);
// c.fillStyle="blue"
// c.fillRect(100,100,100,10)

// c.beginPath();
// c.moveTo(300,300);
// c.lineTo(500,500);
// c.strokeStyle="yellow";
// c.stroke();
// c.beginPath();
// c.moveTo(500,500);
// c.lineTo(200,400);
// c.strokeStyle="red";
// c.stroke();
// console.log(c);


// for (var i=0;i<100;i++){
//     let rx =Math.random()*window.innerWidth;
//     let ry =Math.random()*window.innerHeight;
//     c.beginPath();
//     c.arc(200+i,100+i,100-i,0,Math.PI * 2,false);
//     c.strokeStyle="blue"
//     c.stroke();
// }


var mouse={
    x:null,
    y:null
}
window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})
window.addEventListener('mouseout',function(event){
    mouse.x =null;
    mouse.y = null;
})
window.addEventListener('resize',function(event){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
})

var colorArr = ["red","blue","yellow"];

class Circle{
    constructor(x,y,dx,dy,radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArr[Math.floor(Math.random()*colorArr.length)];
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        // c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    update(){
        this.x+=this.dx;
        this.y+=this.dy;
    
        if(this.x+this.radius>innerWidth || this.x-this.radius < 0){this.dx=-this.dx}
        if(this.y+this.radius>innerHeight || this.y-this.radius < 0){this.dy=-this.dy}
        
        if(mouse.x && mouse.x - this.x < 50 && mouse.x - this.x > -50
           && mouse.y - this.y < 50 && mouse.y - this.y > -50
           && this.radius < 40
            ){
            this.radius+=1;
        }else if(this.radius>=this.minRadius){
            this.radius-=1;
        }
        this.draw();
    }
}
var circles = [];
function init(){
    circles=[];
    for (i=0;i<300;i++){
        var radius = Math.random()*10+1;
        var x =radius+ Math.random()*(innerWidth-radius*2);
        var y =radius+ Math.random()*(innerHeight-radius*2);
        
        var dx = Math.random()*2-1;
        var dy = Math.random()*2-1;
        
        circles.push( new Circle(x,y,dx,dy,radius));
    }
}




function ani(){
    requestAnimationFrame(ani);
    AnimationEffect();
}



function AnimationEffect(){
    c.clearRect(0,0,innerWidth,innerHeight);
    circles.forEach(function(val,idx){
        circles[idx].update();
    })
}

init();
ani();

