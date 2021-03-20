function strToStr(strMain, str, num) {
    let newStr = strMain.split(" ");
    newStr.splice(num + 1, 0, str);
    
    return newStr.join(" ");
}

module.exports = strToStr;
