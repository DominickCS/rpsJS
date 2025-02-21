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
      document.querySelector(".playerScore").textContent = playerScore += 1;
      document.querySelector("body").style.backgroundColor = "Green";
      if (playerScore === 3) {
        gameOver = true;
      }
    } else if ((playerChoice - botChoice + 3) % 3 === 2) {
      console.log(`Bot Wins`);
      document.querySelector(".botScore").textContent = botScore += 1;
      document.querySelector("body").style.backgroundColor = "Red";
      if (botScore === 3) {
        gameOver = true;
      }
    } else if ((playerChoice - botChoice + 3) % 3 === 0) {
      console.log(`It is a tie!`);
      document.querySelector("body").style.backgroundColor = "Yellow";
    } else if (gameOver === true) {
      console.log("game is over");
    }
  }
}

for (let i = 0; i < playerChoice.length; i++) {
  playerChoice[i].addEventListener("click", function () {
    if (gameOver === false) {
      gameRound(Number(playerChoice[i].value));
    } else if (gameOver === true) {
      console.log("Game is over...");
    }
  });
}
