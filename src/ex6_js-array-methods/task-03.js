function everyElements(array, funcCallback) {
    for (let i = 0; i < array.length; i++) {
        if (!funcCallback(array[i], i, array)) {
           return false;
       }
    }
    return true;
}

module.exports = everyElements;
