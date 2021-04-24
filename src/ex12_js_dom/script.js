let num = 0;
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
let image = document.querySelector('#new-image');
let buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");
buttonRight.onclick = function changeRight() {
    num++;
    if (num === arr.length) {
        num = 0;
    }

    image.setAttribute("src", 'asset/'+arr[num]+'.jpg');
    image.setAttribute("class", "animation");
    setTimeout(function(){
        image.removeAttribute("class");
    }, 600);
}

buttonLeft.onclick = function changeLeft() {
    num--;
    if (num === -1) {
        num = arr.length -1; 
    } 

    image.setAttribute("src", 'asset/'+arr[num]+'.jpg'); 
    image.setAttribute("class", "animation");
    setTimeout(function(){
        image.removeAttribute("class");
    }, 600);
}

