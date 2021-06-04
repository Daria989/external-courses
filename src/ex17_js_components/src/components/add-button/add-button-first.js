let taskListFirst;
let isDropListFirstOpen = false;
let footerInfo = document.querySelectorAll('.footer-info-item');
export let addCardButton = document.querySelectorAll('.add-card-button');

addCardButton[1].disabled = true;
addCardButton[2].disabled = true;
addCardButton[3].disabled = true;

export function addCardFirst() { 
    if (isDropListFirstOpen) {
        taskListFirst.remove();
        isDropListFirstOpen = false;
    }
    else {
        let template = `<input type="text" class="task-field"></input>`;
        addCardButton[0].insertAdjacentHTML("beforebegin", template);
        isDropListFirstOpen = true;
        taskListFirst = document.querySelector('.task-field');
        taskListFirst.addEventListener('blur', addTaskFirst);
    }
}

function addTaskFirst() {
    if (taskListFirst.value) {
        taskListFirst.insertAdjacentHTML("beforebegin", `<div class="tasks">${taskListFirst.value}</div>`);
        footerInfo[0].innerHTML = `Backlog tasks: &lt;${document.querySelectorAll('.task-block')[0].querySelectorAll('.tasks').length}&gt;`;
        isDropListFirstOpen = false;
        
        if ( addCardButton[1]) {
            addCardButton[1].disabled = false;
        }
        taskListFirst.remove();
    }
}

export function updateAddButton() {
    addCardButton = document.querySelectorAll('.add-card-button');
}
