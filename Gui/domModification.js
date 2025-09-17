import Rafflecup from "./AppLaget/Rafflecup.js";

const diceElements = document.querySelectorAll(".die");
const rollButton = document.getElementById("roll-button");

const cup = new Rafflecup();
for (let dice of diceElements) {
  dice.attributes('src') = 'Images/dice6.svg'
}

rollButton.addEventListener("click", rollDice);

updateDicePic();
updateThrowsLeft();


function updateDicePic(index, eyes) {
 let  diceNode = document.getElementById('dice'+index)
 diceNode.src = "Images/dice" + eyes + '.svg'
}

function updateThrowsLeft() {
  const throwsLeftNode = document.getElementById('throws-left');
  if (throwsLeftNode) {
    throwsLeftNode.textContent = `Kast tilbage: ${cup.getNumberOfThrowsLeft()}`;
  }
}

function rollDice() {
  if (cup.getNumberOfThrowsLeft() > 0) {
    cup.throwDice();
    updateDicePic(3, 4);
    updateThrowsLeft();
  } else {
    alert('Ingen kast tilbage');
  }
}
