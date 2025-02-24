/* Rock: 1 Paper: 2 Scissors: 3
  Player A + 1 mod 3 == player B mod 3 to determine if bot wins

  Change CSS Styles based on game round function winner or loser 
*/

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerChoice = document.querySelectorAll(".choice");
let playerScore = Number(document.querySelector(".playerScore").textContent);
let botScore = Number(document.querySelector(".botScore").textContent);
let gameOver = false;

rockBtn.value = 0;
paperBtn.value = 1;
scissorsBtn.value = 2;

function gameRound(playerChoice) {
  if (gameOver === false) {
    let botChoice = Math.trunc(Math.random() * 3);
    console.log(`Player chose: ${playerChoice}, Bot Chose: ${botChoice}`);
    if ((playerChoice - botChoice + 3) % 3 === 1) {
      console.log(`Player Wins`);
      document.querySelector(".statusUpdate").textContent =
        "PLAYER WINS THE ROUND!";
      document.querySelector(".playerScoreBox").style.backgroundColor = "Green";
      document.querySelector(".botScoreBox").style.backgroundColor = "White";
      document.querySelector(".playerScore").textContent = playerScore += 1;
      if (playerScore === 3) {
        gameOver = true;
        document.querySelector(".statusUpdate").textContent =
          "GAME OVER: PLAYER WINS THE GAME!";
      }
    } else if ((playerChoice - botChoice + 3) % 3 === 2) {
      console.log(`Bot Wins`);
      document.querySelector(".botScore").textContent = botScore += 1;
      document.querySelector(".statusUpdate").textContent =
        "BOT WINS THE ROUND!";
      document.querySelector(".botScoreBox").style.backgroundColor = "Green";
      document.querySelector(".playerScoreBox").style.backgroundColor = "White";
      if (botScore === 3) {
        gameOver = true;
        document.querySelector(".statusUpdate").textContent =
          "GAME OVER: BOT WINS THE GAME!";
      }
    } else if ((playerChoice - botChoice + 3) % 3 === 0) {
      console.log(`It is a tie!`);
      document.querySelector(".statusUpdate").textContent = "IT'S A TIE!";
      document.querySelector(".botScoreBox").style.backgroundColor = "Yellow";
      document.querySelector(".playerScoreBox").style.backgroundColor =
        "Yellow";
    }
  }
}

for (let i = 0; i < playerChoice.length; i++) {
  playerChoice[i].addEventListener("click", function () {
    if (gameOver === false) {
      if (playerChoice[i].classList[0] === "rock") {
        document.querySelector(".rockGif").style.display = "flex";
        document.querySelector(".paperGif").style.display = "none";
        document.querySelector(".scissorsGif").style.display = "none";
      } else if (playerChoice[i].classList[0] === "paper") {
        document.querySelector(".rockGif").style.display = "none";
        document.querySelector(".paperGif").style.display = "flex";
        document.querySelector(".scissorsGif").style.display = "none";
      } else if (playerChoice[i].classList[0] === "scissors") {
        document.querySelector(".rockGif").style.display = "none";
        document.querySelector(".paperGif").style.display = "none";
        document.querySelector(".scissorsGif").style.display = "flex";
      }
      gameRound(Number(playerChoice[i].value));
    }
  });
}
