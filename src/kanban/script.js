let dropListTemplate = 
`<div class="drop-list">
<ul>
    <li>My account</li>
    <li>My tasks</li>
    <li>Settings</il>
    <li>Log out</li>
</ul>
</div>`

const addCardButtonBacklog = document.querySelector('.add-card-button-backlog');

const addCardButtonInProgress = document.querySelector('.add-card-button-in-progress');
addCardButtonInProgress.disabled = true;

const addCardButtonFinished = document.querySelector('.add-card-button-finished');
addCardButtonFinished.disabled = true;

const addCardButtonReady = document.querySelector('.add-card-button-ready');
addCardButtonReady.disabled = true;


const main = document.querySelector('.main');
const avatarButton = document.querySelector('.user-avatar');
const arrowButton = document.querySelector('.arrow-down');
const arrowChange = document.querySelector('.arrow-change');

let isDropListBacklogOpen = false;
let isDropdownOpened = false;

function addTemplate() {
    let dropList = document.querySelector('.drop-list');
    if (isDropdownOpened) {
        dropList.remove();
        isDropdownOpened = false;
    }
    else {
        main.insertAdjacentHTML("afterbegin", dropListTemplate);
        isDropdownOpened = true;
    }
}

function arrowUp() {
    arrowChange.classList.toggle('arrow-change');
}

function addCardBacklog() {
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

function setButtonDisabled(className, isDisabled) {
    let element = document.querySelector(`.${className}`);
    element.disabled = isDisabled;
}

function boardButtonEnable(board) {
    let className = null;

    switch (board) {
        case 'task-backlog':
            className = 'add-card-button-ready';
            break;
        case 'task-ready':
            className = 'add-card-button-in-progress';
            break;
        case 'task-in-progress':
            className = 'add-card-button-finished';
            break;
        default:
            break;
    }
    
    if (className !== null) {
        setButtonDisabled(className, false);
    }
}

function boardButtonDisable(board) {
    let className = null;

    switch (board) {
        case 'task-ready':
            className = "add-card-button-ready"; 
            break;
        case 'task-in-progress':
            className = "add-card-button-in-progress";
            break;
        case 'task-finished':
            className = "add-card-button-finished";
            break;
        default:
            break;
    }

    if (className !== null) {
        setButtonDisabled(className, true);
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

function generateHTMLDropList(fromBoardTasks) {
	let template = `<ul class='task-list'>`;
	fromBoardTasks.forEach(function(item) {
	    template +=`<li>${item.innerHTML}</li>`;
	});
	template += '</ul>';

	return template;  
}

let tasksList;
let tempTasksList;
let isListOpen = false;

function addCard(fromBoard, toBoard, event) {
    tasksList = document.querySelectorAll(`.${fromBoard}`);
    
    if (isListOpen) {
        tempTasksList.remove();
        isListOpen = false;
    }
    else if (tasksList.length !== 0) {
        let tasksDropList = generateHTMLDropList(tasksList);
        event.currentTarget.insertAdjacentHTML('beforebegin', tasksDropList);

        isListOpen = true;

        tempTasksList = document.querySelector(`.task-list`);
        tempTasksList.addEventListener('click', function(event) {chooseTask(toBoard, event)});
    }
}

function chooseTask(toBoard, event) { 
    if (event.target.tagName === "LI") {
        tempTasksList.insertAdjacentHTML("beforebegin", `<div class="${toBoard}">${event.target.innerHTML}</div>`);
        
        for(let val of tasksList) {
            if(val.innerHTML === event.target.innerHTML) {
                val.remove();
                boardButtonEnable(toBoard);
                tempTasksList.remove();
                isListOpen = false;
            }
        }
    }

    if (tasksList.length < 2) {
        boardButtonDisable(toBoard);
    }
}

function addCardReady(event) {
    addCard('task-backlog', 'task-ready', event);
}

function addCardInProgress(event) {
    addCard('task-ready', 'task-in-progress', event);
}

function addCardFinished(event) {
    addCard('task-in-progress', 'task-finished', event);
}

addCardButtonBacklog.addEventListener('click', addCardBacklog);
addCardButtonReady.addEventListener('click', addCardReady);
addCardButtonInProgress.addEventListener('click', addCardInProgress);
addCardButtonFinished.addEventListener('click', addCardFinished);

arrowButton.addEventListener('click', addTemplate);
avatarButton.addEventListener('click', addTemplate);

arrowButton.addEventListener('click', arrowUp);
avatarButton.addEventListener('click', arrowUp);
