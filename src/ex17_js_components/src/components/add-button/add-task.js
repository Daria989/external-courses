import {boardButtonEnable} from '../add-button/add-button-disable.js';

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

export function addCard(fromBoard, toBoard, event) {
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
