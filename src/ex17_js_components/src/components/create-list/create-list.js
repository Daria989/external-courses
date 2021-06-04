import {addCardFirst, addCardButton, updateAddButton} from '../add-button/add-button-first.js';
import {addCard} from '../add-button/add-button.js';
import {updateContextMenuButton, contextMenu, contextMenuButton} from '../context-menu/context-menu.js';
const content = document.querySelector('.content');
let cardName;

export function createNewList() {
    let cardTemplate = 
    `<div class="task-block">
        <div class="card-header">
            <input type="text" class="card-name-field">
            <button class="context-menu"> . . .</button>
        </div>
        <button class="add-card-button"><span class="big-plus">+</span>&nbsp;Add card</button>
    </div>`;

    content.insertAdjacentHTML('afterbegin', cardTemplate);
    cardName = document.querySelector('.card-name-field');
    cardName.focus();
    cardName.addEventListener('blur', convertInputToDiv);
    updateAddButton();
    if (addCardButton.length > 1) {
        addCardButton[1].removeEventListener('click', addCardFirst);
        addCardButton[1].addEventListener('click', addCard);
        addCardButton[1].disabled = true;
    }
    updateContextMenuButton();
    contextMenuButton[0].addEventListener('click', contextMenu);
    addCardButton[0].addEventListener('click', addCardFirst);
}

function convertInputToDiv() {
    if (cardName.value) {
        cardName.insertAdjacentHTML('beforebegin', `<div class="task-block-header">${cardName.value}</div>`);
        cardName.remove();
    }
    else cardName.parentElement.parentElement.remove();
}
