function toCamelCase(str) {
    let newStr = str.toLowerCase().split(" ").map(element => 
        element[0].toUpperCase() + element.slice(1));

    return str[0].toLowerCase() + newStr.join('').slice(1); 
}

module.exports = toCamelCase;
