export default class YatzyResultCalculator {
    constructor(dice) {
        this.dice = dice;
    }

    upperSectionScore(eyes) {
        let sum = 0;
        for (let die of this.dice) {
            if (die.getEyes() === eyes) {
                sum = sum + eyes;
            }
        }
        return sum;
    }

    onePairScore() {
        let highestPair = 0;
        for (let i = 0; i < this.dice.length; i++) {
            let dieOne = this.dice[i].getEyes();
            for (let j = i + 1; j < this.dice.length; j++) {
                let dieTwo = this.dice[j].getEyes();
                if (dieOne === dieTwo) {
                    if (dieOne * 2 > highestPair) {
                        highestPair = dieOne * 2;
                    }
                }
            }
        }
        return highestPair;
    }

    twoPairScore() {
        let firstPair = this.onePairScore();
        if (firstPair === 0) return 0;

        for (let i = 0; i < this.dice.length; i++) {
            let dieOne = this.dice[i].getEyes();
            if (dieOne !== firstPair / 2) {
                for (let j = i + 1; j < this.dice.length; j++) {
                    let dieTwo = this.dice[j].getEyes();
                    if (dieOne === dieTwo) {
                        let secondPair = dieOne * 2;
                        return firstPair + secondPair;
                    }
                }
            }
        }
        return 0;
    }

    threeOfAKindScore() {
        for (let i = 0; i < this.dice.length; i++) {
            let counter = 0;
            for (let j = i; j < this.dice.length; j++) {
                if (this.dice[i].getEyes() === this.dice[j].getEyes()) {
                    counter++;
                }
                if (counter >= 3) {
                    return this.dice[i].getEyes() * 3;
                }
            }
        }
        return 0;
    }

    fourOfAKindScore() {
        for (let i = 0; i < this.dice.length; i++) {
            let counter = 0;
            for (let j = i; j < this.dice.length; j++) {
                if (this.dice[i].getEyes() === this.dice[j].getEyes()) {
                    counter++;
                }
                if (counter >= 4) {
                    return this.dice[i].getEyes() * 4;
                }
            }
        }
        return 0;
    }

    smallStraightScore() {
        let oneOfEach = [];
        for (let i = 0; i < 6; i++) {
            oneOfEach[i] = 0;
        }
        for (let die of this.dice) {
            oneOfEach[die.getEyes() - 1]++;
        }
        for (let i = 0; i < oneOfEach.length - 1; i++) {
            if (oneOfEach[i] === 0) return 0;
        }
        return 15;
    }

    largeStraightScore() {
        let oneOfEach = [];
        for (let i = 0; i < 6; i++) {
            oneOfEach[i] = 0;
        }
        for (let die of this.dice) {
            oneOfEach[die.getEyes() - 1]++;
        }
        for (let i = 1; i < oneOfEach.length; i++) {
            if (oneOfEach[i] === 0) return 0;
        }
        return 20;
    }

    fullHouseScore() {
        let threeOfTheSame = this.threeOfAKindScore();
        let twoOfTheSame = this.onePairScore();

        if (threeOfTheSame === 0 || twoOfTheSame === 0) return 0;
        if (threeOfTheSame / 3 === twoOfTheSame / 2) return 0;

        return threeOfTheSame + twoOfTheSame;
    }

    chanceScore() {
        let sum = 0;
        for (let die of this.dice) {
            sum = sum + die.getEyes();
        }
        return sum;
    }

    yatzyScore() {
        for (let i = 0; i < this.dice.length; i++) {
            let counter = 0;
            for (let j = i; j < this.dice.length; j++) {
                if (this.dice[i].getEyes() === this.dice[j].getEyes()) {
                    counter++;
                }
                if (counter >= 5) return 50;
            }
        }
        return 0;
    }

}