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

    //display all tasks in inbox project
    displayTasks('inbox');
    const inbox = document.querySelector('.selected');
    inbox.addEventListener('click',()=>{
        taskViewer(inbox);
    })
    
    //display all project in local storage
    let myKeys = localStorageHandler.getAllkeys();
    for(let i=0; i<myKeys.length;i++){
       if(localStorageHandler.getProjectByIndex(i)==="inbox"){
            continue;
        } 
       createProject(localStorageHandler.getProjectByIndex(i));
    }

    displayController();
    formHandler();
}









