import './style.css';
import Project from './modules/project'
import displayController from './modules/displayController'
import formHandler from './modules/form';
import localStorageHandler from './modules/localStorage';
import {createProject} from './modules/Components';
import {displayTasks , taskViewer} from './modules/taskViewer';

init();


function init(){
    //this code will only run at the first time a user open the website
    if (!localStorageHandler.getData('inbox')){
        const defaultProject = new Project('inbox');
        localStorageHandler.setData(defaultProject);
        const inbox = document.querySelector('.selected');
        inbox.setAttribute('id',defaultProject.title);
    }

    // update the date in today icon 
    const today = document.querySelector('#todayDate');
    const day = new Date();
    today.textContent = day.getDate();

    //display all tasks in inbox project
    displayTasks(localStorageHandler.getData('inbox'));
    const inbox = document.querySelector('.selected');
    inbox.addEventListener('click',()=>{
        taskViewer(inbox);
        displayTasks(localStorageHandler.getData('inbox'));
    })
    
    //display all project in local storage
    let myKeysLength = localStorageHandler.getKeysLength();
    for(let i=0; i<myKeysLength;i++){
       if(localStorageHandler.getProjectByIndex(i)==="inbox"){
            continue;
        } 
       createProject(localStorageHandler.getProjectByIndex(i));
    }

    const todayDiv = document.querySelector('#today');
    todayDiv.addEventListener('click',()=>{
        taskViewer(todayDiv);
        displayTasks(localStorageHandler.getTodayTasks())
    })

    
    displayController();
    formHandler();
}










