import {createTask , createProject , createOption} from './Components'
import Task from './task';
import Project from './project';
import localStorageHandler from './localStorage';


// this file handle submutting data to our two forms 

const formHandler = (()=>{
    const addTaskButton = document.querySelector('#addTaskButton');
    addTaskButton.addEventListener('click',()=>{
        const projectList = document.querySelector('#project');
        projectList.textContent="";
        let myKeysLength = localStorageHandler.getKeysLength();
        for(let i=0; i<myKeysLength;i++){
            createOption(localStorageHandler.getProjectByIndex(i));
        }
    })

    const taskForm = document.querySelector('#form');
    taskForm.addEventListener('submit',(e)=>{
        e.preventDefault(); //prevent the from reloading 

        let title = document.querySelector('#note-title').value;
        let description = document.querySelector('#description').value;
        let priority = document.querySelector('#priority').value;
        let dueDate = document.querySelector('#due_date').value;
        let project = document.querySelector('#project').value;

        const myProject = new Project(project);
        myProject.tasks = localStorageHandler.getData(project);
        const newTask = new Task(title,description,dueDate,priority,project);
        myProject.add_task(newTask);
        localStorageHandler.setData(myProject);

        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:none');

        const selectedProject = document.querySelector('.selected').querySelector('p').textContent;

        const todayObject = new Date();
        const today =  `${todayObject.getFullYear()}-${("0" + (todayObject.getMonth()+1)).slice(-2)
        }-${("0"+todayObject.getDate()).slice(-2)}`;
        if(selectedProject === project || dueDate == today){
            createTask(newTask);
        }
    })

    const projectForm = document.querySelector('#project-form');
    projectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        let title = document.querySelector('#project-title').value;

        const newProject = new Project(title);
        localStorageHandler.setData(newProject);

        document.querySelector('#project-title').value = "";
        createProject(title);
    })
})

export default formHandler;