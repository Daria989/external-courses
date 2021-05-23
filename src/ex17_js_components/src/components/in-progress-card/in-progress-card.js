import {addCard} from '../add-button/add-task.js';

export function addCardInProgress(event) {
    addCard('task-ready', 'task-in-progress', event);
}