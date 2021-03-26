function Calc() {
    let accumulator = 0;
    
    return {
        getResult() {
            return accumulator;
        },

        reset() {
            accumulator = 0; 
        },

        add(a = 0) {
            accumulator += a;
            return this.add;
        },

        subtract(a = 0) {
            accumulator -= a;
            return this.subtract;
        },

        multiply(a = 1) {
            accumulator *= a;
            return this.multiply;
        },

        divide(a = 1) {
            if (a === 0 || a === Infinity || isNaN(a)) {
                return console.log("Result is unknown");
            }
            accumulator /= a;
            return this.divide;
        },
    }
}

let Calculator = Calc();

module.exports = Calculator;
