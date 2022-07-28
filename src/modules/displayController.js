import { createOption } from "./Components";
import localStorageHandler from "./localStorage";


//this file handle all user actions on the page that not related to entering new data

function showTaskForm(){
    // set all form fields to empty
    document.querySelector('#note-title').value='';
    document.querySelector('#description').value= '';
    document.querySelector('#due_date').value= '';
    document.querySelector('#project').value = 'inbox';
    document.querySelector('#priority').value = 'low';

    const form = document.querySelector('#overlayForm');
    form.setAttribute('style','display:flex');

    //show the list of project in project selection field
    const projectList = document.querySelector('#project');
    projectList.textContent="";
    let myKeysLength = localStorageHandler.getKeysLength();
    for(let i=0; i<myKeysLength;i++){
        createOption(localStorageHandler.getProjectByIndex(i));
    }
}   

const displayController = ()=>{
    
    const toggleButton = document.querySelector('#toggle-button');
    toggleButton.addEventListener('click',()=>{
        const sidebar = document.querySelector('#sidebar');
        const container = document.querySelector('#container');

        //if screen side less than 900px add overlay div under the sidebar when you click the button
        if(window.innerWidth < 900){
            if(sidebar.classList.contains('hide-element')){
                const overlayDiv = document.createElement('div');
                container.appendChild(overlayDiv);
                overlayDiv.appendChild(sidebar);
                overlayDiv.setAttribute('id','overlay');
            }
            else{
                const overlayDiv = document.querySelector('#overlay');
                container.insertBefore(sidebar,container.firstChild);
                overlayDiv.remove();
            } 
        }
        sidebar.classList.toggle('hide-element')
    })

    const addTaskButton = document.querySelector('#addTaskButton');
    addTaskButton.addEventListener('click',showTaskForm)
    

    const closeFormButton = document.querySelector('#closeForm');
    closeFormButton.addEventListener('click',()=>{
        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:none');
        const taskForm = document.querySelector('#form');

        //remove the data that we add when the user click the edit button
        taskForm.classList.remove('edit');
        taskForm.removeAttribute('data-id');
        taskForm.removeAttribute('data-project');
    })

    const projectButton = document.querySelector('#showProjects');
    projectButton.addEventListener('click',()=>{
        const projectList = document.querySelector('#projectList');
        projectList.classList.toggle('hide-element');

        //make sure than the project form is not showing
        const projectForm = document.querySelector('#project-form');
        if (!projectForm.classList.contains('hide-element')){
            projectForm.classList.add('hide-element');
        }
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

    //in smaller screen we hide the sidebar by default
    if(window.innerWidth < 900){
        const sidebar = document.querySelector('#sidebar');
        sidebar.classList.add('hide-element');
    }

    window.addEventListener('resize',()=>{
        const sidebar = document.querySelector('#sidebar');
        if(window.innerWidth < 900){
            sidebar.classList.add('hide-element');
        }
        else{
            sidebar.classList.remove('hide-element');
        }
    })
}

export  {displayController , showTaskForm};