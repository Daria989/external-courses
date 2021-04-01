function reduceElements(array, funcCallback, initialValue) {
    let accumulator = initialValue ? initialValue : array[0];
    let index = initialValue ? 0 : 1;

    for (let i = index; i < array.length; i++) {
        accumulator = funcCallback(accumulator, array[i], i, array);
    }
    
    return accumulator;
}

module.exports = reduceElements;
