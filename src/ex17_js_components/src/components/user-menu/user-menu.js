const arrowChange = document.querySelector('.arrow-change');
const main = document.querySelector('.main');

const dropListTemplate = 
`<div class="drop-list">
<ul>
    <li>My account</li>
    <li>My tasks</li>
    <li>Settings</il>
    <li>Log out</li>
</ul>
</div>`;

let isDropdownOpened = false;

export function addTemplate() {
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

export function arrowUp() {
    arrowChange.classList.toggle('arrow-change');
}
