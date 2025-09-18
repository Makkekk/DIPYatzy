import Die from './Die.js';
export default class RaffleCup {
    constructor() {
        this.dice = Array.from({ length: 5 }, () => new Die());
        this.numberOfThrowsLeft = 3;
    }

    throwDice() {
        for (die of this.dice) {
            die.roll;
        }
        this.numberOfThrowsLeft--;
    }

    getDice() {
        return this.dice
    }

    getNumberOfThrowsLeft() {
        return this.numberOfThrowsLeft;
    }
}
