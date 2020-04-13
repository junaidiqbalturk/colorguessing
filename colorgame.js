var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var colordisplay = document.getElementById("colordisplay");

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

var resetButton  = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3; 

    colors  = generateRandomColor(numSquares);
    pickedColor = pickColor();

    colordisplay.textContent = pickedColor;

    for( var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected"); 

    numSquares = 6;

    colors  = generateRandomColor(numSquares);
    pickedColor = pickColor();

    colordisplay.textContent = pickedColor;

    for( var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
        
    
});

resetButton.addEventListener("click", function(){
    //generate all new colors;
    colors = generateRandomColor(numSquares);

    //pick a new random color; 
    pickedColor = pickColor();
    //change color display to match picked color
    colordisplay.textContent = pickedColor;

    this.textContent = "New Colors";

    //reseting the Message display
    messageDisplay.textContent = "";
    //change color of squares
    for( var i=0; i <  squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";

});



colordisplay.textContent = pickedColor;

for(var i=0; i< squares.length; i++){
    //Add Initial Colors to Squares
     squares[i].style.backgroundColor = colors[i];

    //Add click Listener to Squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square 
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    console.log(clickedColor,pickedColor);
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
    }else{
        this.style.backgroundColor = "#23232323";
        messageDisplay.textContent = "Try Again";
    }
    });

 }
 //function that makes Correct COlor to every squares
 function changeColor(color){
     //loop through all square 
     for (var i=0; i<squares.length; i++){
          // change each color to match given color
         squares[i].style.backgroundColor = color;
     }
    
 }
 function pickColor(){
     var random = Math.floor(Math.random() * colors.length);

     return colors[random];
 }

 function generateRandomColor(num){
     // Make an array 
     var arr = []
     // repeat num times
     for(var i=0; i < num; i++){
         //get random colors push into array
         arr.push(randomColor());
         

     }
     //return that array

     return arr;

 }

 function randomColor(){
     //pick a "red" from 0 to 255
     var r = Math.floor(Math.random() * 256);
     //pick a "green" from 0 to 255
     var g = Math.floor(Math.random() * 256);
     //pick a "blue" from 0 to 255
     var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
    

 }