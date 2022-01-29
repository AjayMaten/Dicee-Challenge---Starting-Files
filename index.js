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
}
