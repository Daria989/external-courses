function mapElements(array, funcCallback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
           newArray.push(funcCallback(array[i], i, array));
       }
    return newArray;
}

module.exports = mapElements;
