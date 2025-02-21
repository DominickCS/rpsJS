/* Rock: 1 Paper: 2 Scissors: 3
  Player A + 1 mod 3 == player B mod 3 to determine if bot wins

  Change CSS Styles based on game round function winner or loser 
*/

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerPlay = document.querySelectorAll(".choice");

rockBtn.value = 0;
paperBtn.value = 1;
scissorsBtn.value = 2;

function gameRound(playerPlay) {
  let botPlay = Math.trunc(Math.random() * 3);
  console.log(`Player chose: ${playerPlay}, Bot Chose: ${botPlay}`);
  if ((playerPlay - botPlay + 3) % 3 === 1) {
    console.log(`Player Wins`);
  } else if ((playerPlay - botPlay + 3) % 3 === 2) {
    console.log(`Bot Wins`);
  } else if ((playerPlay - botPlay + 3) % 3 === 0) {
    console.log(`It is a tie!`);
  }
}

for (let i = 0; i < playerPlay.length; i++) {
  playerPlay[i].addEventListener("click", function () {
    gameRound(Number(playerPlay[i].value));
  });
}
