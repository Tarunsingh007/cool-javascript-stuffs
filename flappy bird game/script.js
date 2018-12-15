var cvs=document.getElementById("canvas");
var ctx=cvs.getContext('2d');

var bg=new Image();
var pu=new Image();
var pd=new Image();
var bd=new Image();

bg.src="img/bg.png";
pu.src="img/pip.png";
pd.src="img/pip0.png";
bd.src="img/b.png";

//pipe array
var pipes=[];
pipes[0]={x:400,y:0};

var g=2,bx=10,by=0,score=0;

function fly()
{
	by=by-80;
}
console.log(pu.height);

function draw()
{
	var px=180,py=300;
	ctx.drawImage(bg,0,0,400,550);
	ctx.drawImage(bd,bx,by,50,50);

	for(let i=0; i<pipes.length;i++)
	{	
		ctx.drawImage(pu,pipes[i].x,pipes[i].y);
		ctx.drawImage(pd,pipes[i].x,pipes[i].y+500);
		pipes[i].x-=2;
		if(pipes[i].x==150)
		{
			pipes.push({
				x:400,
				y:Math.floor(Math.random()*pu.height)-pu.height
			})
		}

		//gameover Logic
	   if(54>= pipes[i].x && bx <= pipes[i].x + pu.width && (by <= pipes[i].y + pu.height || by+50>= pipes[i].y+500))
	   {
	        alert(`Highest Score is ${score}`);alert("Game Over");
            location.reload();
	   }
	   if(pipes[i].x==6)
	   	score++;
	}



	//gravity
	by=by+g;
	if(by<=0)
		by=by+80;

	//fly
	cvs.addEventListener("click",fly);
	document.addEventListener("keydown",fly);
	window.requestAnimationFrame(draw);
}
draw();

console.log("daasd");