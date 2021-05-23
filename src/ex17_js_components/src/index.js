import {addTemplate, arrowUp} from './components/user-menu/user-menu.js';
import {addCardButtonBacklog, addCardBacklog} from './components/backlog-card/backlog-card.js';
import {addCardReady} from './components/ready-card/ready-card.js';
import {addCardInProgress} from './components/in-progress-card/in-progress-card.js';
import {addCardFinished} from './components/finished-card/finished-card.js';

const avatarButton = document.querySelector('.user-avatar');
const arrowButton = document.querySelector('.arrow-down');

const addCardButtonInProgress = document.querySelector('.add-card-button-in-progress');
addCardButtonInProgress.disabled = true;

const addCardButtonFinished = document.querySelector('.add-card-button-finished');
addCardButtonFinished.disabled = true;

const addCardButtonReady = document.querySelector('.add-card-button-ready');
addCardButtonReady.disabled = true;

addCardButtonBacklog.addEventListener('click', addCardBacklog);
addCardButtonReady.addEventListener('click', addCardReady);
addCardButtonInProgress.addEventListener('click', addCardInProgress);
addCardButtonFinished.addEventListener('click', addCardFinished);

arrowButton.addEventListener('click', addTemplate);
avatarButton.addEventListener('click', addTemplate);

arrowButton.addEventListener('click', arrowUp);
avatarButton.addEventListener('click', arrowUp);
