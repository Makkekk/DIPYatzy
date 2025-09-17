const diceElements = document.querySelectorAll(".die");
const rollButton = document.getElementById("roll-button");

let cup = {
  dices: [{ eyes: 6, hold: false },
  { eyes: 6, hold: false },
  { eyes: 6, hold: false },
  { eyes: 6, hold: false },
  { eyes: 6, hold: false }],
  numberOfThrows: 3
}


for (let dice of diceElements) {
  dice.attributes('src') = 'Images/dice6.svg'
}

rollButton.addEventListener("click", rollDice);

updateDicePic();
updateThrowsLeft();


function updateDicePic(index, eyes) {
  let diceNode = document.getElementById('dice' + index)
  diceNode.src = "Images/dice" + eyes + '.svg'
}

function updateThrowsLeft() {
  const throwsLeftNode = document.getElementById('throws-left');
  if (throwsLeftNode) {
    throwsLeftNode.textContent = `Kast tilbage: ${cup.getNumberOfThrowsLeft()}`;
  }
}

function throwDice() {
  if (cup.numberOfThrows > 0) {
    for (let index in cup.dices) {
      if (!cup[index].hold) {
        let eyeValue = cup.dices[index].eyes = Math.floor(Math.random() * 6) + 1;
        updateDicePic(index, eyeValue);
      }
    }
    cup.numberOfThrows--;
  } else {
    alert('Ingen kast tilbage');
  }
}