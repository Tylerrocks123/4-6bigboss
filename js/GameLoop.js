var canvas;
var context;
var player;
var timer;
var interval = 1000/60;
var squares = [];
var circles = [];
var frictionX = 0.9;
var frictionY = 0.8;
var gravity = 5;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
context.font = "30px Arial";

player1 = new GameObject(canvas.width/2, 750, 50, 50, "#fff000");
for (var i = 0; i < 5; i++)
{
    squares[i] = new GameObject(Math.random() * canvas.width, 0, 30, 30, "#00ff00");
    squares[i].vx = 0;
    squares[i].vy = Math.random() * 5 + 2;
    squares[i].force = 1;
}
for (var k = 0; k < 5; k++)
{
    circles[k] = new GameObject(Math.random() * canvas.width, 0, 30, 30, "#ff0000");
    circles[k].vx = 0;
    circles[k].vy = Math.random() * 5 + 2;
    circles[k].force = 1;
}

player1.vx = 0;
player1.vy = 0;
player1.ax = 1;
player1.force = 1.5;
player1.hitFrames = 0;
player1.hitColor = "#fff000";
score = 0;

timer = setInterval(animate, interval);



function animate()
{
    doHandleAcceleration();
    doHandleFriction();
    player1.move();
    doCheckBottomBounds();

    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = "black";
    context.fillText("Score: " + score,50,50);


    if (player1.hitFrames > 0)
    {
        player1.hitFrames--;
    }
    if (player1.hitFrames > 0)
    {
        player1.color = player1.hitColor;
    }
    else
    {
        player1.color = "#fff000";
    }

    moveSquares();
    moveCircles();

    for(var j = 0; j < 5; j++)
    {
        if (squares[j].collisionCheck(player1))
        {
            score++;
            squares[j].x = Math.random() * canvas.width;
            squares[j].y = 0; 
            squares[j].vy = Math.random() * 5 + 2;
            player1.hitFrames = 30;
            player1.hitColor = "#00ff00";
        }

        if (squares[j].y > canvas.height - squares[j].height/2)
        {
            squares[j].y = canvas.height;
            squares[j].x = Math.random() * canvas.width;
            squares[j].y = 0; 
            squares[j].vy = Math.random() * 5 + 2;
        }
    }

    for(var p = 0; p < 5; p++)
    {
        if (circles[p].collisionCheck(player1))
        {
        score = 0;
        circles[p].x = Math.random() * canvas.width;
        circles[p].y = 0; 
        circles[p].vy = Math.random() * 5 + 2;

        for (var o = 0; o < circles.length; o++)
        {
            circles[o].y = canvas.height;
            squares[o].y = canvas.height;
        }

        player1.hitFrames = 30;
        player1.hitColor = "#ff0000";
        }

        if (circles[p].y > canvas.height - circles[p].height/2)
        {
        circles[p].y = canvas.height;
        circles[p].x = Math.random() * canvas.width;
        circles[p].y = 0; 
        circles[p].vy = Math.random() * 5 + 2;
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

    player1.drawRect();
    for(var i = 0; i < 5; i++)    
    {
        squares[i].drawRect();
    }
    for(var k = 0; k < 5; k++)    
    {
        circles[k].drawCircle();
    }
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

function moveSquares()
{
	for(var i = 0; i < 5; i++)
	{
        squares[i].vx = 0;
        squares[i].force = 1;
        squares[i].move();
	}
	
}

function moveCircles()
{
	for(var i = 0; i < 5; i++)
	{
        circles[i].vx = 0;
        circles[i].force = 1;
        circles[i].move();
	}
	
}
