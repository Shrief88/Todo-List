import {createTask , createProject} from './taskComponent'
import Task from './task';
import Project from './project';
import localStorageHandler from './localStorage';

const formHandler = (()=>{
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

    const projectForm = document.querySelector('#project-form');
    projectForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        let title = document.querySelector('#project-title').value;

        const newProject = new Project(title);

        localStorageHandler.setData(title,newProject.tasks);

        document.querySelector('#project-title').value = "";

        createProject(newProject);
    })
})

export default formHandler;