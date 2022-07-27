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
        task.remove();
    }
    return {statusButton ,deleteButton}
})()

export default taskController;
