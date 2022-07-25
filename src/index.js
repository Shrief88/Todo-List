import './style.css';
import Task from './modules/task'
import Project from './modules/project'
import displayController from './modules/displayController'
import createTask from './modules/taskComponent'
import localStorageHandler from './modules/localStorage';


init();




function init(){
    displayController();
    
    const taskForm = document.querySelector('#form');
    taskForm.addEventListener('submit',(e)=>{
        e.preventDefault(); //prevent the from submitting 

        let title = document.querySelector('#note-title').value;
        let description = document.querySelector('#description').value;
        let priority = document.querySelector('#priority').value;
        let dueDate = document.querySelector('#due_date').value;
        let project = document.querySelector('#project').value;

        const newTask = new Task(title,description,dueDate,priority,project);

        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:none');

        createTask(newTask);
        let myTasks = [];
        if(localStorageHandler.getData('inbox')){
            myTasks = localStorageHandler.getData('inbox');
        }
        myTasks.push(newTask);
        localStorageHandler.setData("inbox",myTasks);
    })

    


    
}




