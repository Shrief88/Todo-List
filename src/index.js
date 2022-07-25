import './style.css';
import Project from './modules/project'
import displayController from './modules/displayController'
import formHandler from './modules/form';
import localStorageHandler from './modules/localStorage';
import {createProject, createTask} from './modules/Components'


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
    let myTasks = [];
    if(localStorageHandler.getData('inbox')){
        myTasks = localStorageHandler.getData('inbox');
    }
    for (const task of myTasks){
        createTask(task);
    }

    //display all project in local storage
    let myKeys = localStorageHandler.getAllkeys();
    for(let i=1; i<myKeys.length;i++){
       createProject(localStorageHandler.getProjectByIndex(i));
    }

    displayController();
    formHandler();
}




