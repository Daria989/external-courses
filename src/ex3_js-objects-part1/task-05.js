function copyObj (object) {
    let newObject = {};
    Object.assign(newObject, object);
    return newObject;
}
module.exports = copyObj;