// for dice 1
var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "dice" + randomVariable1 + ".png";
var randomImgSource1 = "images/" + randomDiceImg1;
document.querySelector(".img1").setAttribute("src", randomImgSource1);

//for dice 2 
var randomVariable2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomVariable2 + ".png";
var randomImgSource2 = "images/" + randomDiceImg2;
document.querySelector(".img2").setAttribute("src", randomImgSource2);

if(randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
}
else if(randomVariable2 > randomVariable1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}