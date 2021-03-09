function maxValue(array) {
    let arr;
    arr = array.sort((a,b) => b-a);
    return arr[0];
}
module.exports = maxValue;