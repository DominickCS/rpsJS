/* Rock: 1 Paper: 2 Scissors: 3
  Player A + 1 mod 3 == player B mod 3 to determine if bot wins

  Change CSS Styles based on game round function winner or loser 
*/

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerPlay = document.querySelectorAll(".choice");

rockBtn.value = 1;
paperBtn.value = 2;
scissorsBtn.value = 3;

function gameRound(playerPlay) {
  botPlay = Math.trunc(Math.random() * 3);
}

for (let i = 0; i < playerPlay.length; i++) {
  playerPlay[i].addEventListener("click", function () {
    gameRound(Number(playerPlay[i].value));
  });
}
