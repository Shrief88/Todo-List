import './style.css';
import Task from './modules/task'
import Project from './modules/project'
import displayController from './modules/displayController'
import createTask from './modules/taskComponent'


init();





function init(){
    displayController();
    
    const form = document.querySelector('#form');
    form.addEventListener('submit',(e)=>{

        e.preventDefault(); //prevent the from submitting 

        let title = document.querySelector('#note-title').value;
        let description = document.querySelector('#description').value;
        let priority = document.querySelector('#priority').value;
        let dueDate = document.querySelector('#due_date').value;
        let project = document.querySelector('#project').value;

        const newTask = new Task(title,description,dueDate,priority,project);

        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:none');

        console.log('fdfdf');

        createTask(newTask);
    })


    
}




