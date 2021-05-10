let dropListTemplate = 
`<div class="drop-list">
<ul>
    <li>My account</li>
    <li>My tasks</li>
    <li>Settings</il>
    <li>Log out</li>
</ul>
</div>`

let list = document.querySelector('.content');
let avatarButton = document.querySelector('.user-avatar');
let arrowButton = document.querySelector('.arrow-down');
let arrowChange = document.querySelector('.arrow-change');
let isDropdownOpened = false;

const addTemplate = () => {
    let dropList = document.querySelector('.drop-list');
    if (isDropdownOpened) {
        dropList.remove();
        isDropdownOpened = false;
    }
    else { 
        list.innerHTML = dropListTemplate;
        isDropdownOpened = true;
    }
}

const arrowUp = () => {
    arrowChange.classList.toggle('arrow-change');
}

arrowButton.addEventListener('click', addTemplate);
avatarButton.addEventListener('click', addTemplate);

arrowButton.addEventListener('click', arrowUp);
avatarButton.addEventListener('click', arrowUp);
