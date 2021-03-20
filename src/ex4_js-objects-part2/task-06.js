function toUpStr(str) {
    let newStr = str.split(" ").map((element) => 
        element[0].toUpperCase() + element.slice(1));
        
    return newStr.join(' ');
}

module.exports = toUpStr;
