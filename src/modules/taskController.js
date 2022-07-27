import localStorageHandler from "./localStorage";


const taskController = (()=>{
    const statusButton = (e)=>{
        const task = e.target.parentElement.parentElement;
        task.classList.toggle('task-done');      
        localStorageHandler.updateTaskStatus(task.getAttribute("data-project"),task.id)
    }

    const deleteButton = (e)=>{
        const task = e.target.parentElement.parentElement;
        localStorageHandler.deleteTask(task.getAttribute("data-project"),task.id);
        task.nextSibling.remove();
        task.remove();
    }

    const showInfo = (e)=>{
        const taskDiv = e.target.parentElement.parentElement;
        const taskInfo = taskDiv.nextSibling;
        taskInfo.classList.toggle('hide-element');
    }
    return {statusButton ,deleteButton,showInfo};
})()

export default taskController;
