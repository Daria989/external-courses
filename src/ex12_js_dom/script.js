let num = 0;
let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
let image = document.querySelector('#new-image');
let buttonLeft = document.querySelector('#button-left');
let buttonRight = document.querySelector('#button-right');

buttonRight.addEventListener("click", changeRight);
buttonLeft.addEventListener("click", changeLeft);

image.addEventListener('animationend', removeClass);

function removeClass() {
    image.classList.remove('animation');
}

function changeRight() { 
    num++;
    if (num === arr.length) {
        num = 0;
    }

    image.classList.add('animation');
    image.setAttribute('src', 'asset/'+arr[num]+'.jpg');  
}

function changeLeft() { 
    --num;
    if (num === -1) {
        num = arr.length - 1; 
    }
    
    image.classList.add('animation');
    image.setAttribute('src', 'asset/'+arr[num]+'.jpg');
}

