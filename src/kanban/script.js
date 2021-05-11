let dropListTemplate = 
`<div class="drop-list">
<ul>
    <li>My account</li>
    <li>My tasks</li>
    <li>Settings</il>
    <li>Log out</li>
</ul>
</div>`


let main = document.querySelector('.main');
let avatarButton = document.querySelector('.user-avatar');
let arrowButton = document.querySelector('.arrow-down');
let arrowChange = document.querySelector('.arrow-change');

let isDropListBacklogOpen = false;
let isDropdownOpened = false;
let isDropListReadyOpen = false;
let isDropListInProgressOpen = false;
let isDropListFinishedOpen = false;

let addCardButtonBacklog = document.querySelector('.add-card-button-backlog');
let addCardButtonInProgress = document.querySelector('.add-card-button-in-progress');
let addCardButtonFinished = document.querySelector('.add-card-button-finished');
let addCardButtonReady = document.querySelector('.add-card-button-ready');

addCardButtonReady.disabled = true;
addCardButtonInProgress.disabled = true;
addCardButtonFinished.disabled = true;

// Drop-down menu

const addTemplate = () => {
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

const arrowUp = () => {
    arrowChange.classList.toggle('arrow-change');
}

// TASK CARDS

//Backlog

const addCardBacklog = () => {
    let taskListBacklog = document.querySelector('.task-list-backlog');
    if (isDropListBacklogOpen) {
        taskListBacklog.remove();
        isDropListBacklogOpen = false;
    }
    else {
        let addCardBacklogTemplate = `<input type="text" class="task-list-backlog"></input>`;
        addCardButtonBacklog.insertAdjacentHTML("beforebegin", addCardBacklogTemplate);
        isDropListBacklogOpen = true;
    }

    if (document.querySelector('.task-list-backlog')) {
        let taskListBacklog = document.querySelector('.task-list-backlog');
        taskListBacklog.addEventListener('blur', chooseTaskBacklog);
    }
}

const chooseTaskBacklog = () => {
    let taskListBacklog = document.querySelector('.task-list-backlog');
    if (taskListBacklog.value) {
        taskListBacklog.insertAdjacentHTML("beforebegin", '<div class="task-card task-backlog">' + taskListBacklog.value + '</div>');
        addCardButtonReady.disabled = false;
        taskListBacklog.remove();
        isDropListBacklogOpen = false;
    }
    else {addCardButtonReady.disabled = true;
    }
}

// Ready

const addCardReady = () => { 

    let textValueBacklog = document.querySelectorAll('.task-backlog');
    let taskListReady = document.querySelector('.task-list-ready');

    if (isDropListReadyOpen) {
        taskListReady.remove();
        isDropListReadyOpen = false;
    }
    else if (textValueBacklog.length !== 0) {
        let addCardReadyTemplate = '<ul class="task-list-ready">';

        textValueBacklog.forEach(function(item) {
            addCardReadyTemplate +='<li>'+ item.innerHTML +'</li>';
        });

        addCardReadyTemplate += '</ul>';

        addCardButtonReady.insertAdjacentHTML('beforebegin', addCardReadyTemplate);
        isDropListReadyOpen = true;
    }

    if (document.querySelector('.task-list-ready')) {
        let taskListReady = document.querySelector('.task-list-ready');
        taskListReady.addEventListener('click', chooseTaskReady);
    }
}

const chooseTaskReady = (event) => { 
    let taskListReady = document.querySelector('.task-list-ready');
    let textValueBacklog = document.querySelectorAll('.task-backlog');
    if (event.target.tagName === "LI") {
        taskListReady.insertAdjacentHTML("beforebegin", '<div class="task-card task-ready">' + event.target.innerHTML + '</div>');
        addCardButtonInProgress.disabled = false;

        for(let val of textValueBacklog) {
            if(val.innerHTML === event.target.innerHTML) {
                val.remove();
                taskListReady.remove();
                isDropListReadyOpen = false;

            }
        }
    } 
}

// In Progress

const addCardInProgress = () => {
    let tasksReady = document.querySelectorAll('.task-ready');
    let taskListInProgress = document.querySelector('.task-list-in-progress');
    
    if (isDropListInProgressOpen) {
        taskListInProgress.remove();
        isDropListInProgressOpen = false;
    }
    else if (tasksReady.length !== 0) {
        let addCardInProgressTemplate = '<ul class="task-list-in-progress">';
        
        tasksReady.forEach(function(item) {
            addCardInProgressTemplate +='<li>'+ item.innerHTML + '</li>';
        });

        addCardInProgressTemplate += '</ul>';
        addCardButtonInProgress.insertAdjacentHTML("beforebegin", addCardInProgressTemplate);
        isDropListInProgressOpen = true;
    }

    if (document.querySelector('.task-list-in-progress')) {
        let taskListInProgress = document.querySelector('.task-list-in-progress');
        taskListInProgress.addEventListener('click', chooseTaskInProgress);
    }
}

const chooseTaskInProgress = (event) => {
    let taskListInProgress = document.querySelector('.task-list-in-progress');
    let tasksReady = document.querySelectorAll('.task-ready');
    if (event.target.tagName === "LI") {
        taskListInProgress.insertAdjacentHTML("beforebegin", '<div class="task-card task-in-progress">' + event.target.innerHTML + '</div>');
        addCardButtonFinished.disabled = false;

        for(let val of tasksReady) {
            if(val.innerHTML === event.target.innerHTML) {
                val.remove();
                taskListInProgress.remove();
                isDropListInProgressOpen = false;
            }
        }
    }
}

    //Finished

const addCardFinished = () => {
    let tasksInProgress = document.querySelectorAll('.task-in-progress');
    let taskListFinished = document.querySelector('.task-list-finished');

    if (isDropListFinishedOpen) {
        taskListFinished.remove();
        isDropListFinishedOpen = false;
    }
    else if (tasksInProgress.length !== 0) {
        let addCardFinishedTemplate = '<ul class="task-list-finished">';

        tasksInProgress.forEach(function(item) {
            addCardFinishedTemplate +='<li>'+ item.innerHTML + '</li>';
        });

        addCardFinishedTemplate += '</ul>';
        addCardButtonFinished.insertAdjacentHTML("beforebegin", addCardFinishedTemplate);
        isDropListFinishedOpen = true;
    }
    
    if (document.querySelector('.task-list-finished')) {
        let taskListFinished = document.querySelector('.task-list-finished');
        taskListFinished.addEventListener('click', chooseTaskFinished);
    }
}

const chooseTaskFinished = (event) => {
    let taskListFinished = document.querySelector('.task-list-finished');
    let tasksInProgress = document.querySelectorAll('.task-in-progress');
    if (event.target.tagName === "LI") {
        taskListFinished.insertAdjacentHTML("beforebegin", '<div class="task-card task-finished">' + event.target.innerHTML + '</div>');

        for(let val of tasksInProgress) {
            if(val.innerHTML === event.target.innerHTML) {
                val.remove();
                taskListFinished.remove();
                isDropListFinishedOpen = false;
            }
        }
    }
}

addCardButtonBacklog.addEventListener('click', addCardBacklog);
addCardButtonInProgress.addEventListener('click', addCardInProgress);
addCardButtonFinished.addEventListener('click', addCardFinished);
addCardButtonReady.addEventListener('click', addCardReady);

arrowButton.addEventListener('click', addTemplate);
avatarButton.addEventListener('click', addTemplate);

arrowButton.addEventListener('click', arrowUp);
avatarButton.addEventListener('click', arrowUp);
