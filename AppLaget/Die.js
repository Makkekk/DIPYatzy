export default class Die {
    constructor(eyes = 0) {
        this.eyes = eyes;
    }

    getEyes() {
        return this.eyes;
    }

    roll() {
        this.eyes = Math.floor(Math.random() * 6) + 1;
    }
}

let cup = [{eyes: 5, hold: false}, {eyes: 5, hold: false}, {eyes: 5, hold: false}, {eyes: 5, hold: false}, {eyes: 5, hold: false}]

function throwDice() {
    for (let index in cup){
        if cup[index].hold == false {
            dice.eyes = 
        }
    }
}