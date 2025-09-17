import Die from "./AppLaget/Die.js";
import YatzyResultCalculator from "./AppLaget/YatzyResultCalculator.js";

function testYatzyCalculator() {
    // Test cases: hver array indeholder terningernes værdier
    const testCases = [
        { name: "All ones", dice: [1,1,1,1,1] },
        { name: "One pair", dice: [2,2,3,4,5] },
        { name: "Two pair", dice: [2,2,3,3,5] },
        { name: "Three of a kind", dice: [4,4,4,2,5] },
        { name: "Four of a kind", dice: [6,6,6,6,2] },
        { name: "Small straight", dice: [1,2,3,4,5] },
        { name: "Large straight", dice: [2,3,4,5,6] },
        { name: "Full house", dice: [3,3,3,5,5] },
        { name: "Chance", dice: [2,3,4,5,6] },
        { name: "Yatzy", dice: [5,5,5,5,5] }
    ];

    testCases.forEach(test => {
        // Opret terninger med de ønskede værdier
        const diceObjects = test.dice.map(val => new Die(val));
        const calc = new YatzyResultCalculator(diceObjects);

        console.log(`\n--- ${test.name} ---`);
        console.log("Upper section (1):", calc.upperSectionScore(1));
        console.log("One pair:", calc.onePairScore());
        console.log("Two pair:", calc.twoPairScore());
        console.log("Three of a kind:", calc.threeOfAKindScore());
        console.log("Four of a kind:", calc.fourOfAKindScore());
        console.log("Small straight:", calc.smallStraightScore());
        console.log("Large straight:", calc.largeStraightScore());
        console.log("Full house:", calc.fullHouseScore());
        console.log("Chance:", calc.chanceScore());
        console.log("Yatzy:", calc.yatzyScore());
    });
}

testYatzyCalculator();