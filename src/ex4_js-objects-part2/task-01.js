function findProperty(keyword, object) {
    return Object.getPrototypeOf(object)[keyword];
}

module.exports = findProperty;
