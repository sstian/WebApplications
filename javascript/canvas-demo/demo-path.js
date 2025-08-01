var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var posX = 20;
var posY = 100;

var vx = 10;
var vy = -10;
var gravity = 1;

setInterval(function () {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  posX += vx;
  posY += vy;
  vy += gravity;

  ctx.beginPath();
  ctx.fillStyle = 'white';

  ctx.arc(posX, posY, 10, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}, 30);