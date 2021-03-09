function checkTypeOfData(data) {
    if (isNaN(data)) {
        return undefined;
    }
    switch(typeof data) {
        case 'number': return 'number';
        case 'string': return 'string';
        default: return undefined;
    }
}
module.exports = checkTypeOfData;
