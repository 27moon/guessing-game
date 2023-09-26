class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;    
    }

    guess() {
// найти значение, отталкиваясь от диапазона min-max
// находим середину
    this.result = Math.ceil((this.min + this.max) / 2);
    return this.result;
    }

    lower() {
        this.max = this.result;
        return this.max;
    }

    greater() {
        this.min = this.result;
        return this.min;
    }
}

module.exports = GuessingGame;
