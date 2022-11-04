function diceGame() {
    var dice1 = Math.floor((Math.random() * 7));
    if (dice1 == 0) {
        dice1 = 1;
        var playerDice1 = "Images/1.png";
    } else {
        var playerDice1 = "Images/" + dice1 + ".png";
    }
    var player1Img = document.querySelectorAll("img")[0];
    player1Img.setAttribute("src", playerDice1);

    var dice2 = Math.floor((Math.random() * 7));
    if (dice2 == 0) {
        dice2 = 1;
        var playerDice2 = "Images/1.png";
    } else {
        var playerDice2 = "Images/" + dice2 + ".png";
    }
    var player2Img = document.querySelectorAll("img")[1];
    player2Img.setAttribute("src", playerDice2);

    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
    }
    else if (dice1 < dice2) {
        document.querySelector("h1").innerHTML = "Player 2 Win! 🚩";
    }
    else if (dice1 == dice2) {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}