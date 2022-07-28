import {createTask , createTaskInfo} from './Components';


function sidebarNavigator(projectDiv){
    const projects = document.querySelectorAll('.tast-viewer'); 
    projects.forEach((project)=>{
        project.classList.remove('selected');
    })
    projectDiv.classList.toggle('selected');
}



function displayTasks(tasksList){
    const tasks = document.querySelector('#tasks');
    tasks.textContent="";
    for (const task of tasksList){
        createTask(task); 
        createTaskInfo(task)
    }
}

export {displayTasks , sidebarNavigator};




