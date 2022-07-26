import localStorageHandler from "./localStorage";
import {createTask} from './Components';


function taskViewer(projectDiv){
    const tasks = document.querySelector('#tasks');
    tasks.textContent="";
    
    const projects = document.querySelectorAll('.tast-viewer'); 
    projects.forEach((project)=>{
        project.classList.remove('selected');
    })
    projectDiv.classList.toggle('selected');
}





function displayTasks(tasksList){
    for (const task of tasksList){
        createTask(task);   
    }
}

export {displayTasks , taskViewer};




