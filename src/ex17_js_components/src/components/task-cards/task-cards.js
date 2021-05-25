import {boardButtonEnable} from '../add-button/add-button-disable.js';
import {addCard} from '../add-button/add-task.js';

export const addCardButtonBacklog = document.querySelector('.add-card-button-backlog');
export let taskListBacklog;
let isDropListBacklogOpen = false;

export function addCardBacklog() {
    if (isDropListBacklogOpen) {
        taskListBacklog.remove();
        isDropListBacklogOpen = false;
    }
    else {
        let template = `<input type="text" class="task-field-backlog"></input>`;
        addCardButtonBacklog.insertAdjacentHTML("beforebegin", template);
        isDropListBacklogOpen = true;
        taskListBacklog = document.querySelector('.task-field-backlog');
        taskListBacklog.addEventListener('blur', addTaskToBacklog);
    }
}

function addTaskToBacklog() {
    if (taskListBacklog.value) {
        taskListBacklog.insertAdjacentHTML("beforebegin", `<div class="task-backlog">${taskListBacklog.value}</div>`);
        isDropListBacklogOpen = false;
        boardButtonEnable('task-backlog');
        taskListBacklog.remove();
    }
}

export function addCardFinished(event) {
    addCard('task-in-progress', 'task-finished', event);
}

export function addCardInProgress(event) {
    addCard('task-ready', 'task-in-progress', event);
}

export function addCardReady(event) {
    addCard('task-backlog', 'task-ready', event);
}
