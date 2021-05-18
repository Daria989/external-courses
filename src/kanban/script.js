const addCardButtonBacklog = document.querySelector('.add-card-button-backlog');

const addCardButtonInProgress = document.querySelector('.add-card-button-in-progress');
addCardButtonInProgress.disabled = true;

const addCardButtonFinished = document.querySelector('.add-card-button-finished');
addCardButtonFinished.disabled = true;

const addCardButtonReady = document.querySelector('.add-card-button-ready');
addCardButtonReady.disabled = true;

let isDropListBacklogOpen = false;

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

function boardButtonEnable(board, tasksListLength) {
    let classNameEn = null;
    let classNameDis = null;

    switch (board) {
        case 'task-backlog':
            classNameEn = 'add-card-button-ready';
            break;
        case 'task-ready':
            classNameEn = 'add-card-button-in-progress';
            break;
        case 'task-in-progress':
            classNameEn = 'add-card-button-finished';
            break;
        default:
            break;
    }

    if (classNameEn !== null) {
        setButtonDisabled(classNameEn, false);
    }

    if (tasksListLength < 2) {
        switch (board) {
            case 'task-ready':
                classNameDis = "add-card-button-ready"; 
                break;
            case 'task-in-progress':
                classNameDis = "add-card-button-in-progress";
                break;
            case 'task-finished':
                classNameDis = "add-card-button-finished";
                break;
            default:
                break;
        }

        if (classNameDis !== null) {
            setButtonDisabled(classNameDis, true);
        }
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
        boardButtonEnable(toBoard, tasksList.length);

        for(let val of tasksList) {
            if(val.innerHTML === event.target.innerHTML) {
                val.remove(); 
                tempTasksList.remove();
                isListOpen = false;
            }
        }
    }

    if (tasksList.length < 2) {
        boardButtonEnable(toBoard, tasksList.length, event);
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
