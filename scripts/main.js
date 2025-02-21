/* Rock: 1 Paper: 2 Scissors: 3
  Player A + 1 mod 3 == player B mod 3 to determine if bot wins

  Change CSS Styles based on game round function winner or loser 
*/

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.value = 1;
paperBtn.value = 2;
scissorsBtn.value = 3;

function gameRound() {
  botPlay = Math.trunc(Math.random() * 3);
  console.log(botPlay);
}

gameRound();
