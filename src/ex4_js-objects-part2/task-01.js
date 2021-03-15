function findProperty(keyword, object) {
    return object.__proto__[keyword];
}
module.exports = findProperty;