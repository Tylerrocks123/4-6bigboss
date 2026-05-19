var canvas;
var context;
var player;
var timer;
var interval = 1000/60;

var frictionX = 0.9;
var frictionY = 0.8;
var gravity = 1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
context.font = "30px Arial";

//player = new GameObject(100,canvas.height/2,100,100,"#eeea1e");
//npc1 = new GameObject(300,canvas.height/2,100,100,"#1eaeff");
//npc2 = new GameObject(600,canvas.height/2,100,100,"#df1eaf");
player1 = new GameObject(0, canvas.height - 15, 150, 30, "#00ff00");
ball = new GameObject(50,canvas.height/2,100,100,"#00ff00");
player1.vx = 0;
player1.vy = 0;
ball.vx = 0;
ball.vy = 16;
player1.ax = 1;
player1.force = 1.5;
ball.force = 10;
Score = 0;

timer = setInterval(animate, interval);



function animate()
{


    doHandleAcceleration();
    doHandleFriction();
    doHandleGravity();
    player1.move();
    doCheckBottomBounds();
    
    /*
    context.clearRect(0,0,canvas.width,canvas.height);

    if(d)
    {
        player.x += 4;
    }
    if(a)
    {
        player.x -= 4;
    }

    player.move();
    if (player.x > canvas.width + player.width/2)
    {
       // player.vx *= -1;
        player.color = "#40ff00";
    }
    if (player.x < 0 + player.width/2)
    {
       // player.vx = 2;
        player.color = "#ff0000";
    }
    if (player.y > canvas.height + player.height/2)
    {
        //player.vy *= -1;
        player.color = "#ff40b6";
    }
    if (player.y < 0 + player.height/2)
    {
       // player.vy = 2;
        player.color = "#0000ff";
    }

//npc1 collision stuff
if(npc1.collisionCheck(player))
    {
        npc1.color = "yellow";
        npc1.width = 125;
    }
    else
    {
        npc1.color = "green";
        npc1.width = 100;
    }

//npc2 collision stuff
if (npc2.collisionCheck(player))
{
    context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
}

if (npc3.collisionCheck(player))
{
    player.x = player.prevX;
}
else
{
    player.prevX = player.x;
}
*/
context.clearRect(0,0,canvas.width,canvas.height);
context.fillStyle = "black";
context.fillText("Score: " + Score,50,50);

ball.move();
    if (ball.x > canvas.width - ball.width/2)
    {
    ball.x = canvas.width - ball.width/2;
    ball.vx *= -1;
    }
    if (ball.x < ball.width/2)
    {
    ball.x = ball.width/2;
    ball.vx *= -1;
    }
    if (ball.y > canvas.height - ball.height/2)
    {
    ball.y = canvas.height - ball.height/2;
    ball.vy *= -1;
    Score = 0;
    }
    if (ball.y < ball.height/2)
    {
    ball.y = ball.height/2;
    ball.vy *= -1;
    }

    if (ball.collisionCheck(player1) && ball.vy > 0)
    {
        Score = 0;
        ball. 
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
    ball.vy += gravity;
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
