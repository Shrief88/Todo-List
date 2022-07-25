import './style.css';
import Task from './modules/task'
import Project from './modules/project'
import displayController from './modules/displayController'
import formHandler from './modules/form';
import localStorageHandler from './modules/localStorage';




init();




function init(){
    displayController();
    formHandler();
}




