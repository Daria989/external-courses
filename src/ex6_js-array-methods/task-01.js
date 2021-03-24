function partOfArr(array, begin, end) {
    let newArr = [];
    let start = begin < 0 ? array.length + begin : begin;
    let stop = end < 0 ? array.length + end : end;

    if (!begin && !end) {
        newArr = array;
        return newArr;
    }

    if (!end) {
        for (let i = 0; i < (array.length-start); i++) {
            newArr[i] = array[i + start];
        }
        return newArr;
    }

    for (let i = 0; i < (stop-start); i++) {
        newArr[i] = array[i + start];
    }
    
    return newArr;
}

module.exports = partOfArr;

