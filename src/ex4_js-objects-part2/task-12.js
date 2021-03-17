function sumRounded(a, b) {
    let sum = (a + b).toFixed(3);
    return parseFloat(sum);
}
module.exports = sumRounded;