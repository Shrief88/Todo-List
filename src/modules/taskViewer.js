import localStorageHandler from "./localStorage";
import {createTask} from './Components';


function taskViewer(projectDiv){
    const tasks = document.querySelector('#tasks');
    tasks.textContent="";
    
    displayTasks(projectDiv.querySelector('p').textContent);

    const projects = document.querySelectorAll('.project-title'); 
    projects.forEach((project)=>{
        project.classList.remove('selected');
    })
    projectDiv.classList.toggle('selected');
}




function displayTasks(projectTitle){
    let myTasks = [];
    if(localStorageHandler.getData(projectTitle)){
        myTasks = localStorageHandler.getData(projectTitle);
    }
    for (const task of myTasks){
        createTask(task);   
    }
}

export {displayTasks , taskViewer};




