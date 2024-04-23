var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = randomDiceImage;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);

var display=document.querySelector("h1")
if(randomNumber1>randomNumber2){
    display.innerHTML="Player 1 wins"

}
else if(randomNumber1==randomNumber2){
    display.innerHTML="It's a draw"
}

else if(randomNumber1<randomNumber2){
    display.innerHTML="Player 2 wins"
}





