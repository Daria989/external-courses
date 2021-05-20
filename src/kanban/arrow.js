const main = document.querySelector('.main');
const avatarButton = document.querySelector('.user-avatar');
const arrowButton = document.querySelector('.arrow-down');
const arrowChange = document.querySelector('.arrow-change');

let dropListTemplate = 
`<div class="drop-list">
<ul>
    <li>My account</li>
    <li>My tasks</li>
    <li>Settings</il>
    <li>Log out</li>
</ul>
</div>`

let isDropdownOpened = false;

function addTemplate() {
    let dropList = document.querySelector('.drop-list');
    if (isDropdownOpened) {
        dropList.remove();
        isDropdownOpened = false;
    }
    else {
        main.insertAdjacentHTML("afterbegin", dropListTemplate);
        isDropdownOpened = true;
    }
}

function arrowUp() {
    arrowChange.classList.toggle('arrow-change');
}