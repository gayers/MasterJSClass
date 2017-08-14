// MY CODE FOR CODE CHALLENGE 1
/*var username = "gayers"; 
var age = 25;
var loggedIn = true;

if(loggedIn){
	console.log("My name is " + username + " and I am " + age + " years old");
} else{
	console.log("Please log in to see the message.");
}*/



// CODE CHALLENGE 2
/*var list = ["Mary", "Robert", "Gia", "David", "Alan"];

for(var i = 0; i < list.length; i++){
	if(list[i] == "Gia"){
		console.log("The name " + list[i] + " was found");
		break;
	}

	console.log(list[i]);
}*/

// CODE CHALLENGE 3
/*var number = 5;
var iteration = 0;

for(var i = number; i <= 50; i += number){
	if(i == 50){
		console.log("Number: " + i + " Iteration " + iteration);
		break;
	}
	iteration += 1;
}

//Two separate ways to run the code
while(number < 50){
	iteration += 1;
	number += 5;

	console.log(number);
	console.log(iteration);
}*/

// CODE CHALLENGE 4
var user = {
	name: "Gia",
	lastName: "Ayers"
};

function greet(user){
	console.log("Hello, " + user.name + " " + user.lastName + " welcome back!");
}

greet(user);