function objWithoutPrototype () {
    let obj = Object.create(null);
    return obj;
}
module.exports = objWithoutPrototype;