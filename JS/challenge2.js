var div = document.createElement("div");
div.style.height = "200px";
div.style.padding = "20px";
div.style.width = "200px";
div.style.background = "red";

document.body.appendChild(div);

var child = document.createElement("span");
child.innerText = "DONT TOUCH THE RED BUTTON";
child.style.color = '#fff';

div.appendChild(child);

div.addEventListener("click", function(){
	alert("YOUR COMPUTER IS BEING HACKED!");
});

