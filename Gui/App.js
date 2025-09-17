import { cup, throwDice as modelThrowDice } from '../AppLaget/Model.js';

const rollButton = document.getElementById("roll-button");

rollButton.addEventListener("click", throwDice);


for (let i = 0; i < cup.dices.length; i++) {
    const diceNode = document.getElementById('dice' + i);
    diceNode.addEventListener('click', function() { 
        toggleHold(i);
    });
}



function updateDicePic(index, eyes) {
    let diceNode = document.getElementById('dice' + index)
    diceNode.src = "Images/dice" + eyes + '.svg'
}

function updateThrowsLeft() {
    const throwsLeftNode = document.getElementById('throws-left');
    if (!throwsLeftNode) return; // safety check

    if (cup.numberOfThrows > 0) {
        throwsLeftNode.textContent = `Kast tilbage: ${cup.numberOfThrows}`;
    } else {
        throwsLeftNode.textContent = 'Ingen kast tilbage';
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
        updateThrowsLeft();
    }
}


    function toggleHold(index) {
        if (cup.numberOfThrows === 3) return;
        cup.dices[index].hold = !cup.dices[index].hold;

        const diceNode = document.getElementById('dice' + index);
        if (cup.dices[index].hold) {
            diceNode.classList.add('hold');
        } else {
            diceNode.classList.remove('hold');
        }
    }
