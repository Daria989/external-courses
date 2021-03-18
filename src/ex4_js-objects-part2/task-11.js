function numOfEl(string) {
    let sum = {};

    string.split('').map((element) => {
        sum[element] = sum[element] ? sum[element] + 1 : 1;
	});

    for (let key in sum) {
        if(sum.hasOwnProperty(key)) {
            console.log(key + ": " + sum[key]);
        }
    }

    return;
}

module.exports = numOfEl;
