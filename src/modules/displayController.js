import localStorageHandler from './localStorage';
import createTask from './taskComponent'

const displayController = (()=>{

    let myTasks = [];
    if(localStorageHandler.getData('inbox')){
        myTasks = localStorageHandler.getData('inbox');
    }
    

    for (const task of myTasks){
        createTask(task);
    }

    const toggleButton = document.querySelector('#toggle-button');
    toggleButton.addEventListener('click',()=>{
        const sidebar = document.querySelector('#sidebar');
        sidebar.classList.toggle('hide-element')
    })


    const addNoteButton = document.querySelector('#addNoteButton');
    addNoteButton.addEventListener('click',()=>{
        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:flex');
    })

    const closeFormButton = document.querySelector('#closeForm');
    closeFormButton.addEventListener('click',()=>{
        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:none');
    })

    const projectButton = document.querySelector('#showProjects');
    projectButton.addEventListener('click',()=>{
        const projectList = document.querySelector('#projectList');
        projectList.classList.toggle('hide-element');
    })

    const projectFormButton = document.querySelector('#addProject');
    projectFormButton.addEventListener('click',()=>{
        const projectForm = document.querySelector('#project-form');
        projectForm.classList.toggle('hide-element');
    })

    const projectCancelButton = document.querySelector('#cancel');
    projectCancelButton.addEventListener('click',()=>{
        const projectForm = document.querySelector('#project-form');
        projectForm.classList.toggle('hide-element');
    })
    

    
})

export default displayController;