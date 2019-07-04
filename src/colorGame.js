// alert("Connected!");
var numSquares = 6
var color = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var displayColor = document.getElementById("colorDisplay");
var displayMessage = document.getElementById('message');
var h1 =  document.querySelector("h1");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var resetButton = document.getElementById("reset");


easyBtn.addEventListener('click',function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	color = generateRandomColor(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;

	for(var i=0; i< squares.length; i++){
		if(color[i]){
			squares[i].style.backgroundColor = color[i];
		}else{
			squares[i].style.display = "none";
		}
	}

});
hardBtn.addEventListener('click',function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	color = generateRandomColor(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;

	for(var i=0; i< squares.length; i++){
			
		squares[i].style.backgroundColor = color[i];
		squares[i].style.display = "block";

	}
});	
displayColor.textContent = pickedColor;
	
resetButton.addEventListener("click",function(){
	//generate all the colors
	 color = generateRandomColor(numSquares);
	//pick a new random color from an array
	 pickedColor = pickColor();
	//change the color display to match the picked color
	colorDisplay.textContent = pickedColor;
	//change the color of squares
	for(var i=0; i< squares.length;i++){

		squares[i].style.backgroundColor = color[i];

	}
	resetButton.textContent = "New Colors"
	h1.style.backgroundColor = "steelblue";
	displayMessage.textContent = "";

});




for(var i = 0; i < squares.length ; i++){
	//initialize the colors to the squares
	squares[i].style.backgroundColor = color[i];
	//grab  the clicked square
	squares[i].addEventListener("click",function(){
		//grab a color of the clicked square
		var ClickedColor = this.style.backgroundColor;
		// console.log(ClickedColor,pickedColor);
		//compare the color with the picked color
		if(pickedColor === ClickedColor){
			// alert("Correct!");
			displayMessage.textContent = "Correct!";
			changeColor(ClickedColor);
			h1.style.backgroundColor = ClickedColor;
			resetButton.textContent = "Play Again?";

		}else{
			// alert("Wrong!");
			displayMessage.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});

	
}

function changeColor(color){
	//loop through the squares
	for(var i = 0; i< squares.length; i++){
		//assigne the all the square with the given color
	squares[i].style.backgroundColor = color;
	
	}
}
function pickColor(){
	var random =  Math.floor(Math.random() * color.length)
	return color[random]; 
}

function generateRandomColor(num){

	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//pick a "red from 0 - 255"
	var r  = Math.floor(Math.random() * 256);
	//pick a "green from 0 - 255"
	var g  = Math.floor(Math.random() * 256);
	//pick a "blue from 0 - 255"
	var b  = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";

}