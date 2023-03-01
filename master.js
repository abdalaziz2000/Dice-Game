document.getElementById("clickMe").onclick = startGame;

function startGame() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomImage = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

  var img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", randomImage);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImage2 = "images/dice" + randomNumber2 + ".png";

  var img2 = document.querySelectorAll("img")[1];

  img2.setAttribute("src", randomImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".btn").innerHTML = "   Player 1 won! ";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".btn").innerHTML = "   Player 2 won! ";
  } else {
    document.querySelector(".btn").innerHTML = " Draw!";
  }
}
