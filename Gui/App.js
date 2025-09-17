import { cup, throwDice as modelThrowDice } from '../AppLaget/Model.js';

const rollButton = document.getElementById("roll-button");

rollButton.addEventListener("click", throwDice);

function updateDicePic(index, eyes) {
    let diceNode = document.getElementById('dice' + index)
    diceNode.src = "Images/dice" + eyes + '.svg'
}

function updateThrowsLeft() {
    const throwsLeftNode = document.getElementById('throws-left');
    if (throwsLeftNode) {
        throwsLeftNode.textContent = `Kast tilbage: ${cup.numberOfThrows}`;
    }
}

function throwDice() {
    if (cup.numberOfThrows > 0) {
        modelThrowDice();
        for (let index = 0; index < cup.dices.length; index++) {
            if (!cup.dices[index].hold) {
                updateDicePic(index, cup.dices[index].eyes);
            }
        }
        updateThrowsLeft();
    } else {
        alert('Ingen kast tilbage');
    }
}