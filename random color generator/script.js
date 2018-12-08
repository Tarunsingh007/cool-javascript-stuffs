var container=document.getElementById("container");
var btn=document.getElementById("btn");
function random(value)
{
	return Math.floor(Math.random()*value);
}
window.onload=color();
btn.addEventListener('click',color);
function color(){
	var randomc='rgb(' +random(200) + ',' + random(200)+ ',' +random(200)+ ',' +random(200)+')';
	var randomcolor='rgb(' +random(255) + ',' + random(255)+ ',' +random(255)+ ',' +random(255)+')';
	container.style.backgroundColor=randomcolor;
	btn.style.backgroundColor=randomc;
}