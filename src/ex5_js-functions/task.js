function Calc() {
    let accumulator = 0;
    
    return {
        getResult: function getRes() {
                       return accumulator;
                   },

        reset: function res() {
                   accumulator = 0; 
               },

        add: function add(a = 0) { 
                 accumulator += a;
                 return add;
             },

        subtract: function sub(a = 0) {
                      accumulator -= a;
                      return sub;
                  },

        multiply: function mul(a = 1) {
                      accumulator *= a;
                      return mul;
                  },

        divide: function div(a = 1) {
                    if (a === 0 || a === Infinity || isNaN(a)) {
                        return console.log("Result is unknown");
                    }
                    accumulator /= a;
                    return div;
                },
    }
}

let Calculator = Calc();

module.exports = Calculator;
