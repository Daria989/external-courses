function setButtonDisabled(className, isDisabled) {
    let element = document.querySelector(`.${className}`);
    element.disabled = isDisabled;
}

export function boardButtonEnable(board, tasksListLength) {
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