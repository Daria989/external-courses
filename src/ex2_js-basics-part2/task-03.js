function evenOddElements(arr) {
    let resultArray = [0, 0, 0];
    arr.forEach((elem) => {
        if (typeof elem !== 'number' || Number.isNaN(elem)) {  
            return;
        }
        
        if (elem === 0) { 
            resultArray[2]++;
        }
        else if (elem % 2 === 0) {
            resultArray[0]++;
        }
        else {
            resultArray[1]++;
        }
    })
    return resultArray;
}
module.exports = evenOddElements;