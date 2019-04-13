let canvas = document.querySelector('canvas');
canvas.height = window.innerHeight-100;
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
// window.addEventListener('mouseout',function(event){
//     mouse.x =null;
//     mouse.y = null;
// })
window.addEventListener('resize',function(event){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
})
window.addEventListener('click',function(event){
    init();
})


function getDistance(x1,y1,x2,y2){
    // console.log("x1",x1)
    // console.log("y1",y1)

    // console.log("x2",x2)
    // console.log(x1-x2)
    // console.log()
    return Math.pow( Math.pow(x1-x2,2) + Math.pow(y1-y2,2) ,0.5);
}

var colorArr = ["red","blue","yellow"];
var friction = 0.9;
var gravity = 0.5;
class Circle{
    constructor(x,y,dx,dy,radius,color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = color;//colorArr[Math.floor(Math.random()*colorArr.length)];
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        // c.stroke();
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }

    update(){
        //random patter
        
        // this.x+=this.dx;
        // this.y+=this.dy;
    
        // if(this.x+this.radius>innerWidth || this.x-this.radius < 0){this.dx=-this.dx}
        // if(this.y+this.radius>innerHeight || this.y-this.radius < 0){this.dy=-this.dy}
        
        // if(mouse.x && mouse.x - this.x < 50 && mouse.x - this.x > -50
        //    && mouse.y - this.y < 50 && mouse.y - this.y > -50
        //    && this.radius < 40
        //     ){
        //     this.radius+=1;
        // }else if(this.radius>=this.minRadius){
        //     this.radius-=1;
        // }


        //gravity
    //     if(this.y + this.radius + this.dy > canvas.height){
    //          this.dy=-this.dy * friction;
    //     }else{
    //         this.dy+=gravity;
    //     }
    //     if(this.x + this.radius + this.dx > canvas.width
    //         || this.x - this.radius + this.dx < 0){
    //         this.dx=-this.dx;
    //    }
    //     this.y+=this.dy;
    //     this.x+=this.dx;
        
        this.draw();
    }
}

var circles = [];

function init(){
    circles=[];
    for (i=0;i<500;i++){
        var radius = 10;//Math.random()*10+1;
        var x =radius+ Math.random()*(canvas.width-radius*2);
        var y =-radius+ Math.random()*(canvas.height-radius*2);
        // console.log(y);
        var dx = Math.random()*2-1;
        var dy = Math.random()*2-1;
        
        // circle1 = new Circle(x,y,dx,dy,100,"red");
        // circle2 = new Circle(undefined,undefined,undefined,undefined,radius,"black");
        circles.push( new Circle(x,y,dx,dy,radius,"red"));
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



    // circle1.update()
    // circle2.x = mouse.x;
    // circle2.y = mouse.y;
    // // console.log(getDistance(circle1.x,circle1.y,circle2.x,circle2.y))
    // if(getDistance(circle1.x,circle1.y,circle2.x,circle2.y) < circle1.radius+circle2.radius){
    //     // console.log("touch");
    //     circle1.color='blue';
    // }else{
    //     circle1.color="red";
    // }
    // circle2.update()
}

init();
ani();

