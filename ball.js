const canvasWidth = 500;
const canvasHeight = 400; 
const ballRadius = 40;
var ballXMoveSpeed=10;
var ballYMoveSpeed=10;
var ballX = (canvasWidth-ballRadius)/2;
var ballY = (canvasHeight-ballRadius)/2;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d"); 
ctx.beginPath();
ctx.arc(ballX, ballY,40,0,2*Math.PI);
ctx.stroke();

function moveBall(ctx){
    ctx.beginPath();
    ctx.clearRect(0, 0,canvasWidth,canvasHeight);
    if(ballX>=(canvasWidth-ballRadius)){
        ballXMoveSpeed=-10;
    }
    if(ballY>=(canvasHeight-ballRadius)){
        ballYMoveSpeed=-10;
    }
    if(ballX<=(ballRadius)){
        ballXMoveSpeed=10;
    }
    if(ballY<=(ballRadius)){
        ballYMoveSpeed=10;
    }
    ballX+=ballXMoveSpeed;
    ballY+=ballYMoveSpeed;
    ctx.arc(ballX, ballY,40,0,2*Math.PI);
    ctx.stroke();
}

setInterval(() => {
    moveBall(ctx);
}, 10);

