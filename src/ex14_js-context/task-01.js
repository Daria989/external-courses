function Calc() {
    let accumulator = 0;
    
    return {
        getResult() {
            return accumulator;
        },

        setState(a = 0) {
            accumulator = a;
            return this;
        },

        reset() {
            accumulator = 0; 
            return this;
        },

        add(a = 0) {
            accumulator += a;
            return this;
        },

        subtract(a = 0) {
            accumulator -= a;
            return this;
        },

        multiply(a = 1) {
            accumulator *= a;
            return this;
        },

        divide(a = 1) {
            if (a === 0 || a === Infinity || isNaN(a)) {
                return console.log("Result is unknown");
            }
            accumulator /= a;
            return this;
        }
    }
}

var Calculator = Calc();

// module.exports = Calculator;


const result = Calculator.add(100)
.divide(20)
.reset()
.subtract(1)
.setState(1)
.getResult()

console.log(result);
