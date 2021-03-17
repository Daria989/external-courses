 function nestedClone(object) {
    let newObj = {};
        for (let key in object) {
            if (typeof object[key] === "object" && !Array.isArray(object[key]) && object[key] !== null) {
                newObj[key] = nestedClone(object[key]);  
            }
            else if (Array.isArray(object[key])) {
                newObj[key] = object[key].map(a => Object.assign({}, a));
            }
            else {
                newObj[key] = object[key];
            }
        }
    return newObj;
}
module.exports = nestedClone;


