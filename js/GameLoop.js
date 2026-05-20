var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

var frictionX = 0.9;
var frictionY = 0.8;
var gravity = 5;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
context.font = "30px Arial";

//player = new GameObject(100,canvas.height/2,100,100,"#eeea1e");
//npc1 = new GameObject(300,canvas.height/2,100,100,"#1eaeff");
//npc2 = new GameObject(600,canvas.height/2,100,100,"#df1eaf");
player1 = new GameObject(0, canvas.height - 15, 150, 30, "#00ff00");
ball = new GameObject(50,canvas.height/2,50,50,"#00ff00");
player1.vx = 0;
player1.vy = 0;
ball.vx = 0;
ball.vy = 1;
player1.ax = 1;
player1.force = 1.5;
ball.force = 1;
Score = 0;

timer = setInterval(animate, interval);



function animate()
{


    doHandleAcceleration();
    doHandleFriction();
    doHandleGravity();
    player1.move();
    doCheckBottomBounds();

context.clearRect(0,0,canvas.width,canvas.height);
context.fillStyle = "black";
context.fillText("Score: " + Score,50,50);

ball.move();

if (ball.y > canvas.height - ball.height/2)
{
    ball.y = canvas.height;
    Score = 0;
}

    if (ball.collisionCheck(player1))
    {
        Score++;
        ball.x = Math.random() * canvas.width;
        ball.y = 0; 
        ball.vy = 1;
        doHandleGravity();
    }


        function doHandleAcceleration()
{
        if (d)
        {
            player1.vx += player1.ax * player1.force;
        }
            if (a)
        {
            player1.vx += player1.ax * -player1.force;
        }
}

function doHandleFriction()
{
    player1.vx *= frictionX;
}

function doHandleGravity()
{
    //player1.vy += gravity;
    ball.vy += Math.random() * 0.5;
}

function doUpdatePosition()
{
    player1.x += player1.vx;
    player1.y += player1.vy;
}

function doCheckBottomBounds()
{
    if (player1.y > canvas.height - player1.height/2)
    {
        player1.y = canvas.height - player1.height/2;
        player1.vy = 0;
    }
}

function setParticles()
{
	for(var i = 0; i < 4; i++)
	{
		particles[i] = new GameObject({x:0, y:0, width:30, height:30, color:"#ff0000"});
		particles[i].vx = rand(-25, 25);
	}
	
}

    if(player1.top() < 0)
    {
        player1.y = player1.height / 2;
    }
    if(player1.bottom() > canvas.height)
    {
        player1.y = canvas.height - player1.height / 2;
    }
    if (player1.x < player1.width / 2)
    {
        player1.x = player1.width / 2;
        player1.vx = 0;
    }


if (player1.x > canvas.width - player1.width / 2)
{
    player1.x = canvas.width - player1.width / 2;
    player1.vx = 0;
}
    //player.drawCircle();
    //npc1.drawCircle();
    //npc2.drawCircle();
    //npc3.drawRect();
    player1.drawRect();
    ball.drawCircle();
}
