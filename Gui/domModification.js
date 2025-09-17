import Rafflecup from "./AppLaget/Rafflecup.js";

const diceElements = document.querySelectorAll(".die");
const rollButton = document.getElementById("roll-button");

const cup = new Rafflecup();

diceElements.forEach(die => {
  die.innerHTML = `<img src="Images\dice6.svg" alt="Die 6">`;
  
});

rollButton.addEventListener("click", rollDice);

updateDicePic();
updateThrowsLeft();


function updateDicePic() {
  cup.getDice().forEach((die, index) => {
    const value = die.getEyes();
    diceElements[index].innerHTML = `<img src="Images/dice${value}.svg" alt="Die ${value}">`;
  });
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
    updateDicePic();
    updateThrowsLeft();
  } else {
    alert('Ingen kast tilbage');
  }
}
