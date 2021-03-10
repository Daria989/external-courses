
function isKeyword(keyword, object) {
    if (keyword in object) {
        return object;
    }
    let newObject = Object.assign(object);
    newObject[keyword] = 'new';
    return newObject;
}
module.exports = isKeyword;