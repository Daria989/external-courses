function partOfArr(array, begin, end) {
    let newArr = [];
    let start = findStartStop(array, begin);
    let stop = findStartStop(array, end);

    function findStartStop (arr, beginEnd) {
        let value = 0;
        if (beginEnd < 0) {
            value = (Math.abs(beginEnd) < arr.length) ? arr.length + beginEnd : 0;
        }
        else {
            value = beginEnd;
        }

        return value;
    }

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
