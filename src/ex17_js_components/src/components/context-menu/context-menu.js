import {addCardFirst, addCardButton, updateAddButton} from '../add-button/add-button-first.js';
import {addCard} from '../add-button/add-button.js';
export let contextMenuButton = document.querySelectorAll('.context-menu');

let isContextMenuOpen = false;
let contextMenuList;
let footerInfo = document.querySelectorAll('.footer-info-item');
const dropListContextMenu = 
`<div class="drop-list-context-menu"> Delete </div>`;

export function contextMenu(event) {
    if (isContextMenuOpen) {
        contextMenuList.remove();
        isContextMenuOpen = false;
    }
    else {
        event.target.parentElement.insertAdjacentHTML("afterend", dropListContextMenu);
        isContextMenuOpen = true;
        contextMenuList = event.target.parentElement.parentElement.querySelector('.drop-list-context-menu');
        contextMenuList.addEventListener('click', function() {deleteCard(event)});
    }
}

function deleteCard(event) {
    event.target.parentElement.parentElement.remove(); 
    updateAddButton();
    let taskBlock = document.querySelectorAll('.task-block');
    footerInfo[0].innerHTML = `First block tasks: &lt;${taskBlock[0].querySelectorAll('.tasks').length}&gt;`;
    footerInfo[1].innerHTML = `Last block tasks: &lt;${taskBlock[taskBlock.length-1].querySelectorAll('.tasks').length}&gt;`;
    if (addCardButton.length > 0) {
        addCardButton[0].removeEventListener('click', addCard);
        addCardButton[0].addEventListener('click', addCardFirst);
        addCardButton[0].disabled = false;
        if (addCardButton[1]) {
            addCardButton[1].disabled = false;
        }
        isContextMenuOpen = false;
    }
    else {
        // eslint-disable-next-line no-alert
        alert("You have no active tasks. To create a new list, click the 'Create new list' button");
        isContextMenuOpen = false;
    }     
}

export function updateContextMenuButton() {
    contextMenuButton = document.querySelectorAll('.context-menu');
}
