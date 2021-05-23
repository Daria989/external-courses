import {addCard} from '../add-button/add-task.js';

export function addCardReady(event) {
    addCard('task-backlog', 'task-ready', event);
}