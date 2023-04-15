let colors=["blue","red","black","yellow"];

function ngjyra() {
	document.querySelector('h1').style.background=colors[Math.floor(Math.random()*colors.length)]
}

let names=["bikliqi","hey","hello","hi"];

function emrat(){
	document.querySelector('h1').innerHTML=names[Math.floor(Math.random()*names.length)]
}

setInterval(ngjyra,1000)
setInterval(emrat,1000)