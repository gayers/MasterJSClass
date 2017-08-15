/*var parent = document.querySelector('.parent');
var div = document.createElement('div');

div.textContent = "My new content";
div.style.color = "red";
div.style.fontSize = "20px";
console.log(div);

parent.appendChild(div);*/


/*var button = document.querySelector('.myButton');

function click1(){
	console.log("someone clicked me");
};

function click2(){
	console.log("doing something else");
	button.removeEventListener("click", click1);
};

button.addEventListener("click", click1);
button.addEventListener("click", click2);*/

/*document.addEventListener("click", showPopUp);

function showPopUp(){
	alert("Buy me");
}*/

var child = document.querySelector(".child");
var parent = document.querySelector(".parent");

child.addEventListener("click", showChild);
parent.addEventListener("click", showParent);

function showChild(event) {
	event.stopPropagation();

	event.target.style.background = 'blue';
	
	console.log("I am green");
}


function showParent() {
	console.log("I am red");
}