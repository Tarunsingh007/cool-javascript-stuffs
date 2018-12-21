var cvs=document.getElementById("canvas");
var ctx = cvs.getContext('2d');

// ctx.fillStyle = "#000";
// ctx.fillRect(0, 0, canvas.width, canvas.height);
var s=document.getElementById("score");
var bot=new Image(20,50);
var tree=new Image(20,50);
var bg=new Image(20,50);
var beep=new Audio();
var beep2=new Audio();
beep.src="./beep.mp3"
beep2.src="./out.mp3"
bot.src="./bot.png";
tree.src="./tree.jpg";
bg.src="./bg.jpg";
var bx=10,by=150,g=1.2,score=0;

//jump
function jump()
{
	beep.play();
	by=by-100;
	if(by<=30)
		by=30;
}
//treesarray
var trees=[];
trees[0]={
	x:canvas.width,
	y:150
}

function draw(){
	ctx.drawImage(bg,0,30,canvas.width,canvas.height);
	ctx.drawImage(bot,bx,by,25,50);
	score+=.1;
	for(let i=0;i<trees.length;i++)
	{
		ctx.drawImage(tree,trees[i].x,trees[i].y,25,50);
		trees[i].x-=2;
		if(trees[i].x==350)
		{
			trees.push({
				x:600,
				y:150
			})
			console.log(`added ${trees[i].x}`);
		}
		//gameover logic
		 if(bx+bot.width>=trees[i].x&&by+bot.height>=trees[i].y&&bx<=trees[i].x+tree.width&&by+bot.height>=trees[i].y)
			{beep2.play();location.reload();alert(`gameover, score is ${Math.floor(score)}`);}
	}

	//gravity
	by=by+g;
	if(by>=200-bot.height)
		by=200-bot.height;	
	//fly
	if(by==150)
	document.addEventListener("keydown",jump);
	if(by<150)
	document.removeEventListener("keydown",jump);
	window.requestAnimationFrame(draw);
	//score
	setInterval(scr,10);
}
function scr(){
	s.innerHTML=`Score : ${Math.floor(score)}`;
}
draw();




//gameover Logic
// if(bx+bot.width>=tx&&by+bot.height>=ty&&bx<=tx+tree.width&&by+bot.height>=ty)
// 	alert("gameover");