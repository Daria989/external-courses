import {addCard} from '../add-button/add-task.js';

export function addCardFinished(event) {
    addCard('task-in-progress', 'task-finished', event);
}