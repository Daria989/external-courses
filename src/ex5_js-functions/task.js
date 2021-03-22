function Calc() {
    accumulator = 0;
    
    return {
        getResult:  () => {
                        return accumulator;
                    },

        reset:      () => {
                        accumulator = 0; 
                    },

        add:        function add(a = 0) {
                        accumulator += a;
                        return add;
                    },

        subtract:   function sub(a = 0) {
                        accumulator -= a;
                        return sub;
                    },

        multiply:   function mul(a = 0) {
                        accumulator *= a;
                        return mul;
                    },

        divide:     function div(a = 1) {
                        accumulator /= a;
                        return div;
                    }
        }

}

let Calculator = Calc();

module.exports = Calculator;
