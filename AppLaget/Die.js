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


