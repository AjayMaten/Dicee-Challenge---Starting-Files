function dicee() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");

  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");
  // document.getElementsById("img1").setAttribute("src", "images/dice1.png");
  if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Won";
  } else if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Won";
  } else {
    document.getElementsByTagName("h1")[0].innerHTML = "draw";
  }
}
