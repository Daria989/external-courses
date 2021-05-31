const myInput = document.getElementById("site-search");

function debounce(callback, delay) {
    let timeout;
    return function(event) {
        clearTimeout(timeout);
        timeout = setTimeout(function() { callback(event) }, delay);
    }
}

function getSearchResult(event) {
    let div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = event.target.value;
}

myInput.addEventListener("input", debounce(function(event) { getSearchResult(event) }, 1000));
