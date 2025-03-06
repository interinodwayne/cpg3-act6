const canvasWidth = 500;
const canvasHeight = 400; 
const ballRadius = 40;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d"); ctx.beginPath();
ctx.arc((canvasWidth-ballRadius)/2,(canvasHeight-ballRadius)/2,40,0,2*Math.PI);
ctx.stroke();
var ballStartDirection = 10;
