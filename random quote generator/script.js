var quotes=["Read a thousand books, and your words will flow like a river.","The first draft is just you telling yourself the story."
,"You dont start out writing good stuff. You start out writing crap and thinking its good stuff, and then gradually you get better at it.Thats why I say one of the most valuable traits is persistence.",
"You can always edit a bad page. You cannot edit a blank page.","Start writing, no matter what. The water does not flow until the faucet is turned on."];
var authors=["Lisa See","Terry Pratchett","Octavia E. Butler"," Jodi Picoult"," Louis L Amour"];
var quote=document.getElementById("quote");
var btn=document.getElementById("button");
var author=document.getElementById("author");
btn.addEventListener('click',genquote);
function genquote(){
		var q=Math.floor(Math.random()*quotes.length);
		quote.textContent=quotes[q];
		author.textContent="Author: "+authors[q];
		quote.style.visibility="visible";
		author.style.visibility="visible";
}

