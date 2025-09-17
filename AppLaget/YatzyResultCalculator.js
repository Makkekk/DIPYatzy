export default class YatzyResultCalculator {
    constructor(dice) {
        this.dice = dice;
    }

    upperSectionScore(eyes) {
        let sum = 0;
        for (const die of this.dice) {
            if (die.getEyes() === eyes) {
                sum = sum + eyes;
            }
        }
        return sum;
    }

    twoPairScore(){
        
    }
}