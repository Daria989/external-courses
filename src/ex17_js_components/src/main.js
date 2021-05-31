import {addTemplate, arrowUp} from './components/user-menu/index.js';
import {createNewList} from './components/create-list/index.js';
import {addCard} from './components/add-button/index.js';
import {addCardFirst, addCardButton} from './components/add-button/index.js';
import {contextMenuButton, contextMenu} from './components/context-menu/index.js';

const avatarButton = document.querySelector('.user-avatar');
const arrowButton = document.querySelector('.arrow-down');
const createNewListButton = document.querySelector('.create-list');

addCardButton[0].addEventListener('click', addCardFirst);
addCardButton[1].addEventListener('click', addCard);
addCardButton[2].addEventListener('click', addCard);
addCardButton[3].addEventListener('click', addCard);

arrowButton.addEventListener('click', addTemplate);
avatarButton.addEventListener('click', addTemplate);

arrowButton.addEventListener('click', arrowUp);
avatarButton.addEventListener('click', arrowUp);

createNewListButton.addEventListener('click', createNewList);

contextMenuButton[0].addEventListener('click', contextMenu);
contextMenuButton[1].addEventListener('click', contextMenu);
contextMenuButton[2].addEventListener('click', contextMenu);
contextMenuButton[3].addEventListener('click', contextMenu);
