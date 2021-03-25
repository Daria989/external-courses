function reduceElements(array, funcCallback, initialValue) {
    let accumulator = array[0];
    if (initialValue) {
        accumulator = initialValue;
        for (let i = 0; i < array.length; i++) {
           accumulator = funcCallback(accumulator, array[i], i, array);
        }
        return accumulator;
    }

    for (let i = 1; i < array.length; i++) {
        accumulator = funcCallback(accumulator, array[i], i, array);
    }
    return accumulator;
}

module.exports = reduceElements;
