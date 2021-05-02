function Calc() {
    let accumulator = 0;
    
    return {
        fetchData(callback) {
            let promise = new Promise((resolve) => {
                setTimeout(() => { resolve() }, 1000);
            })
            promise.then(this.setState(callback(500)));
        },

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

function setStateCallback(a = 0) {
    return a;
};

var Calculator = Calc();

 module.exports = Calculator;
