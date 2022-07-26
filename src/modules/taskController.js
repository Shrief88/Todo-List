import localStorageHandler from "./localStorage";

const taskController = (()=>{
    const statusButton = (e)=>{
        const task = e.target.parentElement.parentElement;
        task.classList.toggle('task-done');      
        localStorageHandler.updateTaskStatus(task.getAttribute("data-project"),task.id)
    }

    return {statusButton}
})()

export default taskController;
