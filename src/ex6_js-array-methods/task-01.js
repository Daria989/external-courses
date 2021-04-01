function partOfArr(array, begin, end) {
    let newArr = [];
    let start = findStartStop(array, begin);
    let stop = findStartStop(array, end);

    function findStartStop(arr, beginEnd) {
        let value = 0;
        if (beginEnd < 0) {
            value = (Math.abs(beginEnd) < arr.length) ? arr.length + beginEnd : 0;
        }
        else if (beginEnd > arr.length) {
            value = arr.length;
        }
        else {
            value = beginEnd;
        }

        return value;
    }

    function cutArray(range) {
        for (let i = 0; i < range; i++) {
            newArr[i] = array[i + start];
        }
    }

    if (begin===undefined && end===undefined) {
        newArr = array;
    }
    else if (end===undefined) {
        cutArray(array.length - start);
    }
    else {
        cutArray(stop - start);
    }

    return newArr; 
}

module.exports = partOfArr;
