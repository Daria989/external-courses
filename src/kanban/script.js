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

const addTemplate = () => {
    let isDropdownOpened = document.querySelector('.drop-list');
    if (isDropdownOpened) {
        isDropdownOpened.remove();
    }
    else { 
        list.innerHTML = dropListTemplate;
    }
}

const arrowUp = () => {
    arrowChange.classList.toggle('arrow-change');
}

arrowButton.addEventListener('click', addTemplate);
avatarButton.addEventListener('click', addTemplate);

arrowButton.addEventListener('click', arrowUp);
avatarButton.addEventListener('click', arrowUp);
