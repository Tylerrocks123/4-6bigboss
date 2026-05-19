function GameObject(x,y,w,h,color)
{
    //set up player starting point
    //set up x
    if(x==undefined)
    {
        this.x = canvas.width/2;
    }
    else
    {
        this.x = x;
    }
    //set up y
    if(y==undefined)
    {
        this.y = canvas.height/2;
    }
    else
    {
        this.y = y;
    }

    //set up player dimensions
    if(w==undefined)
    {
        this.width = 100;
    }
    else
    {
        this.width = w;
    }

    if(h==undefined)
    {
        this.height = 100;
    }
    else
    {
        this.height = h;
    }

    //set up player color
    if(color==undefined)
    {
        this.color = "#ff0000";
    }
    else
    {
        this.color = color;
    }

    //set up bounding box
    this.left = function()
    {
        return this.x - this.width/2;
    }
    this.right = function()
    {
        return this.x + this.width/2;
    }
    this.top = function()
    {
        return this.y - this.height/2;
    }
    this.bottom = function()
    {
        return this.y + this.height/2;
    }

    this.prevX = this.x;

    //set up player's velocity
    this.vx = 0;
    this.vy = 0;

    this.drawRect = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.translate(this.x,this.y);
            context.fillRect(-this.width/2,-this.height/2,this.width,this.height);
        context.restore();
    }

    this.drawCircle = function()
    {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.width/2,0,360*Math.PI/180,true)
        context.fill();
        context.closePath();
    }

    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    this.collisionCheck = function(obj)
    {
        if (
            this.left() < obj.right() &&
             this.right() > obj.left() &&
              this.top() < obj.bottom() &&
               this.bottom() > obj.top()
            )
        {
            return true;
        }
        return false;
    }

}