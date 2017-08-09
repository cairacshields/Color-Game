
//An Array of colors for our squares, soon this will be randomized
var colors = generateRandomColors(6);

//Now we need to select all of our squares 
var squares = document.querySelectorAll(".square");

//Anytime the pickedColor variable is called, it will run the pickColor() function and return a random color
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var result = document.getElementById("result");
var header = document.querySelector("#header");

//Buttons
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var newColor = document.querySelector("#newColor");

colorDisplay.textContent = pickedColor;

for(var i =0; i< squares.length; i++){
	//We assign one of the colors in our colors array to the specic square as we loop through them all
	squares[i].style.backgroundColor = colors[i];

	//add click listener to each square
	squares[i].addEventListener("click", function(){
		//grab the color of the clicked square and compare the color to the variable 'pickedcolor' 
		//We can use the 'this' keyword to specify the current square

		var colorPicked = this.style.backgroundColor;


		if(colorPicked == pickedColor){
			result.textContent = "Correct!";
			//When someone wins the game, we want to change all the squares to be the winning color
			//So we pass the winning color to our changeAllColors() function
			changeAllColors(pickedColor);
			newColor.textContent = "Play Again?";
		}else{
			//If the guess is wrong, change the quare to the background color of the page to give a fading effect
			this.style.backgroundColor = "#232323";
			result.textContent = "Try Again!";
		} 
	});
}

easy.addEventListener("click", function(){
	easy.classList.add("btn-success");
	hard.classList.remove("btn-success");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i< squares.length; i++){
	//We assign one of the colors in our colors array to the specic square as we loop through them all
	squares[i].style.backgroundColor = colors[i];
	}
	squares[3].style.backgroundColor ="#232323";
	squares[4].style.backgroundColor ="#232323";
	squares[5].style.backgroundColor ="#232323";
});

hard.addEventListener("click", function() {
	hard.classList.add("btn-success");
	easy.classList.remove("btn-success");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i< squares.length; i++){
	//We assign one of the colors in our colors array to the specic square as we loop through them all
	squares[i].style.backgroundColor = colors[i];
	}
});
newColor.addEventListener("click", function(){
	//Generate all new colors, pick new random color from array, change colors of the sqaures 

	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i< squares.length; i++){
	//We assign one of the colors in our colors array to the specic square as we loop through them all
	squares[i].style.backgroundColor = colors[i];
	}
	header.style.backgroundColor = "#232323";
	result.textContent = "";
	newColor.textContent = "Change Colors";
});
function changeAllColors(color){

	for(var i=0; i< squares.length; i++){
		//Change the color of all squares
		squares[i].style.backgroundColor = color;
		result.style.color= color;
		header.style.backgroundColor = color;
	}
}

//Pick Color function will pick a random number and use that number to select a color from the colors array. 
function pickColor(){
	//Here we are going to use the Math.random() to generate a random number between 0 and the length of our color array.
	//this logic is good for randomly selecting a color based on index from the colors array everytime the game is played
	var random = Math.floor(Math.random() * colors.length);
	//After we've generated a random number between 0 and 5 (because even though colors array is 6 items long, Math.random can never actually return 6).
	//We just return a color at a random index
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i =0; i<num; i++){

		//we are pushing .... rgb(someNumber, someNumber, someNumber)
		arr.push("rgb(" + Math.floor(Math.random() * 256)+ ", " + 
			Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")");
	}
	console.log(arr);
	return arr;
}







