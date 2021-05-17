const myInput = document.getElementById("site-search");

function debounce(callback, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}

function getSearchResult() {
    let div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = myInput.value;
}

myInput.addEventListener("keyup", debounce(getSearchResult, 2000));