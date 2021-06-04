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
let addButton;
let footerInfo = document.querySelectorAll('.footer-info-item');

export function addCard(event) {
    addButton = event.currentTarget;
    tasksList = event.currentTarget.parentNode.previousElementSibling.querySelectorAll('.tasks');
    if (isListOpen) {
        tempTasksList.remove();
        isListOpen = false;
    }
    else if (tasksList.length !== 0) {
        let tasksDropList = generateHTMLDropList(tasksList);
        event.currentTarget.insertAdjacentHTML('beforebegin', tasksDropList); 
        isListOpen = true;
        tempTasksList = document.querySelector(`.task-list`);
        tempTasksList.addEventListener('click', function(event) {chooseTask(event)});
    }
}

function chooseTask(event) { 
    if (event.target.tagName === "LI") {
        tempTasksList.insertAdjacentHTML("beforebegin", `<div class="tasks">${event.target.innerHTML}</div>`);
        
        if (event.currentTarget.parentNode.nextElementSibling) {
            let nextButton = event.currentTarget.parentNode.nextElementSibling.querySelector('.add-card-button');
            nextButton.disabled = false;
        }

        for(let val of tasksList) {
            if(val.innerHTML === event.target.innerHTML) {
                val.remove(); 
                let taskBlock = document.querySelectorAll('.task-block');
                footerInfo[0].innerHTML = `First block tasks: &lt;${taskBlock[0].querySelectorAll('.tasks').length}&gt;`;
                footerInfo[1].innerHTML = `Last block tasks: &lt;${taskBlock[taskBlock.length-1].querySelectorAll('.tasks').length}&gt;`;
                tempTasksList.remove();
                isListOpen = false;
            }
        }
    }

    if (tasksList.length < 2) {
        addButton.disabled = true;
    }
}
