export let cup = {
    dices: [{ eyes: 6, hold: false },
    { eyes: 6, hold: false },
    { eyes: 6, hold: false },
    { eyes: 6, hold: false },
    { eyes: 6, hold: false }],
    numberOfThrows: 3
}


export function throwDice() {
    for (let dice of cup.dices) {
        if (!dice.hold) {
            dice.eyes = Math.floor(Math.random() * 6) + 1;
        }
    }
    cup.numberOfThrows--;
}


export function upperSectionScore(eyes) {
    let sum = 0;
    for (let die of cup.dices) {
        if (die.eyes === eyes) {
            sum = sum + eyes;
        }
    }
    return sum;
}

function findPairs() {
    let counts = {};
    for (let die of cup.dices) {
        counts[die.eyes] = (counts[die.eyes] || 0) + 1;
    }

    let pairs = [];
    for (let face in counts) {
        if (counts[face] >= 2) {
            pairs.push(parseInt(face, 10) * 2);
        }
    }
    return pairs;
}

export function onePairScore() {
    const pairs = findPairs();
    if (pairs.length === 0) return 0;

    let highest = pairs[0];
    for (let index = 1; index < pairs.length; index++) {
        if (pairs[index] > highest) {
            highest = pairs[index];
        }
    }
    return highest;
}

export function twoPairScore() {
    const pairs = findPairs();
    if (pairs.length < 2) return 0;

    let highest = 0;
    let secondHighest = 0;

    for (let index = 0; index < pairs.length; index++) {
        if (pairs[index] > highest) {
            secondHighest = highest;
            highest = pairs[index];
        } else if (pairs[index] > secondHighest) {
            secondHighest = pairs[index];
        }
    }

    return highest + secondHighest;
}

export function threeOfAKindScore() {
    let counts = {};

    for (let dice of cup.dices) {
        counts[dice.eyes] = (counts[dice.eyes] || 0) + 1;
        if (counts[dice.eyes] >= 3) {
            return dice.eyes * 3;
        }
    }
    return 0;
}

export function fourOfAKindScore() {
    let counts = {};

    for (let dice of cup.dices) {
        counts[dice.eyes] = (counts[dice.eyes] || 0) + 1;
        if (counts[dice.eyes] >= 4) {
            return dice.eyes * 4;
        }
    }
    return 0;
}

export function smallStraightScore() {
    let needed = [1, 2, 3, 4, 5];

    for (let n of needed) {
        let found = false;
        for (let die of cup.dices) {
            if (die.eyes === n) {
                found = true;
                break;
            }
        }
        if (!found) {
            return 0;
        }
    }
    return 15;
}

export function largeStraightScore() {
    let needed = [2, 3, 4, 5, 6];

    for (let n of needed) {
        let found = false;
        for (let die of cup.dices) {
            if (die.eyes === n) {
                found = true;
                break;
            }
        }
        if (!found) {
            return 0;
        }
    }
    return 20;
}

export function fullHouseScore() {
  let counts = {};

  for (let die of cup.dices) {
    counts[die.eyes] = (counts[die.eyes] || 0) + 1;
  }

  let three = 0;
  let two = 0;

  for (let face in counts) {
    if (counts[face] === 3) three = parseInt(face);
    if (counts[face] === 2) two = parseInt(face);
  }

  if (three > 0 && two > 0) {
    return three * 3 + two * 2;
  }

  return 0;
}


export function chanceScore() {
    let sum = 0;
    for (let die of cup.dices) {
        sum = sum + die.eyes;
    }
    return sum;
}

export function yatzyScore() {
    let counts = {};

    for (let dice of cup.dices) {
        counts[dice.eyes] = (counts[dice.eyes] || 0) + 1;
        if (counts[dice.eyes] >= 5) {
            return 50 + (dice.eyes * 5);
        }
    }
    return 0;
}

