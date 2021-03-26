function someOfElements(array, funcCallback) {
    for (let i = 0; i < array.length; i++) {
        if (funcCallback(array[i], i, array)) {
           return true;
       }
    }

    return false;
}

module.exports = someOfElements;
