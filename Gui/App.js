import {
    cup,
    throwDice as modelThrowDice,
    upperSectionScore,
    onePairScore,
    twoPairScore,
    threeOfAKindScore,
    fourOfAKindScore,
    smallStraightScore,
    largeStraightScore,
    fullHouseScore,
    chanceScore,
    yatzyScore
} from "../AppLaget/Model.js";

// --- Setup ---
document.getElementById("roll-button").addEventListener("click", throwDice);

for (let i = 0; i < cup.dices.length; i++) {
    const diceNode = document.getElementById("dice" + i);
    diceNode.addEventListener("click", () => toggleHold(i));
}

// Husk hvilke kategorier der er låst
const lockedCategories = {};

function updateDicePic(index, eyes) {
    let diceNode = document.getElementById("dice" + index);
    diceNode.src = "Images/dice" + eyes + ".svg";
}

function updateThrowsLeft() {
    const throwsLeftNode = document.getElementById("throws-left");
    if (!throwsLeftNode) return;

    if (cup.numberOfThrows > 0) {
        throwsLeftNode.textContent = `Kast tilbage: ${cup.numberOfThrows}`;
    } else {
        throwsLeftNode.textContent = "Ingen kast tilbage";
    }
}

// --- Spilfunktioner ---
function throwDice() {
    if (cup.numberOfThrows > 0) {
        modelThrowDice();
        for (let index = 0; index < cup.dices.length; index++) {
            if (!cup.dices[index].hold) {
                updateDicePic(index, cup.dices[index].eyes);
            }
        }
        updateThrowsLeft();
        updateScores();
    } else {
        updateThrowsLeft();
    }
}

function toggleHold(index) {
    if (cup.numberOfThrows === 3) return; // kan ikke holde før første kast
    cup.dices[index].hold = !cup.dices[index].hold;

    const diceNode = document.getElementById("dice" + index);
    if (cup.dices[index].hold) {
        diceNode.classList.add("hold");
    } else {
        diceNode.classList.remove("hold");
    }
}

function updateScores() {
    // Øvre sektion
    const upperClasses = ["En", "To", "Tre", "Fire", "Fem", "Seks"];
    for (let i = 1; i <= 6; i++) {
        const li = document.querySelector(`.${upperClasses[i - 1]} .score`);
        if (li && !lockedCategories[upperClasses[i - 1]]) {
            li.textContent = upperSectionScore(i);
        }
    }

    // Nedre sektion
    if (!lockedCategories["etPar"])
        document.querySelector(".etPar .score").textContent = onePairScore();
    if (!lockedCategories["toPar"])
        document.querySelector(".toPar .score").textContent = twoPairScore();
    if (!lockedCategories["trePar"])
        document.querySelector(".trePar .score").textContent = threeOfAKindScore();
    if (!lockedCategories["fireEns"])
        document.querySelector(".fireEns .score").textContent = fourOfAKindScore();
    if (!lockedCategories["lilleStraight"])
        document.querySelector(".lilleStraight .score").textContent = smallStraightScore();
    if (!lockedCategories["stortStraigt"])
        document.querySelector(".stortStraigt .score").textContent = largeStraightScore();
    if (!lockedCategories["fuldtHus"])
        document.querySelector(".fuldtHus .score").textContent = fullHouseScore();
    if (!lockedCategories["Chance"])
        document.querySelector(".Chance .score").textContent = chanceScore();
    if (!lockedCategories["YATZY"])
        document.querySelector(".YATZY .score").textContent = yatzyScore();
}

function setupCategoryClicks() {
    const scores = document.querySelectorAll('.score')
    for (const span of scores) {
        span.parentElement.addEventListener('click', () => {
            const category = span.parentElement.classList[0]; // fx "En", "etPar"

            if (!lockedCategories[category]) {
                lockedCategories[category] = true;
                span.parentElement.classList.add("locked");

                // Reset til ny runde
                for (let die of cup.dices) {
                    die.hold = false;
                    die.eyes = 6;
                }
                cup.numberOfThrows = 3;

                for (const index in cup.dices) {
                    updateDicePic(index, 6);
                    document.getElementById("dice" + index).classList.remove("hold");
                }

                updateThrowsLeft();
                updateTotals();
            }
        })
    }
}

function updateTotals() {
    // Øvre sektion
    let upperSum = 0;
    const upperClasses = ["En", "To", "Tre", "Fire", "Fem", "Seks"];
    for (const cls of upperClasses) {
        if (lockedCategories[cls]) {
            upperSum += parseInt(
                document.querySelector(`.${cls} .score`).textContent
            ) || 0;
        }
    }
    document.getElementById("upper-sum").textContent = upperSum;

    // Bonus
    let bonus = (upperSum >= 63) ? 50 : 0;
    document.getElementById("upper-bonus").textContent = bonus;

    // Nedre sektion
    let lowerSum = 0;
    const lowerClasses = [
        "etPar",
        "toPar",
        "trePar",
        "fireEns",
        "lilleStraight",
        "stortStraigt",
        "fuldtHus",
        "Chance",
        "YATZY",
    ];

    for (let cls of lowerClasses) {
        if (lockedCategories[cls]) {
            lowerSum += parseInt(
                document.querySelector(`.${cls} .score`).textContent
            ) || 0;
        }
    }

    // Total
    document.getElementById("total-score").textContent = upperSum + bonus + lowerSum;
}

// Init
updateThrowsLeft();
updateScores();
setupCategoryClicks();