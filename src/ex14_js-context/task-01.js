const Calculator = {
    
    accumulator: 0,

    fetchData: (callback) => {
        let promise = new Promise((resolve) => {
            setTimeout(() => {resolve()}, 1000);
        })
        promise.then(Calculator.setState(callback(500)));
    },

    getResult: () => {
        return Calculator.accumulator;
    },

    setState: (a = 0) => {
        Calculator.accumulator = a;
        return Calculator;
    },

    reset: () => {
        Calculator.accumulator = 0; 
        return Calculator;
    },

    add: (a = 0) => {
        Calculator.accumulator += a;
        return Calculator;
    },

    subtract: (a = 0) => {
        Calculator.accumulator -= a;
        return Calculator;
    },

    multiply: (a = 1) => {
        Calculator.accumulator *= a;
        return Calculator;
    },

    divide: (a = 1) => {
        if (a === 0 || a === Infinity || isNaN(a)) {
            return console.log("Result is unknown");
        }
        Calculator.accumulator /= a;
        return Calculator;
    }
}

function setStateCallback(a = 0) {
    return a;
};

 module.exports = Calculator;
