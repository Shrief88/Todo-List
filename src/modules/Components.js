import { taskViewer,displayTasks } from "./taskViewer";
import localStorageHandler from "./localStorage";
import taskController from "./taskController";

//this file create the html code for new Task or new Project

function createTask(task){
    const tasks = document.querySelector('#tasks');

    const container = document.createElement('div');
    container.classList.add('task');
    container.classList.add('bottom-padding');
    container.setAttribute('id',task.id);
    container.setAttribute('data-project',task.project_id);

    const taskInfo1 = document.createElement('div');
    taskInfo1.classList.add('task-info');

    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    if(task.isDone){
        input.checked = true;
        container.classList.add('task-done');
    }
    input.addEventListener('click',(e)=>{
        taskController.statusButton(e)
    })
    taskInfo1.appendChild(input);


    const p = document.createElement('p');
    p.textContent = task.title;
    p.classList.add('task-title');
    taskInfo1.appendChild(p);

    const taskInfo2 = document.createElement('div');
    taskInfo2.classList.add('task-info');

    const editImage = createimageField("SVGs/edit.svg","Edit","Edit");
    taskInfo2.appendChild(editImage);

    const deleteImage = createimageField("SVGs/trash.svg","Delete" ,"Delete");
    deleteImage.addEventListener('click',(e)=>{
        taskController.deleteButton(e);
    })
    taskInfo2.appendChild(deleteImage);
    
    container.appendChild(taskInfo1);
    container.appendChild(taskInfo2);


    tasks.appendChild(container);

}

function createimageField(src,title){
    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.setAttribute('title',title);
    img.setAttribute('alt',title);
    return img;
}

function createProject(projectTitle){
    const projectList = document.querySelector('#projectList');

    const container = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = projectTitle;
    container.appendChild(p);
    container.setAttribute('id',projectTitle);
    container.classList.add('tast-viewer');
    container.addEventListener('click',()=>{
        taskViewer(container);
        displayTasks(localStorageHandler.getData(container.querySelector('p').textContent));
    })
    projectList.insertBefore(container,projectList.firstChild);
}

function createOption(projectTitle){
    const projectList = document.querySelector('#project');
    const option  = document.createElement('option');
    option.setAttribute('value',projectTitle);
    option.textContent = projectTitle;
    projectList.appendChild(option);
}



export {createTask,createProject,createOption};


