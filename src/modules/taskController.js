import { ta } from "date-fns/locale";
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

    const showEidtForm = (e)=>{
        const taskDiv = e.target.parentElement.parentElement;
        const task = localStorageHandler.getTaskById(taskDiv.getAttribute("data-project"),taskDiv.id);
        document.querySelector('#note-title').value= task.title;
        document.querySelector('#description').value= task.description;
        document.querySelector('#due_date').value= task.dueDate;
        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:flex');

    }

    return {statusButton ,deleteButton,showInfo , showEidtForm};
})()

export default taskController;
