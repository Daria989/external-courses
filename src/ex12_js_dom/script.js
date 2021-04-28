let num = 0;
let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
let image = document.querySelector('#new-image');
let buttonLeft = document.querySelector('#button-left');
let buttonRight = document.querySelector('#button-right');

buttonRight.addEventListener("click", changeRight);
buttonLeft.addEventListener("click", changeLeft);

function changeRight() {
    
    num++;
    if (num === arr.length) {
        num = 0;
    }

    image.setAttribute('src', 'asset/'+arr[num]+'.jpg');
    image.classList.remove('animation');
    image.classList.add('animation');
}

function changeLeft() { 
    --num;
    if (num === -1) {
        num = arr.length - 1; 
    } 

    image.setAttribute('src', 'asset/'+arr[num]+'.jpg');
    image.classList.remove('animation');
    image.classList.add('animation');
}

