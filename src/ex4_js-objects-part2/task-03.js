function delSpace(str) {
    let newStr = str;

    if (newStr[0] === " ") {
        newStr = newStr.slice(1, newStr.length);
    }

    if (newStr[newStr.length - 1] === " ") {
        newStr = newStr.slice(0, newStr.length - 1);
    }
    
    return newStr;
}

module.exports = delSpace;
