function primeNumber(number) {
    if (number > 1000) {
        return 'Данные неверны';
    }
    
    if (number === 0 || number === 1) {
        return 'Число не простое и не составное';
    }

    if (number <= 1000) {
        var flag = true;
        for( let i=2; i<number; i++) {
            if(number % i ===0) {
                flag = false;
            break;
            }
        }
    }
    return flag ? ('Число ' + number + ' - простое число') : ('Число ' + number + ' - составное число');
}
module.exports = primeNumber;