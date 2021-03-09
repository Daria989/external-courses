function equalElements(array) {
    return array.every((value) =>
        array.indexOf(value) === 0)
}
module.exports = equalElements;