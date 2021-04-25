let dropListTemplate = 
`<div class="drop-list">
<ul>
    <li>My account</li>
    <li>My tasks</li>
    <li>Settings</il>
    <li>Log out</li>
</ul>
</div>`

let arrowUpTemplate = `<img src="images/arrow-up.png" alt="image">`
let arrowDownTemplate = `<img src="images/arrow-down.png" alt="image">`

let list = document.querySelector('.content');
let avatarButton = document.querySelector('.user-avatar');
let arrowButton = document.querySelector('.arrow-down');

const addTemplate = () => {
    if (document.querySelector('.drop-list')) {
        document.querySelector('.drop-list').remove();
    }
    else { 
        list.innerHTML = dropListTemplate;
    }
}

const arrowUp = () => {
    if (document.querySelector('.drop-list')) {
        arrowButton.innerHTML = arrowUpTemplate;
    }
    else arrowButton.innerHTML = arrowDownTemplate;
}

arrowButton.addEventListener('click', addTemplate);
avatarButton.addEventListener('click', addTemplate);

arrowButton.addEventListener('click', arrowUp);
avatarButton.addEventListener('click', arrowUp);
