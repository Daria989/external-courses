function filterElements(array, funcCallback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (funcCallback(array[i], i, array)) {
           newArray.push(array[i]);
       }
    }
    
    return newArray;
}

module.exports = filterElements;
