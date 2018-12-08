var images=[]; var c=0;
images=document.querySelectorAll(".slides");
var ra=document.querySelector(".rightarrow");
var la=document.querySelector(".leftarrow");
function reset(){
	for(let i=0;i<images.length;i++)
	{
		images[i].style.display='none';
	}
}
function start(){
	reset();
	images[0].style.display='block';
}
ra.addEventListener("click",()=>{
	if(c<images.length-1)
		{c++;reset();images[c].style.display='block';}
	else
		{{c=0;reset();images[c].style.display='block';}}
});
la.addEventListener("click",()=>{
	if(c==0)
		{c=images.length-1;reset();images[c].style.display='block';}
	else
		{{c--;reset();images[c].style.display='block';}}
});
start();